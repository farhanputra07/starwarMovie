import Header from './layout/Header';
import classes from './Film.module.css';
import { useState } from 'react';
import ListOfFilm from './listOfFilm';
import Container from './UI/Container';

const Film = (props) => {
  const [movies, setMovies] = useState([]);
  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };
  return (
    <div>
      <Header />
      <main>
        <Container>
          <button onClick={fetchMoviesHandler}>Get Movies</button>
        </Container>
      </main>
      {movies.length === 0 && <h1>Click get movies button</h1>}
      {!(movies.length === 0) && <ListOfFilm filmList={movies} />}
    </div>
  );
};

export default Film;
