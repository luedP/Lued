import React, { useContext } from 'react';
import './cardpasteleria.css';
import { SearchContext } from '../context/SearchContext'; // Asegúrate de importar desde el archivo correcto

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

  const pasteles = filterByCategory('Pasteles');
  const petit = filterByCategory('Petit');
  const rebanadas = filterByCategory('Rebanadas');

  return (
    <div className="catalogo">
      {pasteles.length > 0 && (
        <>
          <h1>Pasteles</h1>
          <div className="seccion">
            {pasteles.map(producto => (
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

      {petit.length > 0 && (
        <>
          <h1>Petit</h1>
          <div className="seccion">
            {petit.map(producto => (
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

      {rebanadas.length > 0 && (
        <>
          <h1>Rebanadas</h1>
          <div className="seccion">
            {rebanadas.map(producto => (
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

      {pasteles.length === 0 && petit.length === 0 && rebanadas.length === 0 && (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}

export default CardPasteleria;

