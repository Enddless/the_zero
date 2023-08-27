import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import Homepage from './components/homepage/homepage';
import MenuPage from './components/menu_page/menupage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/menu'} element={<MenuPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
