// src/BookingForm.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { submitAPI } from "./Api";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00",
  ]);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
    updateTimes(today);
  }, []);

  useEffect(() => {
    setIsFormValid(
      name && date && time && guests >= 1 && guests <= 10 && occasion
    );
  }, [name, date, time, guests, occasion]);

  const updateTimes = (selectedDate) => {
    setAvailableTimes(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, date, time, guests, occasion };
    const success = await submitAPI(formData);
    if (success) {
      navigate("/confirmed"); // Redirigir a la página de confirmación
    } else {
      alert("Failed to submit the reservation.");
    }
  };

  return (
    <>
      <section className="hero">
        <h1>Reserva tu mesa en Little Lemon</h1>
        <p>Disfruta de una experiencia culinaria única con nuestros exquisitos platillos.</p>
      </section>

      {/* Contenedor del formulario con estilo centrado */}
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              updateTimes(e.target.value);
            }}
            min={new Date().toISOString().split("T")[0]}
            required
          />

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            {availableTimes.length > 0 ? (
              availableTimes.map((timeOption, index) => (
                <option key={index} value={timeOption}>
                  {timeOption}
                </option>
              ))
            ) : (
              <option value="">No available times</option>
            )}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>

          <input
            type="submit"
            value="Make Your Reservation"
            disabled={!isFormValid}
            style={styles.submitButton}
          />
        </form>
      </div>

      <section className="info" style={{ marginTop: "40px" }}>
        <h4>Política de Reservas</h4>
        <p>
          Las reservas deben realizarse con al menos 24 horas de antelación. En
          caso de no poder asistir, por favor avísenos con 12 horas de
          antelación para liberar su mesa.
        </p>
        <p>¡Esperamos verte pronto en Little Lemon!</p>
      </section>
    </>
  );
};

const styles = {
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
    padding: "20px",
  },
  form: {
    display: "grid",
    gap: "20px",
    maxWidth: "400px",
    width: "100%",
    backgroundColor: "#4CAF40",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  },
  submitButton: {
    backgroundColor: "#FFEB3B", // Fondo amarillo
    color: "#000",
    border: "none",
    padding: "15px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

export default BookingForm;
