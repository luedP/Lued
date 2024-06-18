import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import { SearchContext } from "../components/context/SearchContext";
import './header.scss'
import logo from '../layouts/logo-blanco-sinfondo.png'
import { Button } from '@mui/material';

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
      <img src={logo} alt="Logo de LUED" />
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
          className={({ isActive }) => linkIsActive(isActive)}
        >
          {({ isActive }) => (
            <Button
              variant="contained"
              sx={{
                width: '100px',
                backgroundColor: 'white',
                color: isActive ? 'pink' : 'pink',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
                border: isActive ? '2px solid pink' : '2px solid transparent',
              }}
            >
              Home
            </Button>
          )}
        </NavLink>
      </li>
      <li className="header__list-item">
        <NavLink
          to="/Menu"
          className={({ isActive }) => linkIsActive(isActive)}
        >
          {({ isActive }) => (
            <Button
              variant="contained"
              sx={{
                width: '100px',
                backgroundColor: 'white',
                color: isActive ? 'pink' : 'pink',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
                border: isActive ? '2px solid pink' : '2px solid transparent',
              }}
            >
              Menu
            </Button>
          )}
        </NavLink>
      </li>
            <li className="header__list-item">
            <NavLink
                to="/Pasteleria"
                className={({ isActive })=>linkIsActive(isActive)}
            >
             {({ isActive }) => (
            <Button
              variant="contained"
              sx={{
                width: '100px',
                backgroundColor: 'white',
                color: isActive ? 'pink' : 'pink',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
                border: isActive ? '2px solid pink' : '2px solid transparent',
              }}
            >
              Pasteleria
            </Button>
          )}
        </NavLink>
            </li>
            <li className="header__list-item">
            <NavLink
                to="/Panaderia"
                className={({ isActive })=>linkIsActive(isActive)}
            >
              {({ isActive }) => (
            <Button
              variant="contained"
              sx={{
                width: '100px',
                backgroundColor: 'white',
                color: isActive ? 'pink' : 'pink',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
                border: isActive ? '2px solid pink' : '2px solid transparent',
              }}
            >
              Panaderia
            </Button>
          )}
        </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 
