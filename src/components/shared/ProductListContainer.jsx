import React from 'react';

const ProductListContainer = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 '>
        {children}
      </div>
    </div>
  );
};

export default ProductListContainer;
