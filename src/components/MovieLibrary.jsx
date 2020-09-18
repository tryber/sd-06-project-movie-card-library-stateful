import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }
  render() {
    return (
      <div>
        <SearchBar searchText={this.searchText}
        bookmarkedOnly={this.bookmarkedOnly} selectedGenre={this.selectedGenre} 
        />
        <AddMovie />
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default MovieLibrary;
