import React from 'react';
import { Link } from 'gatsby';

const Logo = ({ title }) => (
  <div className="site-logo p-4">
    <Link to="/">{title}</Link>
  </div>
);

export default Logo;
