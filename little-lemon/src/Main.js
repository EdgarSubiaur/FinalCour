// src/Main.js
function Main() {
    return (
      <main>
        <section className="hero">
          <h1>Reserva tu mesa en Little Lemon</h1>
          <p>Disfruta de una experiencia culinaria única con nuestros exquisitos platillos.</p>
        </section>
  
        <section className="reservation-form">
          <h2>Realiza tu Reserva</h2>
          <form>
            <div>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="date">Fecha</label>
              <input type="date" id="date" name="date" required />
            </div>
            <div>
              <label htmlFor="time">Hora</label>
              <input type="time" id="time" name="time" required />
            </div>
            <div>
              <label htmlFor="guests">Número de personas</label>
              <input type="number" id="guests" name="guests" min="1" required />
            </div>
            <button type="submit">Confirmar Reserva</button>
          </form>
        </section>
  
        <section className="restaurant-features">
          <h2>Lo que hace único a Little Lemon</h2>
          <ul>
            <li><strong>Comida fresca y local:</strong> Trabajamos con los mejores proveedores locales.</li>
            <li><strong>Ambiente acogedor:</strong> El lugar perfecto para cualquier ocasión.</li>
            <li><strong>Menú de temporada:</strong> Disfruta de platillos que cambian según la temporada.</li>
          </ul>
        </section>
  
        <section className="testimonials">
          <h2>Lo que dicen nuestros clientes</h2>
          <blockquote>
            "¡La mejor experiencia gastronómica de mi vida! Los platillos son deliciosos y el servicio excepcional."
            <footer>- Ana P.</footer>
          </blockquote>
          <blockquote>
            "Un lugar increíble para cenar con amigos. Siempre disfruto el ambiente relajado y la comida fresca."
            <footer>- Carlos R.</footer>
          </blockquote>
        </section>
  
        <section className="info">
          <h2>Política de Reservas</h2>
          <p>Las reservas deben realizarse con al menos 24 horas de antelación. En caso de no poder asistir, por favor avísenos con 12 horas de antelación para liberar su mesa.</p>
          <p>¡Esperamos verte pronto en Little Lemon!</p>
        </section>
      </main>
    );
  }
  
  export default Main;
  