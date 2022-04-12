import { useState } from 'react';

export const useCategory = (initialValue) => {
  const [products, setProducts] = useState(initialValue);

  return [products, setProducts];
};
