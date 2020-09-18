// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }
  }

  onSearchTextChange(event) {
    this.setState({searchText: event.target.value})
  }

  onBookmarkedChange(event) {
    this.setState({bookmarkedOnly: event.target.value})
  }

  onSelectedGenreChange(event) {
    this.setState({selectedGenre: event.target.value})
  }

  onClick() {

  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.onSearchTextChange} bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.onBookmarkedChange} selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.onSelectedGenreChange}/>
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.onClick}/>
      </div>
    );
  }
}

export default MovieLibrary;