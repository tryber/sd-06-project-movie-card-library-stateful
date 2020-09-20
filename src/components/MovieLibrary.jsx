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

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  onSelectedGenreChange({ target }) {
    const { name, value, checked, type } = target;
    this.setState(type === 'checkbox'
      ? { [name]: checked }
      : { [name]: value });
  }

  onBookmarkedChange(event = { target: this.bookmarkedOnly }) {
    const { target } = event;
    this.setState(target.type === 'checkbox'
      ? { [target.name]: target.checked }
      : { [target.name]: target.value });
  }

  onSearchTextChange(event = { target: this.searchText }) {
    const { target } = event;
    this.setState(target.type === 'checkbox'
      ? { [target.name]: target.checked }
      : { [target.name]: target.value });
  }

  onClick({ target }) {
    const { subtitle, title, imagePath, storyline, rating, genre } = target;
    const NEW_MOVIE = { subtitle, title, imagePath, storyline, rating, genre };
    this.setState((past) => ({ movies: [...past, NEW_MOVIE] }));
  }

  render() {
    const {
      onClick,
      movies,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={onSearchTextChange}
          onBookmarkedChange={onBookmarkedChange}
          onSelectedGenreChange={onSelectedGenreChange}
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
  onClick: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  /* subtitle: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired, */
};

export default MovieLibrary;
