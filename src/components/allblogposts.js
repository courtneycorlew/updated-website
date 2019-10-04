import React, { Fragment } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import("./blogpreview.scss")


export const AllBlogPosts = () =>
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
        <header>
          <div className="blog-posts">
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div className="blog-post-preview" key={post.id}>
                    <h3>
                      <Link to={post.frontmatter.path}>
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                    <p>{post.excerpt}</p>
                  </div>
                )
              })}
          </div>
        </header>
      )
    }}
  />
