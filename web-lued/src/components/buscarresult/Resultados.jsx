// Resultados.jsx
import React, { useState } from 'react';
import CardPanaderia from '../cardpanaderia/cardpanaderia';
import SearchBar from '../searchbar/searchbar';

const Resultados = () => {
  const [filteredProductos, setFilteredProductos] = useState([]);

  return (
    <div>
      <h1>Resultados de la búsqueda</h1>
      <SearchBar productos={productos} setFilteredProductos={setFilteredProductos} />
      <CardPanaderia productos={filteredProductos.length > 0 ? filteredProductos : productos} />
    </div>
  );
};

export default Resultados;
