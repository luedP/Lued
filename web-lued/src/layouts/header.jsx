import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import { SearchContext } from "../components/context/SearchContext";

import './header.css'


const Header = () => {
  
  const { setSearchTerm } = useContext(SearchContext);
  
  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is--active' : 'header__item-link'
  }  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <header>
      <nav className="header">
        <NavLink to="/" className="header__logo">
          LUED
        </NavLink>
        <div className='header__center'>
        <input 
          type="text" 
          placeholder="Buscar..." 
          onChange={handleSearch} 
          className='header__search-bar'
        />
      </div>
        
        <ul className="header__nav-list">
          <li className="header__list-item">
            <NavLink
                to="/"
                className={({ isActive })=>linkIsActive(isActive)}
            >
                Home
            </NavLink>
           </li>
          <li className="header__list-item">
            <NavLink
                to="/Menu"
                className={({ isActive })=>linkIsActive(isActive)}
            >
               Menu
            </NavLink>
            </li>
            <li className="header__list-item">
            <NavLink
                to="/Pasteleria"
                className={({ isActive })=>linkIsActive(isActive)}
            >
              Pasteleria
            </NavLink>
            </li>
            <li className="header__list-item">
            <NavLink
                to="/Panaderia"
                className={({ isActive })=>linkIsActive(isActive)}
            >
              Panaderia
            </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 
