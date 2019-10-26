import React from "react"
import PageLayout from "../components/pageLayout"
import("../styles/index.scss")

const Contact = () => (
  <PageLayout>
    <div className="page-container">
      <span className="title">Contact</span>
      <div className="content">
        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
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
