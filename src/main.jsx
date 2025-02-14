import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import App from './App.jsx'
import './index.css'
import BlogsPage from './pages/BlogsPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   
    <App/>
  
  </BrowserRouter>
  </StrictMode>,
)
