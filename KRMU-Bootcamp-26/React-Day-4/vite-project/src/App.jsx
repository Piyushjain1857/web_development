import React from "react";
import Parent from "./Parent";
import MovieProvider from "./Context/MovieProvider";
import MovieList from "./Context/MovieList";

const App = () => {
  return (
    <div>
      {/* <Parent/> */}
      <MovieProvider>
        <MovieList />
      </MovieProvider>
    </div>
  );
};

export default App;
