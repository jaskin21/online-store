import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageSubContainer from '../components/shared/PageSubContainer';
import PageContainer from '../components/shared/PageContainer';
import ProductListContainer from '../components/shared/ProductListContainer';
import Pagination from '../components/Pagination';
import LoadingScreen from '../components/LoadingScreen';
import CategoryBanner from '../components/CategoryBanner';
import axios from 'axios';

const ProductCategory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    const { data } = await axios.get(
      'https://fakestoreapi.com/products/category/electronics'
    );
    setProducts(data);
    console.log(data);
    setLoading(true);
  };
  return (
    <PageContainer>
      <Navbar />
      <PageSubContainer>
        <CategoryBanner />
        {loading ? (
          <ProductListContainer>
            {products
              .filter((val) => {
                if (searchProduct == '') {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchProduct.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((product) => (
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
        ) : (
          <LoadingScreen />
        )}
      </PageSubContainer>
      <Pagination />
      <Footer />
    </PageContainer>
  );
};

export default ProductCategory;
