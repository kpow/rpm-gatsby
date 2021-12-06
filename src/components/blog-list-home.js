import React from "react"
import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import PostCard from "./post-card"

export default function BlogListHome(props) {
  const data = props.data
  const posts = data.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
  return <PostMaker data={posts} />
}

const PostMaker = ({ data }) => (
  <section className="home-posts">
    <h2 className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
      stuff we do
    </h2>
    <div className="flex">{data}</div>
    <Link
      className="button"
      to="/blog"
    >
      See more
      <span>
        <RiArrowRightSLine />
      </span>
    </Link>
  </section>
)
