
/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './TVShows.css';
import Navbar from './Navbar';

const TVShows = ({ isAuthenticated, setIsAuthenticated }) => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const TMDB_API_KEY = 'fa4c2cf3f37f00f574361d2e46e18d69';
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const fetchCategories = async () => {
    try {
      const categoriesData = [
        { id: 18, name: 'Drama' },
        { id: 35, name: 'Comedy' },
        { id: 10751, name: 'Family' },
      ];

      const categoriesWithShows = await Promise.all(categoriesData.map(async (category) => {
        const showsResponse = await axios.get(
          `${TMDB_BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}&with_genres=${category.id}&language=en-US&page=1`
        );
        return {
          ...category,
          shows: showsResponse.data.results.map((show) => ({
            ...show,
            poster_path: show.poster_path ? `https://image.tmdb.org/t/p/w200/${show.poster_path}` : null,
          }))
        };
      }));

      setCategories(categoriesWithShows);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query === '') {
      setShowSearchResults(false); // Hide search results when query is empty
      return;
    }
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&query=${query}`
      );
      setSearchResults(response.data.results);
      setShowSearchResults(true); // Show search results when there are results
    } catch (error) {
      console.error('Error searching TV shows:', error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="tvshows-page">
      <Navbar handleLogout={handleLogout} onSearch={handleSearch} />
      {(searchQuery && searchResults.length > 0) || showSearchResults ? (
        <div className="search-result-container">
          {searchResults.map((show) => (
            <div key={show.id} className="search-result">
              <Link to={`/movie/${show.id}`} className="tvshow-tile">
                <img src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`} alt={show.name} />
                <p>{show.name}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="tvshow-categories-container">
          {categories.map((category) => (
            <div key={category.id} className="tvshow-category">
              <h2>{category.name}</h2>
              <div className="tvshow-tiles-container">
                {category.shows && category.shows.length > 0 && (
                  <div className="tvshow-tiles">
                    {category.shows.map((show) => (
                      <Link key={show.id} to={`/movie/${show.id}`} className="tvshow-tile">
                        <img src={show.poster_path} alt={show.name} />
                        <p>{show.name}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TVShows;
*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './TVShows.css';
import Navbar from './Navbar';

const TVShows = ({ isAuthenticated, setIsAuthenticated }) => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const TMDB_API_KEY = 'fa4c2cf3f37f00f574361d2e46e18d69';
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

  const fetchCategories = async () => {
    try {
      const categoriesData = [
        { id: 18, name: 'Drama' },
        { id: 35, name: 'Comedy' },
        { id: 10751, name: 'Family' },
      ];

      const categoriesWithShows = await Promise.all(categoriesData.map(async (category) => {
        const showsResponse = await axios.get(
          `${TMDB_BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}&with_genres=${category.id}&language=en-US&page=1`
        );
        return {
          ...category,
          shows: showsResponse.data.results.map((show) => ({
            ...show,
            poster_path: show.poster_path ? `https://image.tmdb.org/t/p/w200/${show.poster_path}` : null,
          }))
        };
      }));

      setCategories(categoriesWithShows);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query === '') {
      setShowSearchResults(false); // Hide search results when query is empty
      return;
    }
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&query=${query}`
      );
      setSearchResults(response.data.results);
      setShowSearchResults(true); // Show search results when there are results
    } catch (error) {
      console.error('Error searching TV shows:', error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="tvshows-page">
      <Navbar
        handleLogout={() => setIsAuthenticated(false)} // Pass handleLogout function to Navbar
        onSearch={handleSearch}
      />
      {(searchQuery && searchResults.length > 0) || showSearchResults ? (
        <div className="search-result-container">
          {searchResults.map((show) => (
            <div key={show.id} className="search-result">
              <Link to={`/movie/${show.id}`} className="tvshow-tile">
                <img src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`} alt={show.name} />
                <p>{show.name}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="tvshow-categories-container">
          {categories.map((category) => (
            <div key={category.id} className="tvshow-category">
              <h2>{category.name}</h2>
              <div className="tvshow-tiles-container">
                {category.shows && category.shows.length > 0 && (
                  <div className="tvshow-tiles">
                    {category.shows.map((show) => (
                      <Link key={show.id} to={`/movie/${show.id}`} className="tvshow-tile">
                        <img src={show.poster_path} alt={show.name} />
                        <p>{show.name}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TVShows;
