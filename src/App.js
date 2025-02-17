import logo from './logo.svg'; //this is the image. Is saved as a variable to be used. 
import './App.css';
import Home from './components/Home';
import SearchInput from './components/SearchInput';
import Grid from './components/Grid';
import { useState } from 'react';


function App() {

  const [movies, setMovies] = useState ([]);

  
  return (
    <div className="App">
      <div className='container'>
        <Home/>
        <SearchInput setMovies={setMovies}/>
        <Grid movies={movies} />
      </div>
    </div>
  );
}

export default App;
