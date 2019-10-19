import React from "react"
import PageLayout from "../components/pageLayout"
import("../styles/index.scss")

const Contact = () => (
  <PageLayout>
    <div className="page-container">
      <span className="title">Contact</span>
      <div className="content">
        <form name="contact" method="POST" data-netlify="true">
          <label>Your Name</label>
          <input type="text" name="name" />
          <label>Your Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message"></textarea>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </PageLayout>
)

export default Contact
