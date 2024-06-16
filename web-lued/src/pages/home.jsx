// HomePage.jsx

import React from 'react';
import CardHome from '../components/cardhome/cardhome'; // Ruta relativa al archivo CardHome.jsx

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="text-center">Bienvenidos a LUED</h1>
      <p  className="text-center">¡Creamos pequeñas delicias, para grandes momentos!</p>

      {/* Incluir el componente CardHome */}
      <CardHome />
    </div>
  );
}

export default HomePage;





