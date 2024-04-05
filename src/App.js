
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Signup from './Signup'; 
import Home from './Home';
import Movie from './Movie';
import Footer from './Footer';
import TVShows from "./TVShows";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />} />
          <Route path="/home" element={<Home isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} fallbackPath="/login" />
          <Route path="/movie/:movieId" element={<Movie setShowFooterProp={setShowFooter} />} />
          <Route path="/tv-shows" element={<TVShows isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={<Login />} />
        </Routes>
        {showFooter && <Footer />}
      </div>
    </Router>
  );
}

export default App;
/*
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Signup from './Signup'; 
import Home from './Home';
import Movie from './Movie';
import Footer from './Footer';
import TVShows from "./TVShows";
import Navbar from './Navbar'; // Import Navbar

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  const handleSearch = (query) => {
    // Define your search logic here
    console.log('Search query:', query);
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <div>
        <Navbar handleLogout={() => setIsAuthenticated(false)} onSearch={handleSearch} /> 
        <Routes>
          <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />} />
          <Route path="/home" element={<Home isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} onSearch={handleSearch} />} fallbackPath="/login" /> 
          <Route path="/movie/:movieId" element={<Movie setShowFooterProp={setShowFooter} />} />
          <Route path="/tv-shows" element={<TVShows isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} onSearch={handleSearch} />} /> 
          <Route path="/" element={<Login />} />
        </Routes>
        {showFooter && <Footer />}
      </div>
    </Router>
  );
}

export default App;
*/