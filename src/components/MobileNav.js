import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby';

const MobileNav = () => {

  return (
    <Menu  width={ '100%' }>
      <Link to="/"><a id="home" className="menu-item">Home</a></Link>
      <a id="about" className="menu-item">About</a>
      <Link to="/contact"><a id="contact" className="menu-item">Contact</a></Link>
    </Menu>
  )
};

export default MobileNav;