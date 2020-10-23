/* eslint-disable react/prop-types */
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // bookmarkedOnly: false,
      movies: props.movies,
      searchText: '',
      // selectedGenre: '',
    };
  }

  render() {
    const { movies } = this.state;
    const { searchText } = this.state;

    return (
      <div>
        <h2>Movie Library</h2>
        <SearchBar
          searchText={searchText}
        />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MovieLibrary;
