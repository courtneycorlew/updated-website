import React from "react"
import PageLayout from "../components/pageLayout"
import("../styles/index.scss")

const NotFoundPage = () => (
  <PageLayout>
    <div className="page-container">
      <div className="blog-post-info">
        <span className="title">Page Not Found</span>
        <span className="date">
          You just hit a route that doesn&#39;t exist... the sadness.
        </span>
      </div>
    </div>
  </PageLayout>
)

export default NotFoundPage
