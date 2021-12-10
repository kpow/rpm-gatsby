import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from 'react-icons/ri';
import { FaWordpress, FaVk } from 'react-icons/fa';

import Layout from '../components/layout';
import BlogListHome from '../components/blog-list-home';
import Seo from '../components/seo';
import Icons from '../util/socialmedia.json';

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 585, height: 439)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
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

const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : '';
  const sIcons = Icons.socialIcons.map((icons) => (
    <div key={icons.icon}>
      {icons.icon === 'facebook' ? (
        <Link to={icons.url} target="_blank">
          <RiFacebookBoxFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'twitter' ? (
        <Link to={icons.url} target="_blank">
          <RiTwitterFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'linkedin' ? (
        <Link to={icons.url} target="_blank">
          <RiLinkedinBoxFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'youtube' ? (
        <Link to={icons.url} target="_blank">
          <RiYoutubeFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'instagram' ? (
        <Link to={icons.url} target="_blank">
          <RiInstagramFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'rss' ? (
        <Link to={icons.url} target="_blank">
          <RiRssFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'github' ? (
        <Link to={icons.url} target="_blank">
          <RiGithubFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'telegram' ? (
        <Link to={icons.url} target="_blank">
          <RiTelegramFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'pinterest' ? (
        <Link to={icons.url} target="_blank">
          <RiPinterestFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'snapchat' ? (
        <Link to={icons.url} target="_blank">
          <RiSnapchatFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'skype' ? (
        <Link to={icons.url} target="_blank">
          <RiSkypeFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'wordpress' ? (
        <Link to={icons.url} target="_blank">
          <FaWordpress />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'dribbble' ? (
        <Link to={icons.url} target="_blank">
          <RiDribbbleFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'medium' ? (
        <Link to={icons.url} target="_blank">
          <RiMediumFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'behance' ? (
        <Link to={icons.url} target="_blank">
          <RiBehanceFill />
        </Link>
      ) : (
        ''
      )}
      {icons.icon === 'vk' ? (
        <Link to={icons.url} target="_blank">
          <FaVk />
        </Link>
      ) : (
        ''
      )}
    </div>
  ));
  return (
    <Layout>
      <Seo />
      <section>
        <div className=" 2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-12 2xl:px-12 px-4 py-12 mx-auto">
          <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
            <div className=" lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left">
              {/* <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                    {frontmatter.tagline}
                  </span> */}
              <h1 className=" text-neutral-600 md:text-7xl lg:text-5xl mb-8 text-4xl font-bold leading-none tracking-tighter">
                {frontmatter.title}
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-400">
                <div
                  className="description"
                    // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </p>
              <div className="lg:mt-6 max-w-7xl sm:flex mt-0 font-sans">
                <div className="sm:mt-0 mt-3 flex items-center">
                  {sIcons}
                </div>
                <div className="sm:mt-0 sm:ml-3 mt-3">
                  <a
                    href="http://meetup.com/rvapugmeetup/"
                    className="focus:shadow-none items-center block px-10 py-3.5
                    text-base text-center tracking-normal border-2 border-black "
                  >
                    RPM on Meetup.com
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-5/6 lg:max-w-lg xl:mt-0 w-full mt-12">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className=" bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob absolute top-0 rounded-full" />
                  <div className=" bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 absolute rounded-full" />
                  <div className="relative">
                    {Image ? (
                      <GatsbyImage
                        image={Image}
                        alt={`${frontmatter.title} - Featured image`}
                        className="object-cover object-center mx-auto shadow-2xl"
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogListHome data={posts} />
    </Layout>
  );
};

export default HomePage;
