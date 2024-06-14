

import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Menu from '../pages/menu';
import Pasteleria from '../pages/pasteleria'
import Panaderia from '../pages/panaderia';


const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/Pasteleria" element={<Pasteleria />} />
      <Route path="/Panaderia" element={<Panaderia />} />
    </Routes>
  );
};

export default RoutesIndex;

