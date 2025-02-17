import { useState } from 'react';

const KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODlhM2E4OGUxODBkNjVlNDY1MjA4NjkyMGIxMmVlYyIsIm5iZiI6MTczOTcyNTM1Ny40MjMsInN1YiI6IjY3YjIxYTJkODAyNzBiMGUwODlmYmEyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kvoIX_D57b9zaGtrZ9EXKe-kox7laH_sXjJjGjkUAhU';
const BASE_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${KEY}`
    }
};

export default function SearchInput (props) {
    const setMovies = props.setMovies

    const [movieName, setMovieName] = useState ('');

    function changeHandler (e) {
        setMovieName (e.target.value);
    }

    function searchHundler (){
        fetch( BASE_SEARCH_URL + '?query=' + movieName, options)
            .then(res => {
                return res.json()
            }).then(resp => {
                setMovies(resp.results)
            })
             
    }

    return (
     <div className='container search'>  
        <div className="input-group mb-3">
            <input onChange={changeHandler} type="text" className="form-control" placeholder="Movie name"/>
            <button onClick={searchHundler} className='btn btn-outline-secondary' type='button'>Search</button>
        </div>
        <div className='Search-result'>
            <p>Looking for:{movieName}</p>
        </div>
    </div> 

    )
}