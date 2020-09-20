import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.buttonFunction = this.buttonFunction.bind(this);
  }

  buttonFunction(value) {
    this.setState({ movies: this.state.movies.concat(value) });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.buttonFunction} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
