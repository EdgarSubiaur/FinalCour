function About() {
  return (
    <main>
      <section className="restaurant-features">
        <h2>Características del Restaurante</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Nuestra Historia</h3>
            <p>
              La historia de <strong>Little Lemon</strong> comienza con una pasión por la cocina y un sueño de compartir el amor por la comida fresca y saludable. Fundado por un grupo de amigos, nuestro restaurante ha evolucionado, adaptándose a las tendencias sin perder su esencia.
            </p>
          </div>
          <div className="feature-card">
            <h3>Nuestra Misión</h3>
            <p>
              En <strong>Little Lemon</strong>, nuestra misión es ofrecer una experiencia gastronómica que crea recuerdos. Nos esforzamos por ofrecer platos de alta calidad, con un servicio excepcional, en un ambiente relajado y amigable.
            </p>
          </div>
          <div className="feature-card">
            <h3>Nuestra Visión</h3>
            <p>
              Ser el restaurante líder en nuestra comunidad, reconocido por su compromiso con la calidad, la innovación y la sostenibilidad. Buscamos expandir nuestra presencia, siempre manteniendo nuestra filosofía de comida deliciosa y fresca.
            </p>
          </div>
        </div>
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
        <blockquote>
          "Una experiencia increíble, con un menú delicioso y un ambiente acogedor. ¡Definitivamente volveré!"
          <footer>- María L.</footer>
        </blockquote>
      </section>
    </main>
  );
}

export default About;
