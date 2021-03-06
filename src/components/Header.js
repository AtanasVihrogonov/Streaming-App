import React from 'react';
import { Link } from 'react-router-dom';
import GoogelAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        STREAMY
      </Link>
      <div className='right menu'>
      <Link to='/' className='item'>
        All Streams
      </Link>
      <GoogelAuth />
      </div>
    </div>
  );
};

export default Header;
