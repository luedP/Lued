import React from 'react';
import { Card, CardContent, Typography, Link, Box } from '@mui/material';
import './CardHome.scss';

const CardHome = () => {
  return (
    <Box className="card-home">
      <Card className="card">
        <CardContent>
          {/* Sección de ¿Quiénes Somos? */}
          <Box className="section" mb={4}>
            <Typography variant="h4" component="h2" gutterBottom>¿Quiénes Somos?</Typography>
            <Typography variant="body1">
              En Panadería-Pastelería "Lued", nos apasiona crear momentos dulces y memorables para ti y tus seres queridos. Cada creación cuenta una historia única, elaborada con el más alto nivel de dedicación y calidad.
            </Typography>
          </Box>

          {/* Sección de Videos */}
          <Box className="section" mb={4}>
            <Typography variant="h4" component="h2" gutterBottom>Videos</Typography>
            <ul>
              <li><Link href="#" variant="body1">Video 1: Título del video</Link> - Breve descripción del contenido.</li>
              <li><Link href="#" variant="body1">Video 2: Título del video</Link> - Breve descripción del contenido.</li>
              <li><Link href="#" variant="body1">Video 3: Título del video</Link> - Breve descripción del contenido.</li>
            </ul>
          </Box>

          {/* Sección de Historias en React */}
          <Box className="section" mb={4}>
            <Typography variant="h4" component="h2" gutterBottom>Historias en React</Typography>
            <Typography variant="body1">
              Descubre las historias detrás de nuestras creaciones más emblemáticas, contadas desde el corazón de nuestros pasteleros y reposteros expertos. Cada postre tiene una historia; cada historia, un sabor que te enamorará.
            </Typography>
          </Box>

          {/* Sección de Contáctanos */}
          <Box className="section" mb={4}>
            <Typography variant="h4" component="h2" gutterBottom>Contáctanos</Typography>
            <Typography variant="body1">Teléfono: <Link href="tel:+123456789">+12 3456 789</Link></Typography>
            <Typography variant="body1">Correo Electrónico: <Link href="mailto:info@dulceencanto.com">info@dulceencanto.com</Link></Typography>
            <Typography variant="body1">Visítanos en: Calle Principal #123, Ciudad, País</Typography>
          </Box>

          {/* Sección de Redes Sociales */}
          <Box className="section" mb={4}>
            <Typography variant="h4" component="h2" gutterBottom>Síguenos en Redes Sociales</Typography>
            <Typography variant="body1">
              <Link href="#">Facebook</Link> | <Link href="#">Instagram</Link> | <Link href="#">YouTube</Link>
            </Typography>
          </Box>

          {/* Horario de Atención */}
          <Box className="section">
            <Typography variant="h4" component="h2" gutterBottom>Horario de Atención</Typography>
            <Typography variant="body1"><strong>Lunes a Viernes:</strong> 9:00 am - 6:00 pm</Typography>
            <Typography variant="body1"><strong>Sábados:</strong> 10:00 am - 4:00 pm</Typography>
            <Typography variant="body1"><strong>Domingos:</strong> Cerrado</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CardHome;

