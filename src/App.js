import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import MainGame from './components/MainGame';
import Footer from './components/Footer';
import HiddenBar from './components/HiddenBar';
import './bootstrap.css';
import './responsive.css';
import './style.css';

function App() {
  const [isFixedHeader, setIsFixedHeader] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowPos = window.scrollY;
      setIsFixedHeader(windowPos >= 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    document.body.classList.toggle('visible-sidebar', !isSidebarVisible);
  };

  return (
    <div className="page-wrapper">
      <Header isFixed={isFixedHeader} toggleSidebar={toggleSidebar} />
      <Banner />
      <MainGame />
      <Footer />
      <HiddenBar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="menu-backdrop" onClick={toggleSidebar} style={{ display: isSidebarVisible ? 'block' : 'none' }} />
    </div>
  );
}

export default App;