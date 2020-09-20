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
    this.funcFilter = this.funcFilter.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }
  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }
  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }
  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }
  onClick(state) {
    const getMovies = [... this.props.movies];
    getMovies.push(state);
    this.setState({ movies: getMovies });
  }

  funcFilter(movies) {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    let result;
    return movies.filter((movie) => {
      const { title, subtitle, storyline } = movie;
      if (searchText === '') {
        result = true;
      } else {
        result = (
          (title.indexOf(searchText) > -1 ||
          subtitle.indexOf(searchText) > -1 ||
          storyline.indexOf(searchText) > -1)
        );
      }
      return result;
    }).filter((movie) => {
      const { genre } = movie;
      return this.insideFilter(genre, selectedGenre);
    }).filter((movie) => {
      const { bookmarked } = movie;
      return this.insideFilter(bookmarked, bookmarkedOnly);
    });
  }
  insideFilter(propr, state) {
    let result;
    if (state === false || state === '') {
      result = true;
    } else {
      result = (propr === state);
    }
    return result;
  }
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.funcFilter(this.state.movies)} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};
