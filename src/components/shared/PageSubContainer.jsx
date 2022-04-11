import React from 'react';

const PageSubContainer = ({ children }) => {
  return (
    <main className='my-8'>
      <div className='container mx-auto px-6'>{children}</div>
    </main>
  );
};

export default PageSubContainer;
