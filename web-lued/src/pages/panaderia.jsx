/* import React from 'react';
import CardPanaderia from '../components/cardpanaderia/cardpanaderia'



function Panaderia() {
  return (
    <div>
      <h1>Catálogo de Panaderia</h1>
      < CardPanaderia/>
    </div>
  );
}

export default Panaderia; */

import React from 'react';
import { useLocation } from 'react-router-dom';
import CardPanaderia from '../components/cardpanaderia/cardpanaderia';

const Panaderia = () => {
  const location = useLocation();
  const { state } = location;
  const productosFiltrados = state ? state.productos : [];

  return (
    <div>
      <h1>Catálogo de Panadería</h1>
      <CardPanaderia productos={productosFiltrados} />
    </div>
  );
};

export default Panaderia;




