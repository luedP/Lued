// HomePage.jsx

import React from 'react';
import CardHome from '../components/cardhome/cardhome'; // Ruta relativa al archivo CardHome.jsx
import '../components/cardhome/CardHome.scss'; // Importa los estilos de CardHome.scss

const HomePage = () => {
  return (
    <div >
     <div className='container text-center'>
      <h1 >Bienvenidos a LUED</h1>
      <p >¡Creamos pequeñas delicias, para grandes momentos!</p>
      </div> 
     

      {/* Incluir el componente CardHome */}
      <CardHome />
    </div>
  );
}

export default HomePage;






