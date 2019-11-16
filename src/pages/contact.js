import React from "react"
import PageLayout from "../components/pageLayout"
import("../styles/index.scss")

const Contact = () => (
  <PageLayout>
    <div className="page-container">
      <span className="title">Contact</span>
      <div className="content">
        <form name="contact" action="/success/" method="post" data-netlify="true"
          data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </PageLayout>
)

export default Contact
