import React from 'react';

const AllProductsBanner = ({ TotalProduct }) => {
  return (
    <>
      <h3 className='text-slate-800 text-2xl font-medium'>All Products</h3>
      <span className='mt-3 text-sm text-slate-800'>
        {TotalProduct} Products
      </span>
    </>
  );
};

export default AllProductsBanner;
