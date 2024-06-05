import React from 'react';
import './cardpanaderia.css'


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
  return (
    <div className="catalogo">
      {productos.map(producto => (
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






