import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';


class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.handleUpdateState = this.handleUpdateState.bind(this);
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleUpdateState({ target }) {
    // console.log(target.value)
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleUpdateState}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleUpdateState}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleUpdateState}
        />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
