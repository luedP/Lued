import React from 'react';
import { useLocation } from 'react-router-dom';
import CardMenu from '../components/cardmenu/cardmenu';

const Menu = () => {
  const location = useLocation();
  const { state } = location;
  const productosFiltrados = state ? state.productos : [];

  return (
    <div className="menu">
      <h1>Menú</h1>
      <CardMenu productos={productosFiltrados} />
    </div>
  );
};

export default Menu;



