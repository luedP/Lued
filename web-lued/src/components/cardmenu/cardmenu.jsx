import React, { useContext } from 'react';
import './cardmenu.css';
import { SearchContext } from '../context/SearchContext'; // Asegúrate de importar desde el archivo correcto
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const productos = [
  {
    id: 1,
    nombre: 'Café Latte',
    descripcion: 'Café con leche espumosa.',
    precio: '$3.00',
    imagen: 'ruta/a/imagen-latte.jpg',
    categoria: 'Bebidas'
  },
  {
    id: 2,
    nombre: 'Té Verde',
    descripcion: 'Té verde orgánico.',
    precio: '$2.50',
    imagen: 'ruta/a/imagen-te-verde.jpg',
    categoria: 'Bebidas'
  },
  {
    id: 3,
    nombre: 'Panini de Pollo',
    descripcion: 'Panini relleno de pollo a la parrilla y vegetales.',
    precio: '$6.00',
    imagen: 'ruta/a/imagen-panini-pollo.jpg',
    categoria: 'Paninis'
  },
  {
    id: 4,
    nombre: 'Panini de Jamón y Queso',
    descripcion: 'Panini clásico con jamón y queso fundido.',
    precio: '$5.50',
    imagen: 'ruta/a/imagen-panini-jamon-queso.jpg',
    categoria: 'Paninis'
  },
  // Agrega más productos según sea necesario
];

const CardMenu = () => {
  const { searchTerm } = useContext(SearchContext);

  // Función para filtrar los productos según el término de búsqueda y categoría
  const filterByCategory = (category) => {
    return productos.filter(producto =>
      producto.categoria === category &&
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const bebidas = filterByCategory('Bebidas');
  const paninis = filterByCategory('Paninis');

  return (
    <div className="catalogo">
      {/* Mostrar sección de Bebidas si hay productos */}
      {bebidas.length > 0 && (
        <div className="categoria">
          <h1>Bebidas</h1>
          <div className="seccion">
            {bebidas.map(producto => (
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

      {/* Mostrar sección de Paninis si hay productos */}
      {paninis.length > 0 && (
        <div className="categoria">
          <h1>Paninis</h1>
          <div className="seccion">
            {paninis.map(producto => (
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
      {bebidas.length === 0 && paninis.length === 0 && (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default CardMenu;