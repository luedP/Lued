import React from 'react';
import './cardpasteleria.css'

const productos = [
  {
    id: 1,
    nombre: 'Pastel de Chocolate',
    descripcion: 'Delicioso pastel de chocolate con cobertura de ganache.',
    precio: '$20.00',
    imagen: 'ruta/a/imagen-chocolate.jpg'
  },
  {
    id: 2,
    nombre: 'Tarta de Fresa',
    descripcion: 'Tarta de fresa fresca con crema pastelera.',
    precio: '$25.00',
    imagen: 'ruta/a/imagen-fresa.jpg'
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

function CardPasteleria() {
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

export default CardPasteleria;