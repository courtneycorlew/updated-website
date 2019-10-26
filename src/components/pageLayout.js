/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Link } from "gatsby"

import "./page-layout.scss"
import("./header.scss")

const PageLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryTwo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="main">{children}</div>
      <footer>
        <div className="header-links">
        <Link
            exact
            to="/"
            activeClassName="active"
          >
            Home
          </Link>
          <Link
            exact
            to="/writing"
            activeClassName="active"
            partiallyActive={true}
          >
            Writing
          </Link>
          <Link exact to="/contact" activeClassName="active">
            Contact
          </Link>
        </div>
      </footer>
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
