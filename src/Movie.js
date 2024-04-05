/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Movie.css'; 
import Footer from './Footer';

const Movie = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');

  const TMDB_API_KEY = 'fa4c2cf3f37f00f574361d2e46e18d69'; // Replace 'YOUR_TMDB_API_KEY' with your actual TMDB API key
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

  const fetchMovieData = async () => {
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
      );
      setMovieData(response.data);
      fetchTrailer();
    } catch (error) {
      console.error('Error fetching movie data:', error.message);
    }
  };

  const fetchTrailer = async () => {
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`
      );
      const trailerKey = response.data.results.find(
        (video) => video.type === 'Trailer'
      )?.key;
      if (trailerKey) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailerKey}?autoplay=1`);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error.message);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-page">
      <div className="video-section">
        <iframe
          width="100%"
          height="100%"
          src={trailerUrl}
          title="Trailer"
          frameborder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="info-section">
        <h2>{movieData.title}</h2>
        <p>{movieData.overview}</p>
        <p>Rating: {movieData.vote_average}/10</p>
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
*/
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Movie.css'; 
import Footer from './Footer';

const Movie = () => {
  const { movieId } = useParams();
  const [mediaData, setMediaData] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isMovie, setIsMovie] = useState(true); // Default to movie

  const TMDB_API_KEY = 'fa4c2cf3f37f00f574361d2e46e18d69'; // Replace 'YOUR_TMDB_API_KEY' with your actual TMDB API key
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

  const fetchMediaData = async () => {
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
      );
      setMediaData(response.data);
      fetchTrailer();
    } catch (error) {
      // If fetching movie data fails, try fetching TV show data
      try {
        const response = await axios.get(
          `${TMDB_BASE_URL}/tv/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
        );
        setMediaData(response.data);
        fetchTrailer();
        setIsMovie(false); // It's a TV show
      } catch (error) {
        console.error('Error fetching media data:', error.message);
      }
    }
  };

  const fetchTrailer = async () => {
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/${isMovie ? 'movie' : 'tv'}/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`
      );
      const trailerKey = response.data.results.find(
        (video) => video.type === 'Trailer'
      )?.key;
      if (trailerKey) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailerKey}?autoplay=1`);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error.message);
    }
  };

  useEffect(() => {
    fetchMediaData();
  }, [movieId]);

  if (!mediaData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-page">
      <div className="video-section">
        <iframe
          width="100%"
          height="100%"
          src={trailerUrl}
          title="Trailer"
          frameborder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="info-section">
        <h2>{isMovie ? mediaData.title : mediaData.name}</h2>
        <p>{mediaData.overview}</p>
        <p>Rating: {mediaData.vote_average}/10</p>
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
