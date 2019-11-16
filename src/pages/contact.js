import React from "react"
import PageLayout from "../components/pageLayout"
import Twitter from "../images/twitter.inline.svg"
import Github from "../images/github.inline.svg"
import Instagram from "../images/instagram.inline.svg"

import("../styles/index.scss")

const Contact = () => (
  <PageLayout>
    
    <div className="page-container">
      <span className="title">Contact</span>
      <div className="content">
        <h1>Hey! 👋 I can't wait to hear from you!</h1>
        <span className="info">Feel free to use the form below to contact me or drop me a message at courtneycorlew@gmail.com.</span>
        <div className="social-media-icons">
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
        <form name="contact" action="/success/" method="post" data-netlify="true"
          data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6"></textarea>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </PageLayout>
)

export default Contact
