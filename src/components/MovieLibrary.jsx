import React from 'react';
import propTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);
    this.addClick = this.addClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onBookmarkedChange(e) {
    this.setState({ bookmarkedOnly: e.target.checked });
  }

  onSelectedGenreChange(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  moviesFilter() {
    let movieArray = this.state.movies;
    if (this.state.bookmarkedOnly === true) {
      movieArray = movieArray.filter((movie) => movie.bookmarked === true).map((movie) => movie);
    }
    if (this.state.selectedGenre !== '') {
      movieArray = movieArray.filter((movie) => movie.genre === this.state.selectedGenre)
      .map((movie) => movie);
    }
    if (this.state.searchText !== '') {
      movieArray = movieArray.filter((movie) => (
        movie.title.includes(this.state.searchText) ||
        movie.subtitle.includes(this.state.searchText) ||
        movie.storyline.includes(this.state.searchText)
      )).map((movie) => movie);
    }
    return movieArray;
  }

  addClick(movie) {
    this.setState({ movies: this.state.movies.concat(movie) });
  }
  render() {
    const selectedMovies = this.moviesFilter();
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText} bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre} onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={selectedMovies} />
        <AddMovie onClick={this.addClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    imagePath: propTypes.string.isRequired,
    bookmarked: propTypes.bool,
    genre: propTypes.string,
  }).isRequired).isRequired,
};
export default MovieLibrary;
