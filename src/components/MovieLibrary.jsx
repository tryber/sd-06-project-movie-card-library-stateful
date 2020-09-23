import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar />
        <MovieList movies={this.props.movies}/>
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.defaultProps = { moveis: {} };
MovieLibrary.propTypes = { movies: PropTypes.string };

export default MovieLibrary;
