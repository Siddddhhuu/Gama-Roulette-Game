import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MainGame from "./components/MainGame";
import Footer from "./components/Footer";
import HiddenBar from "./components/HiddenBar";
import "./style.css";
import "./responsive.css"; 

function App() {
  const [isFixedHeader, setIsFixedHeader] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowPos = window.scrollY;
      setIsFixedHeader(windowPos >= 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => {
      const newState = !prev;
      document.body.classList.toggle("visible-sidebar", newState);
      return newState;
    });
  };

  return (
    <div className="page-wrapper">
      
      <Header isFixed={isFixedHeader} toggleSidebar={toggleSidebar} />
      <section id="home">
        <Banner />
      </section>
      <section id="roulette">
        <MainGame />
      </section>
      {/* Add <section id="dice"> if needed */}
      <Footer />
      <HiddenBar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div
        className="menu-backdrop"
        onClick={toggleSidebar}
        style={{ display: isSidebarVisible ? "block" : "none" }}
      />
    </div>
  );
}

export default App;