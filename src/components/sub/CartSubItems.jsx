import React from 'react';
import { Link } from 'react-router-dom';

const CartSubItems = ({
  productId,
  imageUrl,
  price,
  title,
  category,
  handleRemoveToCart,
}) => {
  return (
    <tr>
      <td className='hidden pb-4 md:table-cell'>
        <Link to={`/shop/${productId}`}>
          <img src={imageUrl} className='w-20 rounded' alt='Thumbnail' />
        </Link>
      </td>
      <td>
        <Link to={`/shop/${productId}`}>
          <p className='mb-2 md:ml-4'>{title}</p>
        </Link>
        <button
          onClick={handleRemoveToCart}
          type='submit'
          className='text-gray-700 md:ml-4'
        >
          <small>(Remove item)</small>
        </button>
      </td>
      <td className='justify-center md:justify-end md:flex mt-6'>
        <div className='w-20 h-10'>
          <div className='relative flex flex-row w-full h-8'>
            <input
              type='number'
              className='w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black'
            />
          </div>
        </div>
      </td>
      <td className='hidden text-right md:table-cell'>
        <span className='text-sm lg:text-base font-medium'>{price}</span>
      </td>
      <td className='text-right'>
        <span className='text-sm lg:text-base font-medium'>20.00€</span>
      </td>
    </tr>
  );
};

export default CartSubItems;
