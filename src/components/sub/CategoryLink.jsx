import React from 'react';

const CategoryLink = ({ CategoryName }) => {
  return (
    <button className='text-sm text-gray-700 hover:bg-blue-600 text-gray color-white font-bold py-3 px-5 rounded  m-2 order-solid border-2 border-gray-500'>
      {CategoryName}
    </button>
  );
};

export default CategoryLink;
