import React from 'react';
import './CardHome.scss';

const CardHome = () => {
  return (
    <div className="card">
      

    {/* Sección de ¿Quiénes Somos? */}
      <div className="section">
        <h2>¿Quiénes Somos?</h2>
        <p>En Panaderia-Pastelería "Lued", nos apasiona crear momentos dulces y memorables para ti y tus seres queridos. Cada creación cuenta una historia única, elaborada con el más alto nivel de dedicación y calidad.</p>
      </div>

      {/* Sección de Videos */}
      <div className="section">
        <h2>Videos</h2>
        <ul>
          <li><a href="#">Video 1: Título del video</a> - Breve descripción del contenido.</li>
          <li><a href="#">Video 2: Título del video</a> - Breve descripción del contenido.</li>
          <li><a href="#">Video 3: Título del video</a> - Breve descripción del contenido.</li>
        </ul>
      </div>


      {/* Sección de Historias en React */}
      <div className="section">
        <h2>Historias en React</h2>
        <p>Descubre las historias detrás de nuestras creaciones más emblemáticas, contadas desde el corazón de nuestros pasteleros y reposteros expertos. Cada postre tiene una historia; cada historia, un sabor que te enamorará.</p>
      </div>

      {/* Sección de Contáctanos */}
      <div className="section">
        <h2>Contáctanos</h2>
        <p>Teléfono: <a href="tel:+123456789">+12 3456 789</a></p>
        <p>Correo Electrónico: <a href="mailto:info@dulceencanto.com">info@dulceencanto.com</a></p>
        <p>Visítanos en: Calle Principal #123, Ciudad, País</p>
      </div>

      {/* Sección de Redes Sociales */}
      <div className="section">
        <h2>Síguenos en Redes Sociales</h2>
        <p>
          <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">YouTube</a>
        </p>
      </div>

      {/* Horario de Atención */}
      <div className="section">
        <h2>Horario de Atención</h2>
        <p><strong>Lunes a Viernes:</strong> 9:00 am - 6:00 pm</p>
        <p><strong>Sábados:</strong> 10:00 am - 4:00 pm</p>
        <p><strong>Domingos:</strong> Cerrado</p>
      </div>
    </div>
  );
}

export default CardHome;
