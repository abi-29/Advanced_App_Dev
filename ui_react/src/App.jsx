import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import './assets/style.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/log' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;