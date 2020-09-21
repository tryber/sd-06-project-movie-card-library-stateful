import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {

  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value }, () => {
      const newMovieWithText = this.state.movies
        .filter((element) => element.title.includes(this.state.searchText) ||
          element.subtitle.includes(target.value) ||
          element.storyline.includes(target.value));
      this.setState({ movies: newMovieWithText });
    },
    );
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value }, () => {
      const newMovieWithGenre = this.state.movies
        .filter((element) => element.genre === this.state.selectedGenre);
      this.setState({ movies: newMovieWithGenre });
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked }, () => {
      const newMovieBookmarked = this.state.movies
        .filter((element) => element.bookmarked === this.state.bookmarkedOnly);
      this.setState({ movies: newMovieBookmarked });
    });
  }

  onClick(newMovie) {
    let { movies } = this.state;
    const moviesTwo = movies.concat([newMovie]);
    this.setState({ movies: moviesTwo });
  }

  render() {
    // const { movies } = this.state;
    console.log(this.state);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.string).isRequired };

export default MovieLibrary;
