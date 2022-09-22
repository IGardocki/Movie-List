import React, { useEffect, useState } from 'react';
import './App.css';
import { MovieList } from './MovieList';
import { MovieContext } from './MovieContext';
import { SearchBar } from './SearchBar';
import {AddMovieBar} from './AddMovieBar';
import {WatchedMovieList} from './WatchedMovieList'
import { ToWatchMovieList } from './ToWatchMovieList';

function App() {

  const [movieTitles, setMovieTitles] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [addText, setAddText] = useState('');
  const [watched, setWatched] = useState([]);
  const [toWatch, setToWatch] = useState([]);
  const [showToWatch, setShowToWatch] = useState(true);

  const gettersSetters = {
    movieTitles, setMovieTitles, searchText, setSearchText, addText, setAddText, watched, setWatched, toWatch, setToWatch, showToWatch, setShowToWatch
  }

  useEffect(() => {
    fetch('http://localhost:8080/movies')
      .then(res => res.json())
      .then(data => setMovieTitles(data))
  }, [movieTitles])

  return (

    <MovieContext.Provider value={gettersSetters}>
      <SearchBar />
      <AddMovieBar/>
      <MovieList />
      <WatchedMovieList/>
      <ToWatchMovieList/>
    </MovieContext.Provider>
  );
}

export default App;
