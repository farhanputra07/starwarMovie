import Container from './UI/Container';
import React from 'react';
import classes from './listOfFilm.module.css';
const ListOfFilm = (props) => {
  return (
    <Container>
      <ul>
        {props.filmList.map((film) => {
          return (
            <li key={film.id}>
              <h2>{film.name}</h2>
              <div>{film.description}</div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ListOfFilm;
