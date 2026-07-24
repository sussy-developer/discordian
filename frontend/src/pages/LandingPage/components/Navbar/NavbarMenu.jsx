import React, { useState } from 'react';
import './Navbar.css';
import paperRoll from '../../../../assets/paper_roll.webp';
import egg from '../../../../assets/egg.webp';
import prize from '../../../../assets/prize.webp';
import flyingCat from '../../../../assets/flying_cat.webp';
import disc from '../../../../assets/disc.webp';
import robo from '../../../../assets/robo.webp';

const ChevronDown = () => (
  <svg className="navbar-menu-icon" viewBox="0 0 24 24">
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
);

export default function NavbarMenu() {
  const [activeDropdown, setActiveDropdown] = useState(null);

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
    <>
      {activeDropdown && <div className="nav-blur-overlay"></div>}
      <div className="navbar-menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="navbar-menu-item-container"
            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className={`navbar-menu-item ${activeDropdown === item.label ? 'active' : ''}`}>
              {item.label}
              {item.hasDropdown && <ChevronDown />}
            </div>

            {item.label === 'Discover' && activeDropdown === 'Discover' && (
              <div className="dropdown-menu discover-dropdown">
                <div className="dropdown-content">
                  <h4 className="dropdown-section-title">Resources</h4>
                  <a href="#" className="dropdown-link">Server Directory</a>
                  <a href="#" className="dropdown-link">Trending Games</a>
                </div>
                <img src={paperRoll} alt="Paper Roll" className="dropdown-paper-roll" />
              </div>
            )}

            {item.label === 'Safety' && activeDropdown === 'Safety' && (
              <div className="dropdown-menu safety-dropdown">
                <div className="dropdown-columns">
                  <div className="dropdown-column">
                    <h4 className="dropdown-section-title">Resources</h4>
                    <a href="#" className="dropdown-link">Family Center</a>
                    <a href="#" className="dropdown-link">Safety Library</a>
                    <a href="#" className="dropdown-link">Safety News</a>
                    <a href="#" className="dropdown-link">Teen Charter</a>
                    <a href="#" className="dropdown-link">Discord Player's Guide</a>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-column">
                    <h4 className="dropdown-section-title">Hubs</h4>
                    <a href="#" className="dropdown-link">Parent Hub</a>
                    <a href="#" className="dropdown-link">Policy Hub</a>
                    <a href="#" className="dropdown-link">Privacy Hub</a>
                    <a href="#" className="dropdown-link">Transparency Hub</a>
                    <a href="#" className="dropdown-link">Wellbeing Hub</a>
                  </div>
                </div>
                <img src={egg} alt="Egg" className="dropdown-egg" />
              </div>
            )}

            {item.label === 'Quests' && activeDropdown === 'Quests' && (
              <div className="dropdown-menu quests-dropdown">
                <div className="dropdown-content">
                  <h4 className="dropdown-section-title">Resources</h4>
                  <a href="#" className="dropdown-link">Advertising</a>
                  <a href="#" className="dropdown-link">Success Stories</a>
                  <a href="#" className="dropdown-link">Quests FAQ</a>
                </div>
                <img src={prize} alt="Prize" className="dropdown-prize" />
              </div>
            )}

            {item.label === 'Support' && activeDropdown === 'Support' && (
              <div className="dropdown-menu support-dropdown">
                <div className="dropdown-content">
                  <h4 className="dropdown-section-title">Resources</h4>
                  <a href="#" className="dropdown-link">Help Center</a>
                  <a href="#" className="dropdown-link">Feedback</a>
                  <a href="#" className="dropdown-link">Submit a Request</a>
                </div>
                <img src={flyingCat} alt="Flying Cat" className="dropdown-cat" />
              </div>
            )}

            {item.label === 'Blog' && activeDropdown === 'Blog' && (
              <div className="dropdown-menu blog-dropdown">
                <div className="dropdown-content">
                  <h4 className="dropdown-section-title">Collections</h4>
                  <a href="#" className="dropdown-link">Featured</a>
                  <a href="#" className="dropdown-link">Community</a>
                  <a href="#" className="dropdown-link">Discord HQ</a>
                  <a href="#" className="dropdown-link">Engineering & Developers</a>
                  <a href="#" className="dropdown-link">How to Discord</a>
                  <a href="#" className="dropdown-link">Policy & Safety</a>
                  <a href="#" className="dropdown-link">Product & Features</a>
                </div>
                <img src={disc} alt="Discord Disc" className="dropdown-disc" />
              </div>
            )}

            {item.label === 'Developers' && activeDropdown === 'Developers' && (
              <div className="dropdown-menu developers-dropdown">
                <div className="dropdown-content">
                  <h4 className="dropdown-section-title">Learn</h4>
                  <a href="#" className="dropdown-link">Discord for Game Developers</a>
                  <a href="#" className="dropdown-link">Integration</a>
                  <a href="#" className="dropdown-link">Social Commerce</a>
                  <a href="#" className="dropdown-link">Apps & Activities</a>
                  <a href="#" className="dropdown-link">Developer Newsletter</a>
                  <a href="#" className="dropdown-link">Developer Case Studies</a>
                  
                  <div className="dropdown-divider-horizontal"></div>
                  
                  <h4 className="dropdown-section-title">Build</h4>
                  <a href="#" className="dropdown-link">Official Game Communities &#x2197;</a>
                  <a href="#" className="dropdown-link">Developer Portal &#x2197;</a>
                  <a href="#" className="dropdown-link">Documentation &#x2197;</a>
                  <a href="#" className="dropdown-link">Developer Help Center &#x2197;</a>
                </div>
                <img src={robo} alt="Robot" className="dropdown-robo" />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
