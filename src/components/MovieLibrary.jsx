import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.myOnClick = this.myOnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange({ target }) {
    this.handleChange(target);
  }

  onBookmarkedChange({ target }) {
    this.handleChange(target);
  }

  onSelectedGenreChange({ target }) {
    this.handleChange(target);
  }

  handleChange(target) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  myOnClick() {
    console.log('teste');
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onBookmarkedChange={this.onBookmarkedChange}
          onSearchTextChange={this.onSearchTextChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />,
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.myOnClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.shape.isRequired };

export default MovieLibrary;
