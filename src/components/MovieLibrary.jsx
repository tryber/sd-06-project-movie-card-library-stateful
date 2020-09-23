import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.setState = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  render() {
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar />
        <AddMovie />
        {/*
        <MovieList movies={this.props.movies} />
        */}
      </div>
    );
  }
}

export default MovieLibrary;
