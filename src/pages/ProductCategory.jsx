import React from 'react';
import CategoryBanner from '../components/CategoryBanner';
import Navbar from '../components/Navbar';
import PageContainer from '../components/shared/PageContainer';
import PageSubContainer from '../components/shared/PageSubContainer';
import ProductListContainer from '../components/shared/ProductListContainer';
import Footer from '../components/Footer';

const ProductCategory = () => {
  return (
    <PageContainer>
      <Navbar />
      <PageSubContainer>
        <CategoryBanner />
        <ProductListContainer></ProductListContainer>
      </PageSubContainer>
      <Footer />
    </PageContainer>
  );
};

export default ProductCategory;
