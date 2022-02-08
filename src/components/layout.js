import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MobileNav from "./mobileNav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <MobileNav />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
