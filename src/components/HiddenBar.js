import React, { useState } from "react";
import { Link } from "react-scroll";

const HiddenBar = ({ isVisible, toggleSidebar }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const menuItems = [
    { label: "Home", to: "https://gamacoin.ai/", external: true },
    { label: "Dice", to: "https://diceroll.gamacoin.ai/", external: true },
    { label: "Roulette", to: "roulette", external: false },
  ];

  return (
    <section className={`hidden-bar ${isVisible ? "visible-sidebar" : ""}`}>
      <div className="hidden-bar-wrapper">
        <div className="hidden-bar-closer" onClick={toggleSidebar}>
          <span className="icon">
            <svg className="icon-close" role="presentation" viewBox="0 0 16 14">
              <path
                d="M15 0L1 14m14 0L1 0"
                stroke="#101010"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="nav-logo-box">
          <div className="logo">
            <a
              href="https://gamacoin.ai/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleSidebar}
            >
              <img
                src="https://gamacoin.ai/assets/images/gama-logo.svg"
                alt="GAMA"
                onError={(e) =>
                  (e.target.src =
                    "https://gamacoin.ai/assets/images/gama-logo.svg")
                }
              />
            </a>
          </div>
        </div>
        <div className="side-menu">
          <ul className="navigation custom-links clearfix">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.external ? (
                  <a
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleSidebar}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={toggleSidebar}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <div className="link">
                <a
                  href="#"
                  className="theme-btn btn-style-four btn-success"
                  onClick={toggleSidebar}
                >
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