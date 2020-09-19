import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };

    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateBookMarkedOnly = this.updateBookMarkedOnly.bind(this);
    this.updateSelectedGenre = this.updateSelectedGenre.bind(this);
  }


  updateSearchText({ target }) {
    const { value } = target;
    this.setState(() => ({ searchText: value }));
  }

  updateBookMarkedOnly({ target }) {
    const { value } = target;
    this.setState(() => ({ bookmarkedOnly: value }));
  }

  updateSelectedGenre({ target }) {
    const { value } = target;
    this.setState(() => ({ selectedGenre: value }));
  }

  createMovie(movie) {
    this.setState((state) => ({ movies: state.movies.concat(movie) }));
  }

  renderMovieList(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let moviesArray = movies;
    if (bookmarkedOnly === 'checked') {
      moviesArray = moviesArray.filter((movie) => movie.bookmarkedOnly === true);
    }
    if (selectedGenre.length > 0) {
      moviesArray = moviesArray.filter((movie) => movie.genre === selectedGenre);
      return moviesArray;
    }
    if (searchText.length > 0) {
      moviesArray = moviesArray.filter((movie) => {
        moviesArray = movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase());
        return moviesArray;
      });
    }
    return moviesArray;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.props;
    return (
      <div className="container">
        <SearchBar
          searchText={searchText}
          updateSearchText={(event) => this.updateSearchText(event)}
          bookmarkedOnly={bookmarkedOnly}
          updateBookMarkedOnly={(event) => this.updateBookMarkedOnly(event)}
          selectedGenre={selectedGenre}
          updateSelectedGenre={(event) => this.updateSelectedGenre(event)}
        />
        <MovieList movies={this.renderMovieList(movies)} />
        <AddMovie onClick={this.createMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};
export default MovieLibrary;
