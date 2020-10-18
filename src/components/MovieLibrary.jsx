import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onselectedGenreChange = this.onselectedGenreChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
    this.filterText = this.filterText.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.favoriteMovies = this.favoriteMovies.bind(this);
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.filterText());
  }

  onselectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value }, () => this.filterGenre());
  }

  filterGenre() {
    const { selectedGenre, movies } = this.state;
    const filtered = movies.filter((movie) => movie.genre === selectedGenre);
    this.setState({ movies: filtered });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly }, () => this.favoriteMovies());
  }

  favoriteMovies() {
    const { movies, bookmarkedOnly } = this.state;
    const favorites = movies.filter((movie) => movie.bookmarked === true);
    if (bookmarkedOnly === true) this.setState({ movies: favorites });
    else this.setState({ movies: this.props.movies });
  }

  filterText() {
    const { movies, searchText } = this.state;
    const moviesSearch = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    this.setState({ movies: moviesSearch });
  }

  newMovie(novoEstado) {
    this.setState({ movies: [...this.state.movies, novoEstado] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onselectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.newMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
