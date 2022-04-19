import React, { useState, useEffect } from 'react';
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

const ProductList = ({
  fetchAllProducts,
  products,
  loading,
  searchProduct,
  setSearchProduct,
  showProduct,
  setShowProduct,
  setLoading,
  handleAddToCart,
  cartListItems,
  subTotalPrice,
  handleRemoveToCart,
  handleSubTotalPrice,
}) => {
  const [category, setCategory] = useState('All');
  const [cartDisplay, setCartDisplay] = useState(false);

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
    setLoading(false);
    fetchAllProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [category]);

  const handleCart = () => {
    console.log('cart');
    handleSubTotalPrice();
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
      <Navbar
        handleCart={handleCart}
        setLoading={setLoading}
        cartListItems={cartListItems}
      >
        <Searchbar setSearchProduct={setSearchProduct} />
        <Cart
          open={cartDisplay}
          cartDisplay={handleCart}
          cartListItems={cartListItems}
          handleRemoveToCart={handleRemoveToCart}
          subTotalPrice={subTotalPrice}
        />
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
                  handleAddToCart={handleAddToCart}
                  subTotalPrice={subTotalPrice}
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
