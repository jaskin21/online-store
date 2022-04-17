import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from '../components/ProductItem';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageSubContainer from '../components/shared/PageSubContainer';
import PageContainer from '../components/shared/PageContainer';
import ProductListContainer from '../components/shared/ProductListContainer';
import AllProductsBanner from '../components/AllProductsBanner';
import Pagination from '../components/Pagination';
import LoadingScreen from '../components/LoadingScreen';
import Searchbar from '../components/sub/Searchbar';
import CategoryLink from '../components/sub/CategoryLink';
import Cart from '../components/Cart';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [showProduct, setShowProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');
  const [cartDisplay, setCartDisplay] = useState(false);

  const fetchAllProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProducts(data);
    console.log(data);
    setLoading(true);
    setShowProduct(data);
  };

  const filterProducts = () => {
    const newProduct = products.filter((product) => {
      if (category === 'all') {
        return product;
      }
      return product.category === category;
    });
    setShowProduct(newProduct);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [category]);

  const handleCart = () => {
    console.log('cart');
    if (cartDisplay === true) {
      return setCartDisplay(false);
    }
    return setCartDisplay(true);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  return (
    <PageContainer>
      <Navbar handleCart={handleCart}>
        <Searchbar setSearchProduct={setSearchProduct} />
        <Cart open={cartDisplay} cartDisplay={handleCart} />
      </Navbar>

      <PageSubContainer>
        <AllProductsBanner TotalProduct={showProduct.length} />
        <div className='container '>
          <CategoryLink handleCategory={handleCategory} CategoryName={'all'} />
          <CategoryLink
            handleCategory={handleCategory}
            CategoryName={'electronics'}
          />
          <CategoryLink
            handleCategory={handleCategory}
            CategoryName={'jewelery'}
          />
          <CategoryLink
            handleCategory={handleCategory}
            CategoryName={`men's clothing`}
          />
          <CategoryLink
            handleCategory={handleCategory}
            CategoryName={`women's clothing`}
          />
        </div>
        {loading ? (
          <ProductListContainer>
            {showProduct
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

export default ProductList;
