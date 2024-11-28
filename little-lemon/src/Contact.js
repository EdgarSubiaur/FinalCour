function Contact() {
    return (
<section className="contact">
  <h2>Horario de atencion</h2>

  <p> <strong>Lunes a Domingo - 12:00 PM a 10:00 PM</strong> </p>

  <div className="contact-info">
    <h3>Información de Contacto</h3>
    <ul className="lista">
      <li><strong>Dirección:</strong> Calle Ficticia 123, Ciudad, País</li>
      <li><strong>Teléfono:</strong> +123 456 7890</li>
      <li><strong>Email:</strong> contacto@littlelemon.com</li>
    </ul>
  </div>

  <div className="social-media">
    <h3>Síguenos en nuestras Redes Sociales</h3>
    <ul>
      <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
      <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X</a></li>
    </ul>
  </div>
</section>
    );
}

export default Contact;