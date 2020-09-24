import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);

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
    if (this.state.movies.bookmarked === true) {
      movies.filter((movie) => movie.bookmarked === true);
    }
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  movieFilter() {
    let filterResult = this.state.movies;
    if (this.state.bookmarkedOnly === true) {
      filterResult = filterResult.filter((movie) => movie.bookmarked === true);
    }
    if (this.state.selectedGenre !== '') {
      filterResult = filterResult.filter((movie) => movie.genre === this.state.selectedGenre);
    }
    if (this.state.searchText !== '') {
      const { searchText } = this.state;
      const textLower = searchText.toLowerCase();
      filterResult = filterResult.filter((movie) => (
        movie.title.toLowerCase().includes(textLower) ||
        movie.subtitle.toLowerCase().includes(textLower) ||
        movie.storyline.toLowerCase().includes(textLower)
      ));
    }

    return filterResult;
  }


  render() {
    const filteredMovies = this.movieFilter();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={filteredMovies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }

}

MovieLibrary.defaultProps = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
    })
  ),
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf (
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyLine: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default MovieLibrary;
