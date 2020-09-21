import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.searchTextChange = this.searchTextChange.bind(this);
    this.bookmarkedChange = this.bookmarkedChange.bind(this);
    this.selectedGenreChange = this.selectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  searchTextChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value }, this.searchTextMovie);
  }

  bookmarkedChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.checked }, this.bookmarkedMovies);
  }

  selectedGenreChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value }, this.selectedGenreMovies(target.value));
  }

  bookmarkedMovies() {
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    const NewArrayMovie = movies.filter((movie) => movie.bookmarked === true);
    return bookmarkedOnly ? this.setState({ movies: NewArrayMovie })
    : this.setState({ movies });
  }

  selectedGenreMovies(setName) {
    const { movies } = this.props;
    const newGenre = movies.filter((genre) => genre.genre === setName);
    return newGenre.length < 1 ? this.setState({ movies })
    : this.setState({ movies: newGenre });
  }

  searchTextMovie() {
    const { movies } = this.props;
    const list = this.state.movies;
    console.log(this.state.movies);
    const { searchText } = this.state;
    const newState = list
    .filter((movie) => movie.title.toUpperCase().includes(searchText.toUpperCase())
    || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
    || movie.storyline.toUpperCase().includes(searchText.toUpperCase()));
    return searchText === '' ? this.setState({ movies: [...movies, list] })
    : this.setState({ movies: newState });
  }

  addNewMovie(userMovie) {
    const newMovie = this.state.movies;
    this.setState({ movies: [...newMovie, userMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.searchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.bookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.selectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
