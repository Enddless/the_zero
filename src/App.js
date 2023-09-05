import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import Homepage from './components/homepage/homepage';
import MenuPage from './components/menu_page/menupage';
import BlogPage from './components/blogpage/blogpage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/menu'} element={<MenuPage />} />
        <Route path={'/blog'} element={<BlogPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
