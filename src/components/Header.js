import React from "react";
import { Link } from "react-scroll";

const Header = ({ isFixed, toggleSidebar }) => {
  return (
    <header
      className={`main-header header-two ${isFixed ? "fixed-header" : ""}`}
    >
      <div className="header-upper">
        <div className="auto-container">
          <div className="main-box clearfix">
            <div className="logo-box clearfix">
              <div className="logo">
                <Link to="home" smooth={true} duration={1000}>
                  <img
                    src="https://gamacoin.ai/assets/images/gama-logo.svg"
                    alt="GAMA"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-box clearfix">
              <div className="nav-outer clearfix">
                <nav className="main-menu">
                  <ul className="navigation custom-links clearfix">
                    <li>
                      <Link to="home" smooth={true} duration={1000}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="dice" smooth={true} duration={1000}>
                        Dice
                      </Link>
                    </li>
                    <li>
                      <Link to="roulette" smooth={true} duration={1000}>
                        Roulette
                      </Link>
                    </li>
                    <li>
                      <div className="link">
                        <a
                          href="#"
                          className="theme-btn btn-style-four btn-success"
                        >
                          <span className="txt">Connect Wallet</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="nav-toggler">
                <button className="hidden-bar-opener" onClick={toggleSidebar}>
                  <span className="icon">
                    <svg
                      className="icon-close"
                      role="presentation"
                      viewBox="0 0 30.63 28"
                    >
                      <path
                        className="cls-1"
                        d="M0,22h26.52M0,12h26.52M0,2h26.52"
                        stroke="#101010"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
