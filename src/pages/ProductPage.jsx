import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageContainer from '../components/shared/PageContainer';
import Navbar from '../components/Navbar';
import PageSubContainer from '../components/shared/PageSubContainer';
import Footer from '../components/Footer';
import ProductOverview from '../components/ProductOverview';
import LoadingScreen from '../components/LoadingScreen';
import Cart from '../components/Cart';

const ProductPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(false);
  const [cartDisplay, setCartDisplay] = useState(false);

  const fetchDataFromApi = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);

    const { title, price, description, image, category } = data;
    setTitle(title);
    setPrice(price);
    setDescription(description);
    setImage(image);
    setCategory(category);
    setLoading(true);
  };

  const handleCart = () => {
    console.log('cart');
    if (cartDisplay === true) {
      return setCartDisplay(false);
    }
    return setCartDisplay(true);
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <PageContainer>
      <Navbar handleCart={handleCart}>
        <Cart open={cartDisplay} cartDisplay={handleCart} />
      </Navbar>
      <PageSubContainer>
        {loading ? (
          <ProductOverview
            title={title}
            price={price}
            description={description}
            category={category}
            src={image}
          />
        ) : (
          <LoadingScreen />
        )}
      </PageSubContainer>
      <Footer />
    </PageContainer>
  );
};

export default ProductPage;
