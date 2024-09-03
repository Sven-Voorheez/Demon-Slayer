import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src="/logo512.png" alt="Logo" className="header-logo-img" />
        </Link>
        <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          ☰
        </button>
        <div className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="nav-links">
            <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Главная</Link>
            <Link to="/about" className="nav-link" onClick={toggleMobileMenu}>О нас</Link>
            <Link to="/contact" className="nav-link" onClick={toggleMobileMenu}>Контакты</Link>
            <Link to="/blog" className="nav-link" onClick={toggleMobileMenu}>Блог</Link>
          </nav>
          <form className="search-form">
            <input
              type="text"
              placeholder="Поиск..."
              className="search-input"
              aria-label="Поиск"
            />
            <button type="submit" className="search-button" aria-label="Поиск">
              🔍
            </button>
          </form>
          <button className="menu-close" onClick={toggleMobileMenu} aria-label="Close menu">
            ✖️
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;








