import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchtext: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies:
    }
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library</h2>
        <SearchBar />
        <MovieList movies={this.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
