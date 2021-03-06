import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { RiArrowRightLine, RiArrowLeftLine } from 'react-icons/ri';

import Layout from '../components/layout';
import Seo from '../components/seo';

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

const styles = {
  'article blockquote': {
    'background-color': 'cardBg',
  },
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

const Pagination = ({ previous, next }) => (
  <div className="pagination -post" sx={styles.pagination}>
    <ul className="flex">
      {previous && previous.frontmatter.template === 'blog-post' && (
        <li className="flex">
          <Link className="flex items-center" to={previous.frontmatter.slug} rel="prev">
            <p className="flex">
              <span className="icon -left">
                <RiArrowLeftLine />
              </span>
              Previous
            </p>
          </Link>
        </li>
      )}
      {next && next.frontmatter.template === 'blog-post' && (
        <li className="flex">
          <Link className=" flex flex-row-reverse items-center" to={next.frontmatter.slug} rel="next">
            <p className="flex">
              Next
              <span className="icon -right">
                <RiArrowRightLine />
              </span>
            </p>
          </Link>
        </li>
      )}
    </ul>
  </div>
);

const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark;

  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : '';
  const { previous, next } = pageContext;

  const props = {
    previous,
    next,
  };

  return (
    <Layout className="page">
      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        image={Image}
        article
      />
      <article className="prose lg:prose-xl m-auto">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <time>{frontmatter.date}</time>
          </section>
          {Image ? (
            <GatsbyImage
              image={Image}
              alt={`${frontmatter.title} - Featured image`}
              className="featured-image"
            />
          ) : (
            ''
          )}
        </header>

        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {(previous || next) && <Pagination {...props} />}
      </article>
    </Layout>
  );
};

export default Post;
