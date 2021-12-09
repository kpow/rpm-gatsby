import React from 'react';

const Header = ({ children }) => (
  <header
    className="bg-gray-900 px-0 mx-auto pt-0 mb-1 flex flex-col justify-center text-white"
    style={{width: '100%'}}
  >
    
    <div className="container mx-auto flex flex-wrap items-center justify-around">
      {children}
    </div>
  </header>
);

export default Header;
