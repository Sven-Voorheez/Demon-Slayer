import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Импортируем CSS файл

function Header() {
  return (
    <header className="header">
      <div className="header-container">
      <Link to="/" className="nav-link"><img src="/logo512.png" alt="Logo" className="header-logo" /> </Link>
        <div className="header-nav">
          <nav className="nav-links">
            <Link to="/" className="nav-link">Главная</Link>
            <Link to="/about" className="nav-link">О нас</Link>
            <Link to="/contact" className="nav-link">Контакты</Link>
            <Link to="/blog" className="nav-link">Блог</Link>
          </nav>
          <form className="search-form">
            <input type="text" placeholder="Поиск..." className="search-input" />
            <button type="submit" className="search-button">🔍</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;





