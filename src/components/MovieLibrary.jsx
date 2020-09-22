import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    // const movies = this.props.movies;
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
      listMovies: this.props.movies,
    };
  }
  onClick(stateAddMovie) {
    const newMovie = this.state.listMovies.concat(stateAddMovie);
    this.setState({
      movies: newMovie,
      listMovies: newMovie,
    });
  }
  moviesConditioned(key, value, type, movies) {
    const arrayKeys = ['title', 'subtitle', 'storyline'];
    let valueMovies = movies;
    if (key === 'searchText' && value !== '') {
      valueMovies = movies.filter((movie) => arrayKeys.some((key2) =>
        movie[key2].toUpperCase().includes(value.toUpperCase()),
      ));
    } else if (type === 'checkbox' && value !== false) {
      valueMovies = movies.filter((movie) => movie.bookmarked);
    } else if (key === 'selectedGenre' && value !== '') {
      valueMovies = movies.filter((movie) => movie.genre === value);
    }
    return valueMovies;
  }
  handleChange({ target }) {
    const key = target.id;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const movies = this.state.listMovies;
    const type = target.type;
    this.setState({
      [key]: value,
      movies: this.moviesConditioned(key, value, type, movies),
    });
  }
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}
const string = PropTypes.string;
const number = PropTypes.number;
const bool = PropTypes.bool;
const obj = {
  title: string,
  subtitle: string,
  storyline: string,
  rating: number,
  imagePath: string,
  bookmarked: bool,
  genre: string,
};
MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.shape(obj)).isRequired };

export default MovieLibrary;
