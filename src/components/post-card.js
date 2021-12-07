import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const PostCard = ({ data }) => (

  <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-3">
    <span className="w-full block h-full">
      {data.frontmatter.featuredImage ? (
        <Link to={data.frontmatter.slug}>
          <GatsbyImage
            image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
            alt={`${data.frontmatter.title} - Featured image`}
            className="max-h-40 w-full object-cover"
          />
        </Link>
      ) : (
        ''
      )}

      <div className="bg-white dark:bg-gray-800 w-full p-4">
        <p className="text-indigo-500 text-md font-medium" />
        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
          <Link
            to={data.frontmatter.slug}
          >
            {data.frontmatter.title}
          </Link>
        </p>
        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
          {data.frontmatter.date}
        </p>
      </div>
    </span>
  </div>
);

export default PostCard;
