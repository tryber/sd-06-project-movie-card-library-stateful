import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import movies from '../data';

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
      movies: this.props.movies,
    };
  }

  onClick(newMovie) {
    this.setState((previousState) => ({ movies: [...previousState.movies, newMovie] }));
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
    if (this.state.bookmarked === true) movies.filter((movie) => movie.bookmarked === true);
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  filterMovies() {
    let output = this.state.movies;
    if (this.state.bookmarkedOnly === true) {
      output = output.filter((movie) => movie.bookmarked === true);
    }
    if (this.state.selectedGenre !== '') {
      output = output.filter((movie) => movie.genre === this.state.selectedGenre);
    }
    if (this.state.searchText !== '') {
      const { searchText } = this.state;
      const textLC = searchText.toLowerCase();
      output = output.filter((movie) => (
        movie.title.toLowerCase().includes(textLC) ||
        movie.subtitle.toLowerCase().includes(textLC) ||
        movie.storyline.toLowerCase().includes(textLC)
      ));
    }

    return output;
  }

  render() {
    const filteredMovies = this.filterMovies();
    return (
      <div className="search-bar-container">
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={filteredMovies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ),
};

MovieLibrary.defaultProps = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
    }),
  ),
};

export default MovieLibrary;
