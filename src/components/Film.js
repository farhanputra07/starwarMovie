import Header from './layout/Header';
import classes from './Film.module.css';
import ListOfFilm from './listOfFilm';
import Container from './UI/Container';

const DUMMY_FILM = [
  {
    id: 1,
    name: 'Starwars 1',
    description: 'lalamalmalala',
  },
  {
    id: 2,
    name: 'Starwars 2',
    description: 'lalamalmalalajjglwhweeoiovnwonv',
  },
  {
    id: 3,
    name: 'Starwars 3',
    description: 'lalamalmalalaasdfasdvdsdfd',
  },
];

const Film = (props) => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <button>Get Movies</button>
        </Container>
      </main>
      <ListOfFilm filmList={DUMMY_FILM} />
    </div>
  );
};

export default Film;
