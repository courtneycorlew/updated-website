import React from "react"
import { graphql } from "gatsby"
import PageLayout from "./pageLayout"
import { Link } from "gatsby"
import("../styles/index.scss")

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <PageLayout>
      <div className="page-container">
        <div className="blog-post-info">
        <span className="title">{frontmatter.title}</span>
        <span className="date">{frontmatter.date}</span>
        </div>
        <div className="view-all">
        <Link exact to="/writing">View All Posts</Link>
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: html }}>
        </div>
      </div>
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
