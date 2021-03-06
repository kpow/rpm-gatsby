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

const Layout = ({ children, className, props }) => {
  const { site, siteSearchIndex } = useStaticQuery(query);
  const { siteTitle } = site.siteMetadata;
  console.log(props);

  return (
    <div className="px-0 mx-auto mb-6 flex flex-col justify-center">
      <Header>
        <Logo title={siteTitle} />
        <Navigation />
        <div>
          <Search searchIndex={siteSearchIndex.index} />
        </div>
      </Header>
      <main className={`container mx-auto ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
