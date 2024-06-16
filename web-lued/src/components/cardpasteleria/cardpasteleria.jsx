import React, { useContext } from 'react';
import './cardpasteleria.css';
import { SearchContext } from '../context/SearchContext'; // Asegúrate de importar desde el archivo correcto

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

export default CardPasteleria;
