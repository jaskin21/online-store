import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import ProductPage from '../pages/ProductPage';
import NotFound from '../pages/NotFound';
import MyShoppingCart from '../pages/MyShoppingCart';
import HomePage from '../pages/HomePage';

const RoutesPage = ({
  fetchAllProducts,
  products,
  loading,
  searchProduct,
  setSearchProduct,
  showProduct,
  setShowProduct,
  handleAddToCart,
  setLoading,
  cartListItems,
  handleRemoveToCart,
  subTotalPrice,
  handleSubTotalPrice,
  checkoutPrice,
  voucher,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path='/shop'
          element={
            <ProductList
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
              subTotalPrice={subTotalPrice}
              handleRemoveToCart={handleRemoveToCart}
            />
          }
        />
        <Route exact path='/' element={<HomePage />} />
        <Route
          path='/shop/:id'
          element={
            <ProductPage
              handleAddToCart={handleAddToCart}
              cartListItems={cartListItems}
              handleRemoveToCart={handleRemoveToCart}
            />
          }
        />
        <Route
          path='/cart'
          element={
            <MyShoppingCart
              cartListItems={cartListItems}
              handleAddToCart={handleAddToCart}
              handleRemoveToCart={handleRemoveToCart}
              subTotalPrice={subTotalPrice}
              handleSubTotalPrice={handleSubTotalPrice}
              checkoutPrice={checkoutPrice}
              voucher={voucher}
            />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RoutesPage;
