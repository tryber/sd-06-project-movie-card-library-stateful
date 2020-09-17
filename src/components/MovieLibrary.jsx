import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies
    };

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onClick (estados) {
    console.log(estados);
  }

  onSearchTextChange () {

  }

  onBookmarkedChange () {
    this.setState((prevState, props) => (
      (!prevState.bookmarkedOnly)
      ? {
          bookmarkedOnly: true, 
          movies: prevState.movies.filter((movie) => movie.bookmarked)
        }
      : {
          bookmarkedOnly: false,
          movies: props.movies
        }
    ));
  }

  onSelectedGenreChange () {

  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick}/>
      </div>
    );
  }
}

export default MovieLibrary;
