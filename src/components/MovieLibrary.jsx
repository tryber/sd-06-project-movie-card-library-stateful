import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';


class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }
  };
  render() {
    const movies = this.props;
    return (
      <SearchBar
      searchText={this.state.searchText}
      bookmarkedOnly={this.state.bookmarkedOnly}
      />
    ) 
  }
} 
