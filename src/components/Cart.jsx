import React from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './sub/CartProduct';

const Cart = ({ open, cartDisplay }) => {
  return (
    <div
      className={`fixed inset-0 overflow-hidden z-50 ${
        open
          ? 'transform transition ease-in-out duration-400 sm:duration-700 max-w-full'
          : 'transform transition ease-in-out  duration-1000 sm:duration-1000 translate-x-full '
      }`}
      aria-labelledby='slide-over-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className={`absolute inset-0 bg-gradient-to-l from-gray-400  transition-opacity`}
          aria-hidden='true'
        ></div>

        <div
          className={`pointer-events-none fixed inset-y-0 right-0 flex  pl-10 ${
            open
              ? 'transform transition ease-in-out duration-400 sm:duration-700 max-w-full'
              : 'transform transition ease-in-out  duration-400 sm:duration-700 translate-x-full '
          }`}
        >
          <div className='pointer-events-auto w-screen max-w-md'>
            <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
              <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                <div className='flex items-start justify-between'>
                  <h2
                    className='text-lg font-medium text-gray-900'
                    id='slide-over-title'
                  >
                    Shopping cart
                  </h2>
                  <div className='ml-3 flex h-7 items-center'>
                    <button
                      onClick={cartDisplay}
                      type='button'
                      className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>Close panel</span>
                      <svg
                        className='h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className='mt-8'>
                  <div className='flow-root'>
                    <ul role='list' className='-my-6 divide-y divide-gray-200'>
                      {/* <CartProduct />
                      <CartProduct />
                      <CartProduct />
                      <CartProduct /> */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                <div className='flex justify-between text-base font-medium text-gray-900'>
                  <p>Subtotal</p>
                  <p>$262.00</p>
                </div>
                <p className='mt-0.5 text-sm text-gray-500'>
                  Shipping and taxes calculated at checkout.
                </p>
                <div className='mt-6'>
                  <Link
                    to={'/cart'}
                    className='flex items-center justify-center rounded-md border border-transparent bg-lime-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-lime-700 m-2'
                  >
                    My Shopping Cart
                  </Link>
                  <Link
                    to={'/checkout'}
                    className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 m-2'
                  >
                    Checkout
                  </Link>
                </div>
                <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                  <p>
                    or
                    <button
                      onClick={cartDisplay}
                      type='button'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Continue Shopping<span aria-hidden='true'> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
