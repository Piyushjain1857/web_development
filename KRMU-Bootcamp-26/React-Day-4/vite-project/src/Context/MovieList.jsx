import React, { useContext } from 'react';
import {MovieContext} from './MovieProvider';

const MovieList = () => {
  const  {movies}  = useContext(MovieContext);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.name}>
          <h2>{movie.name}</h2>
          <img src={movie.image} alt={movie.name} width={300}/>
          <p>Rating: {movie.rating}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default MovieList;