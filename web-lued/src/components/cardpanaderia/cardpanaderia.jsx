import React, { useContext } from 'react';
import './cardpanaderia.css';
import { SearchContext } from '../context/SearchContext'; // Asegúrate de importar desde la ruta correcta
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const productos = [
  {
    id: 1,
    nombre: 'Chocolatin Tigre',
    descripcion: 'Masa de Croissant rellena de Mazapán de Cacao.',
    precio: '$45.00',
    imagen: '/src/components/cardpanaderia/chocolatintigre.jfif',
    categoria: 'Panes Dulces'
  },
  {
    id: 2,
    nombre: 'Oreja',
    descripcion: 'Palmera de Masa de Hojaldre.',
    precio: '$25.00',
    imagen: '/src/components/cardpanaderia/oreja.jfif ',
    categoria: 'Panes Dulces'
  },
  {
    id: 3,
    nombre: 'Cheesecake',
    descripcion: 'Clásico cheesecake con base de galleta.',
    precio: '$22.00',
    imagen: 'ruta/a/imagen-cheesecake.jpg',
    categoria: 'Panes Dulces'
  },
  {
    id: 4,
    nombre: 'Baguette',
    descripcion: 'Pan francés crujiente.',
    precio: '$30.00',
    imagen: 'ruta/a/imagen-baguette.jpg',
    categoria: 'Panes Salados'
  },
  {
    id: 5,
    nombre: 'Ciabatta',
    descripcion: 'Pan italiano de miga alveolada.',
    precio: '$35.00',
    imagen: 'ruta/a/imagen-ciabatta.jpg',
    categoria: 'Panes Salados'
  }
  // Agrega más productos según sea necesario
];

function CardPanaderia() {
  const { searchTerm } = useContext(SearchContext);

  // Función para filtrar los productos según el término de búsqueda y categoría
  const filterByCategory = (category) => {
    return productos.filter(producto =>
      producto.categoria === category &&
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const dulces = filterByCategory('Panes Dulces');
  const salados = filterByCategory('Panes Salados');

  return (
    <div className="catalogo">
      {/* Mostrar sección de Panes Dulces si hay productos */}
      {dulces.length > 0 && (
        <div className="categoria">
          <h1>Panes Dulces</h1>
          <div className="seccion">
            {dulces.map(producto => (
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

      {/* Mostrar sección de Panes Salados si hay productos */}
      {salados.length > 0 && (
        <div className="categoria">
          <h1>Panes Salados</h1>
          <div className="seccion">
            {salados.map(producto => (
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
      {dulces.length === 0 && salados.length === 0 && (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default CardPanaderia;









