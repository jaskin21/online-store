import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const { product } = useParams();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  const fetchDataFromApi = async () => {
    const { data } = await axios.get(
      'https://fakestoreapi.com/products/' + product
    );

    const { title, price, description, image } = data;
    setTitle(title);
    setPrice(price);
    setDescription(description);
    setImage(image);
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <h2>Price: {price}</h2>
      <p>{description}</p>
      <img src={image} alt='' srcSet='' />
    </div>
  );
};

export default ProductPage;
