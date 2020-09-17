
import React, { Component } from 'react';

// import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor() {
  //   super();
    // this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    // this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  // }

  // onSearchTextChange() {
  // }
  // onBookmarkedChange() {
  // }
  // onSelectedGenreChange() {

  // }
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={'text'}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={'true'}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={'Genre'}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />,
        {/* <MovieList movies={this.props.movies} />
        <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;
