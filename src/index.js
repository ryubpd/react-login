import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import About from './About.js';
import Menu from './Menu.js';
import HomeLog from './HomeLogin';
import AboutLog from './AboutLogin.js';
import MenuLog from './MenuLogin.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />  
      <Route path='/home' element={<App />} />   
      <Route path='/register' element={<Register />} />      
      <Route path='/about' element={<About/>} />    
      <Route path='/menu' element={<Menu/>} />      
      <Route path='/homelog' element={<HomeLog/>} />  
      <Route path='/aboutlog' element={<AboutLog/>} />  
      <Route path='/menulog' element={<MenuLog/>} />  
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
