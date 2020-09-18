import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies: moviesList } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: moviesList,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectGenreChange = this.handleSelectGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleSearchChange({ target }) {
    const { name, value } = target;
    if (value !== '') {
      this.setState(() => ({
        [name]: value,
        movies: this.props.movies.filter((movie) => movie.title.includes(value) || movie.subtitle.includes(value) || movie.storyline.includes(value)),
        bookmarked: false,
        selectedGenre: '',
      }));
    } else {
      this.setState(() => ({
        [name]: value,
        movies: this.props.movies,
        bookmarked: false,
        selectedGenre: '',
      }));
    }
  }

  handleBookmarkedChange({ target }) {
    const { name, checked } = target;
    if (checked === true) {
      this.setState(() => ({
        [name]: checked,
        movies: this.props.movies.filter((movie) => movie.bookmarked === true),
        searchText: '',
        selectedGenre: '',
      }));
    } else {
      this.setState(() => ({
        [name]: checked,
        movies: this.props.movies,
        searchText: '',
        selectedGenre: '',
      }));
    }
  }

  handleSelectGenreChange({ target }) {
    const { name, value } = target;
    if (value !== '') {
      this.setState(() => ({
        [name]: value,
        movies: this.props.movies.filter((movie) => movie.genre === value),
        searchText: '',
        bookmarkedOnly: false,
      }));
    } else {
      this.setState(() => ({
        [name]: value,
        movies: this.props.movies,
        searchText: '',
        bookmarkedOnly: false,
      }));
    }
  }

  addNewMovie(newMovieState) {
    this.setState(() => ({ movies: this.state.movies.concat(newMovieState) }));
  }

  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.handleSearchChange} bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.handleBookmarkedChange} selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.handleSelectGenreChange} />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.defaultProps = { movies: [] };
MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };
