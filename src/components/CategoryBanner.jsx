import React from 'react';
import CategoryLink from './sub/CategoryLink';

const CategoryBanner = () => {
  return (
    <ul className='flex'>
      {/* <li className='mr-3'>
      <a
        className='inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white'
        href='#'
      >
        Active Pill
      </a>
    </li> */}
      <CategoryLink CategoryName={'Renzj'} />
      <CategoryLink CategoryName={'Jaksin'} />
    </ul>
  );
};

export default CategoryBanner;
