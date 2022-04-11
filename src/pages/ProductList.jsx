import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductItem from '../components/ProductItem';
import Navbar from '../components/Navbar';
import { data } from 'autoprefixer';
import Footer from '../components/Footer';
import PageSubContainer from '../components/shared/PageSubContainer';
import PageContainer from '../components/shared/PageContainer';
import ProductListContainer from '../components/shared/ProductListContainer';
import AllProductsBanner from '../components/AllProductsBanner';
import Pagination from '../components/Pagination';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProducts(data);
    console.log(data);
  };

  return (
    <PageContainer>
      <Navbar />
      <PageSubContainer>
        <AllProductsBanner TotalProduct={products.length} />
        <ProductListContainer>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              productId={product.id}
              imageUrl={product.image}
              price={product.price}
              title={product.title}
              category={product.category}
            />
          ))}
        </ProductListContainer>
      </PageSubContainer>
      <Pagination />
      <Footer />
    </PageContainer>
  );
};

export default ProductList;
