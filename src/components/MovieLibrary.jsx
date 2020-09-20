import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
