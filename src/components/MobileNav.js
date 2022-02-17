import React from 'react'
import { slide as Menu } from 'react-burger-menu'

const MobileNav = () => {
  const showSettings = (event) => {
    event.preventDefault();
  }

  return (
    <Menu  width={ '100%' }>
      <a id="home" className="menu-item">Home</a>
      <a id="about" className="menu-item">About</a>
      <a id="contact" className="menu-item">Contact</a>
      <a onClick={() => showSettings()} className="menu-item--small">Settings</a>
    </Menu>
  )
};

export default MobileNav;