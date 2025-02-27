import React, { useState } from 'react';
import { Link } from 'react-scroll';

const HiddenBar = ({ isVisible, toggleSidebar }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'Dice', to: 'dice' },
    { label: 'Roulette', to: 'roulette' },
  ];

  return (
    <section className={`hidden-bar ${isVisible ? 'visible-sidebar' : ''}`}>
      <div className="hidden-bar-wrapper">
        <div className="hidden-bar-closer" onClick={toggleSidebar}>
          <span className="icon">
            <svg className="icon-close" role="presentation" viewBox="0 0 16 14">
              <path d="M15 0L1 14m14 0L1 0" stroke="#101010" fill="none" fillRule="evenodd" />
            </svg>
          </span>
        </div>
        <div className="nav-logo-box">
          <div className="logo">
            <Link to="home" smooth={true} duration={1000} onClick={toggleSidebar}>
              <img src="/assets/images/gama-logo.svg" alt="GAMA" />
            </Link>
          </div>
        </div>
        <div className="side-menu">
          <ul className="navigation custom-links clearfix">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} smooth={true} duration={1000} onClick={toggleSidebar}>
                  {item.label}
                  {/* Add dropdown logic here if needed */}
                  {/* <button className="btn-expander" onClick={() => toggleItem(index)}>
                    <i className={`icon sl-icon-arrow-${expandedItems[index] ? 'up' : 'down'}`}></i>
                  </button> */}
                </Link>
                {/* Uncomment and add <ul> for submenus if applicable */}
              </li>
            ))}
            <li>
              <div className="link">
                <a href="#" className="theme-btn btn-style-four btn-success" onClick={toggleSidebar}>
                  <span className="txt">Connect Wallet</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HiddenBar;