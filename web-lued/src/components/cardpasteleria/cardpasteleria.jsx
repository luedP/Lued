import React, { useContext } from 'react';
import './cardpasteleria.css';
import { SearchContext } from '../context/SearchContext'; // Asegúrate de importar desde el archivo correcto
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const productos = [
  {
    id: 1,
    nombre: 'Pastel de Chocolate',
    descripcion: 'Delicioso pastel de chocolate con cobertura de ganache.',
    precio: '$20.00',
    imagen: 'ruta/a/imagen-chocolate.jpg',
    categoria: 'Pasteles'
  },
  {
    id: 2,
    nombre: 'Tarta de Fresa',
    descripcion: 'Tarta de fresa fresca con crema pastelera.',
    precio: '$25.00',
    imagen: 'ruta/a/imagen-fresa.jpg',
    categoria: 'Pasteles'
  },
  {
    id: 3,
    nombre: 'Cheesecake',
    descripcion: 'Clásico cheesecake con base de galleta.',
    precio: '$22.00',
    imagen: 'ruta/a/imagen-cheesecake.jpg',
    categoria: 'Pasteles'
  },
  {
    id: 4,
    nombre: 'Macarons',
    descripcion: 'Pequeños bocados de cielo en diversos sabores.',
    precio: '$15.00',
    imagen: 'ruta/a/imagen-macarons.jpg',
    categoria: 'Petit'
  },
  {
    id: 5,
    nombre: 'Rebanada de Tres Leches',
    descripcion: 'Suave y jugosa rebanada de pastel de tres leches.',
    precio: '$5.00',
    imagen: 'ruta/a/imagen-tres-leches.jpg',
    categoria: 'Rebanadas'
  },
  // Agrega más productos según sea necesario
];

function CardPasteleria() {
  const { searchTerm } = useContext(SearchContext);

  // Función para filtrar los productos según el término de búsqueda y categoría
  const filterByCategory = (category) => {
    return productos.filter(producto =>
      producto.categoria === category &&
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Filtrar productos por categoría
  const pasteles = filterByCategory('Pasteles');
  const petit = filterByCategory('Petit');
  const rebanadas = filterByCategory('Rebanadas');

  return (
    <div className="catalogo">
      {/* Mostrar sección de Pasteles si hay productos */}
      {pasteles.length > 0 && (
        <div className="categoria">
          <h1>Pasteles</h1>
          <div className="seccion">
            {pasteles.map(producto => (
              <Card key={producto.id} className="producto-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={producto.imagen}
                  alt={producto.nombre}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {producto.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {producto.descripcion}
                  </Typography>
                  <Typography variant="body1" className="precio">
                    {producto.precio}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Mostrar sección de Petit si hay productos */}
      {petit.length > 0 && (
        <div className="categoria">
          <h1>Petit</h1>
          <div className="seccion">
            {petit.map(producto => (
              <Card key={producto.id} className="producto-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={producto.imagen}
                  alt={producto.nombre}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {producto.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {producto.descripcion}
                  </Typography>
                  <Typography variant="body1" className="precio">
                    {producto.precio}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Mostrar sección de Rebanadas si hay productos */}
      {rebanadas.length > 0 && (
        <div className="categoria">
          <h1>Rebanadas</h1>
          <div className="seccion">
            {rebanadas.map(producto => (
              <Card key={producto.id} className="producto-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={producto.imagen}
                  alt={producto.nombre}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {producto.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {producto.descripcion}
                  </Typography>
                  <Typography variant="body1" className="precio">
                    {producto.precio}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Mostrar mensaje si no hay productos */}
      {pasteles.length === 0 && petit.length === 0 && rebanadas.length === 0 && (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default CardPasteleria;