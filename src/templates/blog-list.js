/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link, graphql } from 'gatsby';
import { RiArrowRightLine, RiArrowLeftLine } from 'react-icons/ri';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import Seo from '../components/seo';

const styles = {
  pagination: {
    a: {
      color: 'muted',
      '&.is-active': {
        color: 'text',
      },
      '&:hover': {
        color: 'text',
      },
    },
  },
};

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`;
const Pagination = ({ isFirst, isLast, prevPage, numPages, blogSlug, nextPage, currentPage }) => (
  <div className="pagination" sx={styles.pagination}>
    <ul>
      {!isFirst && (
        <li>
          <Link to={prevPage} rel="prev">
            <span className="icon -left">
              <RiArrowLeftLine />
            </span>
            {' '}
            Previous
          </Link>
        </li>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link
            to={`${blogSlug}${i === 0 ? '' : i + 1}`}
            className={currentPage === i + 1 ? 'is-active num' : 'num'}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!isLast && (
        <li>
          <Link to={nextPage} rel="next">
            Next
            {' '}
            <span className="icon -right">
              <RiArrowRightLine />
            </span>
          </Link>
        </li>
      )}
    </ul>
  </div>
);

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    const { currentPage, numPages } = this.props.pageContext;
    const blogSlug = '/blog/';
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString();
    const nextPage = blogSlug + (currentPage + 1).toString();

    const posts = data.allMarkdownRemark.edges
      .filter((edge) => !!edge.node.frontmatter.date)
      .map((edge) => <PostCard key={edge.node.id} data={edge.node} />);
    const props = {
      isFirst,
      prevPage,
      numPages,
      blogSlug,
      currentPage,
      isLast,
      nextPage,
    };

    return (
      <Layout className="blog-page">
        <Seo
          title={`Blog — Page ${currentPage} of ${numPages}`}
          description={
            `boom ${currentPage} of ${numPages}`
          }
        />
        <h1>Blog</h1>
        <div className="grids col-1 sm-2 lg-3">{posts}</div>
        <Pagination {...props} />
      </Layout>
    );
  }
}

export default BlogIndex;
