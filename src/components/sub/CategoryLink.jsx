import React from 'react';

const CategoryLink = ({ CategoryName }) => {
  return (
    <li className='mr-3'>
      <a
        className='inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-1 px-3'
        href='#'
      >
        {CategoryName}
      </a>
    </li>
  );
};

export default CategoryLink;
