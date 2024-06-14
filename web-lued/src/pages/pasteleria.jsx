import React from 'react';
import { useLocation } from 'react-router-dom';
import CardPasteleria from '../components/cardpasteleria/cardpasteleria';

const Pasteleria = () => {
  const location = useLocation();
  const { state } = location;
  const productosFiltrados = state ? state.productos : [];

  return (
    <div>
      <h1>Catálogo de Pastelería</h1>
      <CardPasteleria productos={productosFiltrados} />
    </div>
  );
};

export default Pasteleria;




