import React, { useContext } from 'react';
import './cardpanaderia.css';
import { SearchContext } from '../context/SearchContext'; // Asegúrate de importar desde la ruta correcta

const productos = [
  {
    id: 1,
    nombre: 'Chocolatin Tigre',
    descripcion: 'Masa de Croissnat rellena de Mazapan de Cacao.',
    precio: '$45.00',
    imagen: '/src/components/cardpanaderia/chocolatintigre.jfif'
  },
  {
    id: 2,
    nombre: 'Oreja',
    descripcion: 'Palmera de Masa de Feite.',
    precio: '$25.00',
    imagen: '/src/components/cardpanaderia/oreja.jfif'
  },
  {
    id: 3,
    nombre: 'Cheesecake',
    descripcion: 'Clásico cheesecake con base de galleta.',
    precio: '$22.00',
    imagen: 'ruta/a/imagen-cheesecake.jpg'
  }
  // Agrega más productos según sea necesario
];

function CardPanaderia() {
  const { searchTerm } = useContext(SearchContext);

  // Función para filtrar los productos según el término de búsqueda
  const filteredProductos = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalogo">
      {filteredProductos.map(producto => (
        <div className="producto" key={producto.id}>
          <img src={producto.imagen} alt={producto.nombre} />
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p className="precio">{producto.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default CardPanaderia;







