import { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logoblack2.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`Header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="topBanner">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <a href="#appointment" className="appointment-button">Appointment</a>
        <div className="burger-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      
      <div className={`ne-navbar ${isMenuOpen ? 'show-menu' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#templates">Templates</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
