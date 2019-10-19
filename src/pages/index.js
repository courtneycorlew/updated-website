import React from "react"
import { Link } from "gatsby"
import { BlogPreview } from "../components/blogpreview"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Facebook from "../images/facebook.inline.svg"
import Twitter from "../images/twitter.inline.svg"
import Github from "../images/github.inline.svg"
import Instagram from "../images/instagram.inline.svg"
import Youtube from "../images/youtube.inline.svg"

import("../styles/index.scss")

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="intro-header">
      <div className="intro-image">
        <Image />
      </div>
      <div className="my-info">
        <span className="name">Hi, I’m Courtney! 👋</span>
        <span className="my-info-about">
          Thanks for stopping by! I create content surrounding my passions:
          <em> Foster Care, Technology, and Entrepreneurship</em>. I’m also the
          founder of Finding Your Place In Tech. Whether you’re here to read a
          post, watch a video, or say hello -- I’m glad you’re here!
        </span>
        <div className="social-media-icons">
          {/* <Link to={post.frontmatter.path}>
            <Facebook />
          </Link> */}
          <a href="https://twitter.com/courtneyecorlew" target="_blank">
            <Twitter />
          </a>
          <a href="https://github.com/courtneycorlew" target="_blank">
            <Github />
          </a>
          <a href="https://instagram.com/courtneycorlew" target="_blank">
            <Instagram />
          </a>
        </div>
      </div>
    </div>
    <div className="blog">
      <span className="blog-title">latest posts</span>
      <div className="blog-list">
        <BlogPreview limit={3} />
      </div>
    </div>
  </Layout>
)

export default IndexPage
