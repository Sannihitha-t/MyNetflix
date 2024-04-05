
/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ handleLogout, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const scrollToCategory = (categoryId) => {
    const categoryElement = document.getElementById(`category-${categoryId}`);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth' });
    }
    setShowDropdown(false); // Close the dropdown after scrolling
  };

  const scrollToPopular = () => {
    const popularElement = document.getElementById('category-Popular on Netflix');
    if (popularElement) {
      popularElement.scrollIntoView({ behavior: 'smooth' });
    }
    setShowDropdown(false); // Close the dropdown after scrolling
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="Netflix Logo" className="logo" />
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/tv-shows" className="nav-link">TV Shows</Link>
        <div className="dropdown">
          <Link onClick={toggleDropdown} className="nav-link">Movies</Link>
          {showDropdown && (
            <div className="dropdown-content">
              <span className="dropdown-link" onClick={() => scrollToCategory('drama')}>Drama</span>
              <span className="dropdown-link" onClick={() => scrollToCategory('comedy')}>Comedy</span>
              <span className="dropdown-link" onClick={() => scrollToCategory('action')}>Action</span>
              <span className="dropdown-link" onClick={() => scrollToCategory('family')}>Family</span>
              <span className="dropdown-link" onClick={() => scrollToCategory('horror')}>Horror</span>
            </div>
          )}
        </div>
        <Link onClick={scrollToPopular} className="nav-link">New & Popular</Link>
      </div>
      <div className="navbar-right">
    
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ handleLogout, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const scrollToCategory = (categoryId) => {
    const categoryElement = document.getElementById(`category-${categoryId}`);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth' });
    }
    setShowDropdown(false); // Close the dropdown after scrolling
  };

  const scrollToPopular = () => {
    const popularElement = document.getElementById('category-Popular on Netflix');
    if (popularElement) {
      popularElement.scrollIntoView({ behavior: 'smooth' });
    }
    setShowDropdown(false); // Close the dropdown after scrolling
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="Netflix Logo" className="logo" />
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/tv-shows" className="nav-link">TV Shows</Link>
        <div className="dropdown">
          <Link onClick={toggleDropdown} className="nav-link">Movies</Link>
          {showDropdown && (
            <div className="dropdown-content">
              <span className="dropdown-link" onClick={() => scrollToCategory('drama')}>Drama</span>
              <span className="dropdown-link" onClick={() => scrollToCategory('comedy')}>Comedy</span>
              <span className="dropdown-link" onClick={() => scrollToCategory('action')}>Action</span>
              <span className="dropdown-link" onClick={() => scrollToCategory('family')}>Family</span>
              <span className="dropdown-link" onClick={() => scrollToCategory('horror')}>Horror</span>
            </div>
          )}
        </div>
        <Link onClick={scrollToPopular} className="nav-link">New & Popular</Link>
      </div>
      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleLogout} className="logout-button">Logout</button> {/* Invoke handleLogout function */}
      </div>
    </nav>
  );
};

export default Navbar;
