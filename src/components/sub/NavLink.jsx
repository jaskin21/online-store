import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ href, linkName }) => {
  return (
    <Link
      className='mt-3 text-slate-800 hover:underline sm:mx-3 sm:mt-0'
      to={href}
    >
      {linkName}
    </Link>
  );
};

export default NavLink;
