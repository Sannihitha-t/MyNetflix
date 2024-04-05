
/*
// Home.js
import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import Navbar from './Navbar';

const Home = ({ isAuthenticated, setIsAuthenticated }) => {
  const [categories, setCategories] = useState([]);
  const [slides, setSlides] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const TMDB_API_KEY = 'fa4c2cf3f37f00f574361d2e46e18d69';
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
  const POSTER_SIZE = 'w200';

  const fetchCategories = async () => {
    try {
      const categoriesData = [
        { id: 18, name: 'Drama' },
        { id: 35, name: 'Comedy' },
        { id: 28, name: 'Action' },
        { id: 10751, name: 'Family' },
        { id: 27, name: 'Horror' }
      ];
      const categoriesWithMovies = await Promise.all(categoriesData.map(async (category) => {
        const moviesResponse = await axios.get(
          `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${category.id}&language=en-US&page=1`
        );
        return {
          ...category,
          movies: moviesResponse.data.results.map((movie) => ({
            ...movie,
            poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/${POSTER_SIZE}/${movie.poster_path}` : null,
          }))
        };
      }));
      setCategories(categoriesWithMovies);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
    }
  };

  const fetchSlides = async () => {
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`
      );
      setSlides(response.data.results.slice(0, 10));
    } catch (error) {
      console.error('Error fetching slides:', error.message);
    }
  };

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
      );
      setPopularMovies(response.data.results.slice(0, 10));
    } catch (error) {
      console.error('Error fetching popular movies:', error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchSlides();
    fetchPopularMovies();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleTileClick = (movieId) => {
    window.location.href = `/movie/${movieId}`;
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filterMoviesBySearch = (movie) => {
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  };

  return (
    <div className="home-page">
      <Navbar handleLogout={handleLogout} onSearch={handleSearch} categories={categories} />

      <div className="slideshow-container">
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img
              src={`https://image.tmdb.org/t/p/original/${slide.poster_path}`}
              alt={slide.title}
              className="slide-image"
            />
            <div className="slide-details">
              <h3>{slide.title}</h3>
              <p>{slide.overview}</p>
              <Link to={`/movie/${slide.id}`} className="play-button">
                Play
              </Link>
            </div>
          </div>
        ))}
      </div>

      {popularMovies.length > 0 && (
        <div id="category-Popular on Netflix" className="category">
          <h2>Popular on Netflix</h2>
          <div className="tiles-container">
            {popularMovies.map((movie) => (
              <div
                key={movie.id}
                className="tile"
                onClick={() => handleTileClick(movie.id)}
              >
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
  )}

 {categories.map((category) => (
  <div key={category.id} id={`category-${category.name.toLowerCase()}`} className="category">
    <h2>{category.name}</h2>
    <div className="tiles-container">
      {category.movies.filter(filterMoviesBySearch).map((movie) => (
        <div
          key={movie.id}
          className="tile"
          onClick={() => handleTileClick(movie.id)}
        >
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  </div>
 ))}

    </div>
  );
};

export default Home;
*/
import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import Navbar from './Navbar';

const Home = ({ isAuthenticated, setIsAuthenticated }) => {
  const [categories, setCategories] = useState([]);
  const [slides, setSlides] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const TMDB_API_KEY = 'fa4c2cf3f37f00f574361d2e46e18d69';
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
  const POSTER_SIZE = 'w200';

  const fetchCategories = async () => {
    try {
      const categoriesData = [
        { id: 18, name: 'Drama' },
        { id: 35, name: 'Comedy' },
        { id: 28, name: 'Action' },
        { id: 10751, name: 'Family' },
        { id: 27, name: 'Horror' }
      ];
      const categoriesWithMovies = await Promise.all(categoriesData.map(async (category) => {
        const moviesResponse = await axios.get(
          `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${category.id}&language=en-US&page=1`
        );
        return {
          ...category,
          movies: moviesResponse.data.results.map((movie) => ({
            ...movie,
            poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/${POSTER_SIZE}/${movie.poster_path}` : null,
          }))
        };
      }));
      setCategories(categoriesWithMovies);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
    }
  };

  const fetchSlides = async () => {
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`
      );
      setSlides(response.data.results.slice(0, 10));
    } catch (error) {
      console.error('Error fetching slides:', error.message);
    }
  };

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
      );
      setPopularMovies(response.data.results.slice(0, 10));
    } catch (error) {
      console.error('Error fetching popular movies:', error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchSlides();
    fetchPopularMovies();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleTileClick = (movieId) => {
    window.location.href = `/movie/${movieId}`;
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filterMoviesBySearch = (movie) => {
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  };

  return (
    <div className="home-page">
      <Navbar handleLogout={handleLogout} onSearch={handleSearch} categories={categories} />

      {!searchQuery && (
        <div className="slideshow-container">
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <img
                src={`https://image.tmdb.org/t/p/original/${slide.poster_path}`}
                alt={slide.title}
                className="slide-image"
              />
              <div className="slide-details">
                <h3>{slide.title}</h3>
                <p>{slide.overview}</p>
                <Link to={`/movie/${slide.id}`} className="play-button">
                  Play
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {searchQuery && (
        <div className="search-results">
          {/* Render the search results here */}
        </div>
      )}

      {!searchQuery && popularMovies.length > 0 && (
        <div id="category-Popular on Netflix" className="category">
          <h2>Popular on Netflix</h2>
          <div className="tiles-container">
            {popularMovies.map((movie) => (
              <div
                key={movie.id}
                className="tile"
                onClick={() => handleTileClick(movie.id)}
              >
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {categories.map((category) => (
        <div key={category.id} id={`category-${category.name.toLowerCase()}`} className="category">
          <h2>{category.name}</h2>
          <div className="tiles-container">
            {category.movies.filter(filterMoviesBySearch).map((movie) => (
              <div
                key={movie.id}
                className="tile"
                onClick={() => handleTileClick(movie.id)}
              >
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Home;

