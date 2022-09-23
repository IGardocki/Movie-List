import React, { useEffect, useState } from 'react';
import './App.css';
import { MovieList } from './MovieList';
import { MovieContext } from './MovieContext';
import { SearchBar } from './SearchBar';
import { AddMovieBar } from './AddMovieBar';
import { WatchedMovieList } from './WatchedMovieList'
import { ToWatchMovieList } from './ToWatchMovieList';

function App() {

  const [movieTitles, setMovieTitles] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [addText, setAddText] = useState('');
  const [watched, setWatched] = useState([]);
  const [toWatch, setToWatch] = useState([]);
  const [showToWatch, setShowToWatch] = useState(false);

  const gettersSetters = {
    movieTitles, setMovieTitles, searchText, setSearchText, addText, setAddText, watched, setWatched, toWatch, setToWatch, showToWatch, setShowToWatch
  }

  useEffect(() => {
    fetch('http://localhost:8080/movies')
      .then(res => res.json())
      .then(data => setMovieTitles(data))
  }, [movieTitles])

  return (
    // <div class="container">
    <MovieContext.Provider value={gettersSetters}>
      <nav class="navbar navbar-light bg-primary">
        <SearchBar />
        <AddMovieBar />
      </nav>
      <MovieList />
      <div class="text-center">
        <button type="button" class="btn btn-primary" onClick={() => {
          setShowToWatch(false)
        }}>See Watched Movies</button>

        <button type="button" class="btn btn-primary" onClick={() => {
          setShowToWatch(true)
          if (toWatch === []) {
            setToWatch(movieTitles)
          }

        }}>See Movies To Watch</button>
      </div>



      {
        showToWatch ? <ToWatchMovieList /> : <WatchedMovieList />
      }


    </MovieContext.Provider>
    // </div>
  );
}

export default App;
