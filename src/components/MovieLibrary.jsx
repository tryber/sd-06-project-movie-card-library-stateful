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
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => { this.renderMovieList(); });
  }

  createMovie(addMovie) {
    this.setState({ movies: this.state.movies.concat(addMovie) });
  }


  updateSearchText({ target }) {
    const { value } = target;
    this.setState(() => ({ searchText: value }));
  }

  // updateBookMarkedOnly({ target }) {
  //   const { value } = target;
  //   this.setState(() => ({ bookmarkedOnly: value }));
  // }

  // updateSelectedGenre({ target }) {
  //   const { value } = target;
  //   this.setState(() => ({ selectedGenre: value }));
  // }

  renderMovieList() {
    // const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let moviesArray = this.props.movies;
    if (this.state.bookmarkedOnly === 'checked') {
      moviesArray = moviesArray.filter((movie) => movie.bookmarkedOnly === true);
    }
    if (this.state.selectedGenre.length > 0) {
      moviesArray = moviesArray.filter((movie) => movie.genre === this.state.selectedGenre);
      return moviesArray;
    }
    if (this.state.searchText.length > 0) {
      moviesArray = moviesArray.filter((movie) =>
        movie.title.toLowerCase().includes(this.state.searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(this.state.searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(this.state.searchText.toLowerCase()));
    }
    this.setState({ movies: moviesArray });
    return moviesArray;
  }

  render() {
    // const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    // const { movies } = this.state;
    return (
      <div className="container">
        <h2>My awesome movie Library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChange}
          // updateSearchText={(event) => this.updateSearchText(event)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookMarkedChange={this.handleChange}
          // updateBookMarkedOnly={(event) => this.updateBookMarkedOnly(event)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenteChange={this.handleChange}
          // updateSelectedGenre={(event) => this.updateSelectedGenre(event)}
        />
        <MovieList movies={this.state.movies} />
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
