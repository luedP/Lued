import React from 'react';
import { useLocation } from 'react-router-dom';
import CardPanaderia from '../components/cardpanaderia/cardpanaderia';

const Panaderia = () => {
  const location = useLocation();
  const { state } = location;
  const productosFiltrados = state ? state.productos : [];

  return (
    <div className='container'>
    
      <CardPanaderia productos={productosFiltrados} />
    </div>
  );
};

export default Panaderia;




