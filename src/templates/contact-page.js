import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Contact = ({ data }) => {
  const { markdownRemark, site } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout className="contact-page">
      <Seo
        title={frontmatter.title}
        description={`${frontmatter.title} ${site.siteMetadata.title}`}
      />
      <div className=" w-10/12 mx-auto mt-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">
              {frontmatter.title}
            </h4>
            <p className="leading-relaxed mt-1 mb-4 text-gray-600">
              <div
                className="description"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </p>
            <form
              action="/thanks"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="full-name"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Full Name"
                  style={{ transition: 'all .15s ease' }}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Email"
                  style={{ transition: 'all .15s ease' }}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  cols="80"
                  name="message"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Type a message..."
                />
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Contact;
