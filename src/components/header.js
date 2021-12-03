import React from 'react';

const Header = ({ children }) => (
  <header
    className="bg-gray-900 px-0 container mx-auto pt-6 mb-6 flex flex-col justify-center text-white"
  >
    <div className="flex flex-wrap lg:px-4 justify-around">
      {children}
    </div>
  </header>
);

export default Header;
