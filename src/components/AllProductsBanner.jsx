import React from 'react';

const AllProductsBanner = ({ TotalProduct, CategoryIndicator }) => {
  return (
    <div className='p-3'>
      <h3 className=' text-slate-800 text-2xl font-medium'>{} Products</h3>
      <span className='mt-3 text-sm text-slate-800'>
        {TotalProduct} Products
      </span>
    </div>
  );
};

export default AllProductsBanner;
