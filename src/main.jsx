import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import ProductList from './pages/ProductList';
import ProductCategory from './pages/ProductCategory';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/shop' element={<ProductList />} />
      <Route path='/shop/:product' element={<ProductPage />} />
      <Route path='/category' element={<ProductCategory />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
