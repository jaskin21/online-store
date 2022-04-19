import React, { useEffect } from 'react';
import CartItems from '../components/CartItems';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageContainer from '../components/shared/PageContainer';
import PageSubContainer from '../components/shared/PageSubContainer';

const MyShoppingCart = ({
  cartListItems,
  handleRemoveToCart,
  handleSubTotalPrice,
  subTotalPrice,
  checkoutPrice,
  voucher,
}) => {
  return (
    <PageContainer>
      <Navbar />
      <PageSubContainer>
        <CartItems
          cartListItems={cartListItems}
          handleRemoveToCart={handleRemoveToCart}
          subTotalPrice={subTotalPrice}
          checkoutPrice={checkoutPrice}
          voucher={voucher}
        />
      </PageSubContainer>
      <Footer />
    </PageContainer>
  );
};

export default MyShoppingCart;
