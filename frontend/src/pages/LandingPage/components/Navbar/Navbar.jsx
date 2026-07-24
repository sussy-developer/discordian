import React from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';
import NavbarLogin from './NavbarLogin';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavbarLogo />
      <NavbarMenu />
      <NavbarLogin />
    </nav>
  );
}
