import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar />
        <MovieList movies={movies}/>
        <AddMovie />
      </div>
    );
  }
}
