import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import("./header.scss")
const Header = ({ siteTitle }) => (
  <header className="background">
    <span className="header-title">
      <Link exact to="/" activeClassName="active">{siteTitle}</Link>
    </span>
    <div className="header-links">
      <Link exact to="/writing" activeClassName="active">Writing</Link>
      <Link exact to="/contact" activeClassName="active">Contact</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
