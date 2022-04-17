import React from 'react';

const CartSubItems = () => {
  return (
    <tr>
      <td className='hidden pb-4 md:table-cell'>
        <a href='#'>
          <img
            src='https://limg.app/i/Successful-Spider-Biblical-Mutant---Total-War-lKoE7D.jpeg'
            className='w-20 rounded'
            alt='Thumbnail'
          />
        </a>
      </td>
      <td>
        <p className='mb-2 md:ml-4'>Bic 4 colour pen</p>
        <form action='' method='POST'>
          <button type='submit' className='text-gray-700 md:ml-4'>
            <small>(Remove item)</small>
          </button>
        </form>
      </td>
      <td className='justify-center md:justify-end md:flex md:mt-8'>
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
        <span className='text-sm lg:text-base font-medium'>1.50€</span>
      </td>
      <td className='text-right'>
        <span className='text-sm lg:text-base font-medium'>7.50€</span>
      </td>
    </tr>
  );
};

export default CartSubItems;
