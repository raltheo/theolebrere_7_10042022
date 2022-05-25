import './style/index.scss';
import Register from './pages/Register'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Forum from './pages/Forum';
import Acceuil from './pages/Acceuil';
import Profileid from './pages/Profileid';
import React, { useEffect } from 'react';
import {useNavigate} from "react-router"
import Admin from './pages/Admin'
import jwt from 'jwt-decode'

function App() {
  

  return (
    
      <Routes>
        <Route path="/" element={<Acceuil/>}/>
        <Route path="/forum" element={<Forum/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/:id" element={<Profileid/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    
  );
}

export default App;