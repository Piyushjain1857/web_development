import React, { useState } from 'react';

export const MovieContext = React.createContext();

const MovieProvider = ({children}) => {
  const [movies, setMovies] = useState([
    { name: "The Shawshank Redemption", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbwp4RrTMdBjdnN2QHaMSoIA7SE-7n5BKSQ&s", rating: 9.3 },
    { name: "The Godfather", image: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg", rating: 9.2 },
    { name: "The Dark Knight", image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg", rating: 9.0 }
  ]);

  return (
    <MovieContext.Provider value={{movies}}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;