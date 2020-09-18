import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';


class MovieLibrary extends React.Component {
  constructor() {
    const movies = this.props;
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    }
  };
  render() {
    return (
      <div>
      <SearchBar />
      <MovieList movies={this.state.movies} />
      <AddMovie />
      </div>
    ) 
  }
}

export default MovieLibrary;