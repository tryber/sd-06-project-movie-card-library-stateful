// implement MovieLibrary component here
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
      <SearchBar searchText={this.state.searchText} bookmarkedOnly={this.state.bookmarkedOnly}
      onSearchTextChange={} onBookmarkedChange={} selectedGenre={this.state.selectedGenre}
      onSelectedGenreChange={}
      />
      <MovieList movies={this.state.movies}
      />
      <AddMovie onClick={} />
      </div>
    ) 
  }
}

export default MovieLibrary;
