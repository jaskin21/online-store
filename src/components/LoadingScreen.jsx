import React from 'react';

const LoadingScreen = () => {
  return (
    <div className='w-full h-screen z-50  bg-transparent opacity-75 flex flex-col items-center justify-center'>
      <div className='loader ease-linear rounded-full border-4 border-t-4 border-black h-12 w-12 mb-4'></div>
      <h2 className='text-center  text-xl font-semibold'>Loading...</h2>
      <p className='w-1/3 text-center'>
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  );
};

export default LoadingScreen;
