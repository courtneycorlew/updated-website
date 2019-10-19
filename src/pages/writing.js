import React from "react"
import { AllBlogPosts } from "../components/AllBlogPosts"
import PageLayout from "../components/pageLayout"
import("../styles/index.scss")

const Blog = () => (
  <PageLayout>
    <div className="page-container">
      <span className="title">Writing</span>
      <div className="content">
        <AllBlogPosts />
      </div>
    </div>
  </PageLayout>
)

export default Blog
