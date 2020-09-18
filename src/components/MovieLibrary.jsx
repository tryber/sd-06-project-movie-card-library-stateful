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
    const getMovies = this.state.movies;
    getMovies.push(newMovie);
    this.setState({ movies: getMovies });
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
      output = output.filter((movie) => (
        movie.title.includes(this.state.searchText) ||
        movie.subtitle.includes(this.state.searchText) ||
        movie.storyline.includes(this.state.searchText)
      ));
    }

    return output;
  }

  render() {
    const filteredMovies = this.filterMovies();
    return (
      <div>
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
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieLibrary.defaultProps = {
  movies: PropTypes.shape({
    title: '',
    subtitle: '',
    storyline: '',
    rating: 0,
    imagePath: '',
  }),
};

export default MovieLibrary;
