import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const  { movies } = this.props
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
        movies={movies}
        // searchText = {() => console.log('oi') }
        // onSearchTextChange = {() => }
        // bookmarkedOnly = {() => }
        // onBookmarkedChange = {() => }
        // selectedGenre = {() => }
        // onSelectedGenreChange = {() => }        
        />
        
        <MovieList movies={movies} />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;