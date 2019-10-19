import React from "react"
import { AllBlogPosts } from '../components/AllBlogPosts'
import Layout from "../components/layout"
import("../styles/index.scss")

const Blog = () => (
  <Layout>
        <div className="blog">
      <span className="blog-title">all posts</span>
    <AllBlogPosts />
    </div>
  </Layout>
)

export default Blog
