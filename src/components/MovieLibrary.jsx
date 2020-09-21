import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClick(movieToAdd) {
    const { subtitle, title, imagePath, storyline, rating, genre } = movieToAdd;
    const NEW_MOVIE = { subtitle, title, imagePath, storyline, rating, genre };
    this.setState((past) => ({ movies: [...past.movies, NEW_MOVIE] }));
  }

  onSearchTextChange(event = { target: this.searchText }) {
    const { target } = event;
    this.setState(target.type === 'checkbox'
      ? { [target.name]: target.checked }
      : { [target.name]: target.value });
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.state;
    const { name, value } = target;
    this.setState({ [name]: value });
    this.setState({ movies: movies.filter((movie) => movie.genre === value) });
    // this.filterMovies();
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { movies, bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: checked });// bookmarkedOnly
    this.setState({ movies: movies.filter((movie) => movie.bookmarked === bookmarkedOnly) });
    // this.filterMovies();
  }

  filterMovies() {
    this.setState({ movies: this.props.movies });
    /* const { movies, bookmarkedOnly, selectedGenre } = this.state; */
  }

  render() {
    const { movies, bookmarkedOnly, selectedGenre } = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange, onClick } = this;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={onSearchTextChange}
          onBookmarkedChange={onBookmarkedChange}
          bookmarkedOnly={bookmarkedOnly}
          onSelectedGenreChange={onSelectedGenreChange}
          selectedGenre={selectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={onClick} />
      </div>
    );
  }


  /* async insertMovie() {
    await recordData()
      .then(resetState());
  } */
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  /* subtitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired, */
};

export default MovieLibrary;
