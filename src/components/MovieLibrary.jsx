import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    // this.updateSearchText = this.updateSearchText.bind(this);
    // this.updateBookMarkedOnly = this.updateBookMarkedOnly.bind(this);
    // this.updateSelectedGenre = this.updateSelectedGenre.bind(this);
    // this.renderMovieList = this.renderMovieList.bind(this);
    // this.createMovie = this.createMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createMovie = this.createMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => { this.renderMovieList(); });
  }

  createMovie(addMovie) {
    this.setState({ movies: this.state.movies.concat(addMovie) });
  }


  // updateSearchText({ target }) {
  //   const { value } = target;
  //   this.setState(() => ({ searchText: value }));
  // }

  // updateBookMarkedOnly({ target }) {
  //   const { value } = target;
  //   this.setState(() => ({ bookmarkedOnly: value }));
  // }

  // updateSelectedGenre({ target }) {
  //   const { value } = target;
  //   this.setState(() => ({ selectedGenre: value }));
  // }

  renderMovieList() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let moviesArray = this.props.movies;
    if (bookmarkedOnly === true) {
      moviesArray = moviesArray.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre.length > 0) {
      moviesArray = moviesArray.filter((movie) => movie.genre === selectedGenre);
      // return moviesArray;
    }
    if (searchText.length > 0) {
      moviesArray = moviesArray.filter((movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }
    this.setState({ movies: moviesArray });
    // return moviesArray;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.state;
    return (
      <div className="container">
        <h2>My awesome movie Library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChange}
          // updateSearchText={(event) => this.updateSearchText(event)}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          // updateBookMarkedOnly={(event) => this.updateBookMarkedOnly(event)}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChange}
          // updateSelectedGenre={(event) => this.updateSelectedGenre(event)}


          // <SearchBar
          // searchText={this.state.searchText}
          // onSearchTextChange={this.handleChange}
          // bookmarkedOnly={this.state.bookmarkedOnly}
          // onBookmarkedChange={this.handleChange}
          // selectedGenre={this.state.selectedGenre}
          // onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.createMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
  // searchText: PropTypes.string.isRequired,
  // bookmarkedOnly: PropTypes.string.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
};
export default MovieLibrary;
