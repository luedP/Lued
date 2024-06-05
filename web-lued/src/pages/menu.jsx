// Menu.jsx
import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <button onClick={toggleMenu}>Abrir menú</button>
      {isOpen && (
        <ul className="menu-list">
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
