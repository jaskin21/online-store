import React from 'react';
import { Link } from 'react-router-dom';
import { shopInfo } from '../data/shopInfo';

const Footer = () => {
  return (
    <footer className='bg-gray-200'>
      <div className='container mx-auto px-6 py-3 flex justify-between items-center'>
        <Link
          className='text-xl font-bold text-gray-500 hover:text-gray-400'
          to={'#'}
        >
          {shopInfo.shopName}
        </Link>
        <p className='py-2 text-gray-500 sm:py-0'>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
