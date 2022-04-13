import React from 'react';
import Star from '../styles/svg/Star';

const ProductOverview = ({ title, price, description, category, src }) => {
  return (
    <div className='bg-white rounded-md'>
      <div className='pt-6 pb-8  '>
        <nav aria-label='Breadcrumb'>
          <ol
            role='list'
            className='max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8'
          >
            <li>
              <div className='flex items-center'>
                <a
                  href='/shop'
                  className='mr-2 text-sm font-medium text-gray-900'
                >
                  Shop
                </a>
                <svg
                  width='16'
                  height='20'
                  viewBox='0 0 16 20'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  className='w-4 h-5 text-gray-300'
                >
                  <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                </svg>
              </div>
            </li>

            <li>
              <div className='flex items-center'>
                <a href='#' className='mr-2 text-sm font-medium text-gray-900'>
                  {category}
                </a>
              </div>
            </li>
          </ol>
        </nav>

        <div className='m-8 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
          <div className='py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2  lg:pr-10'>
            <div>
              <div className='lg:col-span-2  lg:pr-8'>
                <h1 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                  {title}
                </h1>
              </div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-justify text-gray-900 mt-10'>
                  {description}
                </p>
              </div>
            </div>

            <div className='mt-10 '>
              <h2 className='sr-only '>Product information</h2>
              <p className='text-3xl text-gray-900'>${price}</p>

              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <div className='flex items-center mt-4'>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                {/* <a
                  href='#'
                  className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'
                >
                  117 reviews
                </a> */}
              </div>
            </div>
          </div>
          <div className='aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4'>
            <img
              src={src}
              alt='Model wearing plain white basic tee.'
              className='w-full h-full object-center shadow-md object-contain z-0 '
            />
          </div>
          <button
            type='submit'
            className='m-1 w-full bg-amber-400 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-black hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Add to bag
          </button>
          <button
            type='submit'
            className='m-1 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
