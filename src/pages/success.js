import React from "react"
import PageLayout from "../components/pageLayout"
import("../styles/index.scss")
export default () => (
    <PageLayout>
        <div className="page-container">
            <span className="title">Contact</span>
            <div className="content">
                <span>Success! It's great to hear from you.</span>
                <h4>I'll respond to your email within 24-48 hours!</h4>
            </div>
        </div>
    </PageLayout>
)