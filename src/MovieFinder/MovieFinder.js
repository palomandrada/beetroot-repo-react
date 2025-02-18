import './MovieFinder.css';
import Home from './Home';
import SearchInput from './SearchInput';
import Grid from './Grid';
import { useState } from 'react';


function MovieFinder() {

  const [movies, setMovies] = useState ([]);

  
  return (
    <div className="App">
      <div className='container'>
        <h1>Movie Finder</h1>
        <Home/>
        <SearchInput setMovies={setMovies}/>
        <Grid movies={movies} />
      </div>
    </div>
  );
}


export default MovieFinder;
