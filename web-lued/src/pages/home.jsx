// HomePage.jsx

import React from 'react';
import CardHome from '../components/cardhome/cardhome'; // Ruta relativa al archivo CardHome.jsx

const HomePage = () => {
  return (
    <div className="container">
      <h1 class="text-center">Bienvenidos a LUED</h1>
      <p  class="text-center">¡Creamos pequeñas delicias, para grandes momentos!</p>

      {/* Incluir el componente CardHome */}
      <CardHome />
    </div>
  );
}

export default HomePage;





