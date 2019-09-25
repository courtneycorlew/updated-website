import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import("./header.scss")
const Header = ({ siteTitle }) => (
  <header
    className="background"
  >
      <Link to="/now">Now</Link>
      <Link to="/blog">Blog</Link>

        <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
        </h1>
      <Link to="/shop">Shop</Link>
      <Link to="/contact">Contact</Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
