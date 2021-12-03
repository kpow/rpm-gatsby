/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Logo from './logo';
import Navigation from './navigation';

import '../assets/scss/style.scss';
import Footer from './footer';
import Search from './search';

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
    siteSearchIndex {
      index
    }
  }
`;

const Layout = ({ children, className }) => {
  const { site, siteSearchIndex } = useStaticQuery(query);
  const { siteTitle } = site.siteMetadata;

  return (
    <div className="primary-container">
      <Header>
        <div className="flex-grow">
          <Logo title={siteTitle} />
        </div>
        <div className="flex-grow">
          <Navigation />
        </div>
        <div className="flex-grow flex justify-end">
          <Search searchIndex={siteSearchIndex.index} />
        </div>
      </Header>
      <main className={`container ${className}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
