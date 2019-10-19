import React, { Fragment } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import("./blogpreview.scss")

export const BlogPreview = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 3
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                path
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { edges: posts } = data.allMarkdownRemark
      return (
          <div className="blog-posts">
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div className="blog-post-preview" key={post.id}>
                    <Link to={post.frontmatter.path}>
                      <span>{post.frontmatter.title}</span>
                    </Link>
                    <p className="blog-date">{post.frontmatter.date}</p>
                  </div>
                )
              })}
          </div>
      )
    }}
  />
)
