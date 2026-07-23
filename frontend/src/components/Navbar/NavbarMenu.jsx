import React from 'react';
import './Navbar.css';

const ChevronDown = () => (
  <svg className="navbar-menu-icon" viewBox="0 0 24 24">
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
);

export default function NavbarMenu() {
  const menuItems = [
    { label: 'Download', hasDropdown: false },
    { label: 'Nitro', hasDropdown: false },
    { label: 'Discover', hasDropdown: true },
    { label: 'Safety', hasDropdown: true },
    { label: 'Quests', hasDropdown: true },
    { label: 'Support', hasDropdown: true },
    { label: 'Blog', hasDropdown: true },
    { label: 'Developers', hasDropdown: true },
    { label: 'Careers', hasDropdown: false },
  ];

  return (
    <div className="navbar-menu">
      {menuItems.map((item, index) => (
        <div key={index} className="navbar-menu-item">
          {item.label}
          {item.hasDropdown && <ChevronDown />}
        </div>
      ))}
    </div>
  );
}
