import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.handleValueChange = this.handleValueChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleValueChange({ target }) {
    const { name, value, type, checked } = target;

    if (type === 'checkbox') {
      this.setState({ [name]: checked });
      return;
    }

    this.setState({ [name]: value });
  }

  handleAddMovie(state) {
    console.log(state);
  }

  render() {
    const values = this.state;

    return (
      <>
        <SearchBar
          searchText={values.searchText}
          bookmarkedOnly={values.bookmarkedOnly}
          selectedGenre={values.selectedGenre}
          onSearchTextChange={this.handleValueChange}
          onBookmarkedChange={this.handleValueChange}
          onSelectedGenreChange={this.handleValueChange}
        />
        <AddMovie
          onClick={this.handleAddMovie}
        />
      </>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePage: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
