// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import data from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: data,
    };
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onBookmarkedChange({ target }) {
    const { name, checked } = target;
    this.setState({ [name]: checked });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}

        />
        <MovieList
          movies={movies}
        />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
