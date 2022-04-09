import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby';

const MobileNav = () => {

  return (
    <Menu  width={ '100%' }>
      <Link to="/" id="home" className="menu-item">Home</Link>
      <Link to="/" id="about" className="menu-item">About</Link>
      <Link to="/contact" id="contact" className="menu-item">Contact</Link>
    </Menu>
  )
};

export default MobileNav;