import React from 'react';
import CartItems from '../components/CartItems';
import Navbar from '../components/Navbar';
import PageContainer from '../components/shared/PageContainer';
import PageSubContainer from '../components/shared/PageSubContainer';

const MyShoppingCart = ({}) => {
  return (
    <PageContainer>
      <Navbar />
      <PageSubContainer>
        <CartItems />
      </PageSubContainer>
    </PageContainer>
  );
};

export default MyShoppingCart;
