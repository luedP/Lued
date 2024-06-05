import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = ({ productos, setFilteredProductos }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (productos && productos.length > 0) {
      const filteredProductos = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm)
      );
      setFilteredProductos(filteredProductos);
    }
  };

  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
