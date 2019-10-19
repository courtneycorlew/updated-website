import React from "react"
import { Link } from "gatsby"
import { BlogPreview } from "../components/blogpreview"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import("../styles/index.scss")

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="intro-header">
      {/* <div className="intro-image">
        <Image />
      </div>
      <div className="my-info">
        <span className="name">Hi, I'm Courtney!</span>
        <span className="titles">
          software engineer, entrepreneur, foster mom
        </span>
      </div> */}
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
