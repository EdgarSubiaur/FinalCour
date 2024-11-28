import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { submitAPI } from './Api'; // Suponemos que esta función está definida en otro archivo

// Inicializar horas disponibles
const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// Reducer para actualizar horas disponibles
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload; // Devuelve las horas disponibles de la API
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate(); // Hook de navegación

  // Función para enviar el formulario
  const submitForm = async (formData) => {
    // Aquí realizamos la llamada a la API para enviar los datos del formulario
    const response = await submitAPI(formData);
    if (response) {
      // Si la respuesta es exitosa, navegamos a la página de confirmación
      navigate('/confirmed');
    } else {
      // Manejo de error si la API falla
      alert('Error al realizar la reserva');
    }
  };

  // Función para obtener los horarios desde la API
  const fetchAvailableTimes = async (selectedDate) => {
    // Realizar la llamada a la API (simulada aquí como ejemplo)
    const response = await fetch(`https://api.example.com/getTimes?date=${selectedDate}`);
    const data = await response.json();
    if (data.times && data.times.length > 0) {
      dispatch({ type: 'UPDATE_TIMES', payload: data.times });
    } else {
      dispatch({ type: 'UPDATE_TIMES', payload: initializeTimes() }); // Si no hay respuesta, ponemos las horas predeterminadas
    }
  };

  // Función para manejar el cambio de fecha
  const handleDateChange = (selectedDate) => {
    fetchAvailableTimes(selectedDate); // Obtiene los horarios para la nueva fecha
  };

  return (
    <div>
      <BookingForm
        availableTimes={availableTimes} // Pasa las horas disponibles al formulario
        updateTimes={handleDateChange} // Pasa la función para actualizar las horas según la fecha
        submitForm={submitForm} // Pasa la función para enviar el formulario
      />
    </div>
  );
};

export default Main;


