import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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
    this.bookmarkedOnlyChange = this.bookmarkedOnlyChange.bind(this);
    this.onselectedGenreChange = this.onselectedGenreChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
    this.filterText = this.filterText.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
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

  bookmarkedOnlyChange() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
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
          onBookmarkedChange={this.bookmarkedOnlyChange}
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
