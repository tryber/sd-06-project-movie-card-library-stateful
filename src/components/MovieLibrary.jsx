import React from 'react';
import propTypes from 'prop-types';
// import MovieList from './MovieList';
// import AddMovie from './AddMovie';
import SearchBar from './SearchBar';


class MovieLibrary extends React.Component {
  constructor() {
    super();
    const movies = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }
  render() {
    return (
      <div>
        <SearchBar 
        searchText={this.state.searchText} bookmarkedOnly={this.state.bookmarkedOnly}
        selectedGenre={this.state.selectedGenre}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.array.isRequired};

export default MovieLibrary;
