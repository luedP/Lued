import React, { useContext } from 'react';
import './cardpanaderia.css';
import { SearchContext } from '../context/SearchContext'; // Asegúrate de importar desde la ruta correcta

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
    imagen: '/src/components/cardpanaderia/oreja.jfif',
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
      {dulces.length > 0 && (
        <>
          <h1>Panes Dulces</h1>
          <div className="seccion">
            {dulces.map(producto => (
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

      {salados.length > 0 && (
        <>
          <h1>Panes Salados</h1>
          <div className="seccion">
            {salados.map(producto => (
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

      {dulces.length === 0 && salados.length === 0 && (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}

export default CardPanaderia;









