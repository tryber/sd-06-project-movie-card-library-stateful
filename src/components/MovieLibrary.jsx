import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  render() {
    // const { movies } = this.props;
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

MovieLibrary.defaultProps = { movies: '' };

MovieLibrary.propTypes = { movies: PropTypes.string };

export default MovieLibrary;
