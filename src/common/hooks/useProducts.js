import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCategory = (
  url,
  products,
  setProducts,
  loading,
  setLoading,
  searchProduct,
  setSearchProduct
) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    const { data } = await axios.get(url);
    setProducts(data);
    console.log(data);
    setLoading(true);
  };
};
