import React, { Component } from 'react';
import PropTypes, { objectOf } from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  // filterMovies() {
  //   let filteredMovies = this.props.movies;
  //   if (this.state.searchText !== '') {
  //     filteredMovies = filteredMovies.filter((movie) =>
  //       movie.title.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
  //       movie.subtitle.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
  //       movie.storyline.toLowerCase().includes(this.state.searchText.toLowerCase()));
  //   }
  //   if (this.state.bookmarkedOnly === true) {
  //     filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
  //   } else {
  //     filteredMovies = this.props.movies;
  //   }
  //   if (this.state.selectedGenre !== '') {
  //     filteredMovies = filteredMovies.filter((movie) =>
  //       movie.genre === this.state.selectedGenre);
  //   }
  //   this.setState({ movies: filteredMovies });
  // }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.searchText}
          bookmarkedOnly={this.bookmarkedOnly}
          selectedGenre={this.selectedGenre}
        />
        <AddMovie />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(objectOf).isRequired };

export default MovieLibrary;
