import Container from './UI/Container';
import React from 'react';
import classes from './listOfFilm.module.css';
const ListOfFilm = (props) => {
  return (
    <Container>
      <ul>
        {props.filmList.map((film) => {
          return (
            <li key={film.episode__id}>
              <h2>{film.title}</h2>
              <div>{film.opening_crawl}</div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ListOfFilm;
