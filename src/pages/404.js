import React from "react"
import PageLayout from "../components/pageLayout"
import("../styles/index.scss")

const NotFoundPage = () => (
  <PageLayout>
    <div className="page-container">
      <div className="blog-post-info">
        <span className="title">Page Not Found</span>
        <span className="date">
          Oh no! This route doesn't exist. If you think it should, let me know and I'll fix it!
        </span>
      </div>
    </div>
  </PageLayout>
)

export default NotFoundPage
