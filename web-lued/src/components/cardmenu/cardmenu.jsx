import React, { useContext } from 'react';
import './cardmenu.css';
import { SearchContext } from '../context/SearchContext'; // Asegúrate de importar desde el archivo correcto

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
      {bebidas.length > 0 && (
        <>
          <h1>Bebidas</h1>
          <div className="seccion">
            {bebidas.map(producto => (
              <div className="producto" key={producto.id}>
                <img src={producto.imagen} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p className="precio">{producto.precio}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {paninis.length > 0 && (
        <>
          <h1>Paninis</h1>
          <div className="seccion">
            {paninis.map(producto => (
              <div className="producto" key={producto.id}>
                <img src={producto.imagen} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p className="precio">{producto.precio}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {bebidas.length === 0 && paninis.length === 0 && (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}

export default CardMenu;

