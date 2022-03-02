import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Login} from './pages/Login.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//get token from local storage
var token = localStorage.getItem('token');

//render login page if token is not available always if token available render app
ReactDOM.render(
  <React.StrictMode>
    {
      <BrowserRouter>
{  token ? <Routes>
      <Route path="/" element={<App />}/>
      <Route path="*" element={<Navigate replace to='/'/>}/>

    </Routes> 
    :  <Routes>
      <Route path="*" element={<Login />}/>
    </Routes>
      
      }

  </BrowserRouter>
    }
  </React.StrictMode>,
  document.getElementById('root')
)
