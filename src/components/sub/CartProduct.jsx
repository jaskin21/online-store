import React from 'react';
import { Link } from 'react-router-dom';

const CartProduct = ({
  quantity,
  productId,
  imageUrl,
  price,
  title,
  category,
  totalPrice,
  handleRemoveToCart,
}) => {
  return (
    <li className='flex py-6'>
      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
        <img
          src={imageUrl}
          alt='Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
          className='h-full w-full object-cover object-center object-scale-down'
        />
      </div>
      <div className='ml-4 flex flex-1 flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <h3>
              <Link to={`/shop/${productId}`}>{title} </Link>
            </h3>
            <p className='ml-4'>{totalPrice.toFixed(2)}</p>
          </div>
          <p className='mt-1 text-sm text-gray-500'>{category}</p>
        </div>
        <div className='flex flex-1 items-end justify-between text-sm'>
          <p className='text-gray-500'>Qty {quantity}</p>

          <div className='flex'>
            <button
              onClick={() => {
                handleRemoveToCart(productId);
              }}
              type='button'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
