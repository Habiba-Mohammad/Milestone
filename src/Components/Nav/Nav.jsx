import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    // Close the navigation bar when the route changes
    setIsNavOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`Nav-bar ${isNavOpen ? 'open' : 'closed'}`}>
        <input 
          id="menu-toggle" 
          type="checkbox" 
          checked={isNavOpen} 
          onChange={toggleNav} 
        />
        <label className='menu-button-container' htmlFor="menu-toggle">
          <div className='menu-button'></div>
        </label>

        <div className='logo'>
          <p className='logoName'> طفلي</p>
          <i className='iconName'></i>
        </div>
        <ul className='menu'>
          <li> <Link className="link" to="/Main">الصفحة الرئيسية </Link></li>
          <li><Link className="link" to='/listen'>اسمع</Link></li>
          <li><Link className="link" to='/GamesMainPage'>العاب</Link></li>
          <li> <Link className="link" to='/Arabic'>عربي</Link></li>
          <li> <Link className="link" to='/English'>English</Link></li>
          <li> <Link className="link" to="/qs">مقالات أخرى </Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;