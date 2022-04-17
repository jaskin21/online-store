import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPage from './routes/Routes';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const [searchProduct, setSearchProduct] = useState('');
  const [showProduct, setShowProduct] = useState([]);
  const [cartListItems, setCartListItems] = useState([]);

  const fetchAllProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProducts(data);
    console.log(data);
    setShowProduct(data);
    setLoading(true);
  };

  const handleAddToCart = (id) => {
    if (window.confirm('Add to Cart!!')) {
      console.log(`add to cart: ${id}`);
      const index = products.findIndex((e) => e.id === id);
      const object = products[index];
      setCartListItems([...cartListItems, { ...object }]);
      console.log(cartListItems);
    }
  };

  return (
    <div>
      <Router>
        <RoutesPage
          fetchAllProducts={fetchAllProducts}
          products={products}
          loading={loading}
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
          showProduct={showProduct}
          setShowProduct={setShowProduct}
          handleAddToCart={handleAddToCart}
          setLoading={setLoading}
        />
      </Router>
    </div>
  );
};

export default App;
