import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPage from './routes/Routes';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const [searchProduct, setSearchProduct] = useState('');
  const [showProduct, setShowProduct] = useState([]);
  const [cartListItems, setCartListItems] = useState([]);

  // product pricing
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [voucher, setVoucher] = useState(0);
  const [checkoutPrice, setCheckoutPrice] = useState(0);

  const fetchAllProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProducts(data);
    console.log(data);
    setShowProduct(data);
    setLoading(true);
  };

  const handleSubTotalPrice = () => {};

  const handleAddToCart = (id) => {
    window.alert('Add to Cart!!');
    const cartindex = cartListItems.findIndex((e) => e.id === id);
    if (cartindex !== -1) {
      const cartObject = cartListItems[cartindex];
      setCartListItems(
        [
          ...cartListItems,
          {
            ...cartObject,
            quantity: (cartObject.quantity += 1),
            totalPrice: cartObject.price * cartObject.quantity,
          },
        ].filter((value, index, Array) => {
          return index !== cartindex;
        })
      );
    }
    if (cartindex === -1) {
      const index = products.findIndex((e) => e.id === id);
      const object = products[index];
      setCartListItems([
        ...cartListItems,
        { ...object, quantity: 1, totalPrice: object.price },
      ]);
    }
    console.log(cartListItems);
    console.log(subTotalPrice);
  };

  const handleRemoveToCart = (id) => {
    setCartListItems(cartListItems.filter((item) => item.id !== id));
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
          cartListItems={cartListItems}
          handleRemoveToCart={handleRemoveToCart}
          subTotalPrice={subTotalPrice}
          handleSubTotalPrice={handleSubTotalPrice}
          checkoutPrice={checkoutPrice}
          voucher={voucher}
        />
      </Router>
    </div>
  );
};

export default App;
