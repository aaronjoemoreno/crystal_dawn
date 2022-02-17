import * as React from "react"
import PropTypes from "prop-types"
import MobileNav from "./mobileNav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <MobileNav />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
