import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/css/index.css';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import ProductList from './pages/ProductList';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/shop' element={<ProductList />} />
      <Route path='/shop/:id' element={<ProductPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
