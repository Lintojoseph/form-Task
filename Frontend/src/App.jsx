import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRoutes from './Routes/adminRouter/adminroutes';
function App() {
 

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path={'/admin/*'}element={<AdminRoutes /> } />
        </Routes>
        </BrowserRouter>
    
  )
}

export default App
