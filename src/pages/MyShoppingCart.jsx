import React from 'react';
import CartItems from '../components/CartItems';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageContainer from '../components/shared/PageContainer';
import PageSubContainer from '../components/shared/PageSubContainer';

const MyShoppingCart = ({ cartListItems, handleRemoveToCart }) => {
  return (
    <PageContainer>
      <Navbar />
      <PageSubContainer>
        <CartItems
          cartListItems={cartListItems}
          handleRemoveToCart={handleRemoveToCart}
        />
      </PageSubContainer>
      <Footer />
    </PageContainer>
  );
};

export default MyShoppingCart;
