import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import movies from '../data'

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    }
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChanges}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChanges}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChanges}
        />
        <AddMovie />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MovieLibrary;
