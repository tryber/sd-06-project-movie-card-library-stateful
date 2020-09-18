import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }
  componentWillMount() {
    this.setState(({ movies: this.props.movies }));
  }
  
  onSearchTextChange({ target }) {
    this.setState(() => ({ searchText: target.value }));
  }

  onSelectedGenreChange({ target }) {
    this.setState(() => ({ selectedGenre: target.value }));
  }

  onBookmarkedChange({ target }) {
    this.setState(() => ({ bookmarkedOnly: target.checked }));
  }


  render() {
    return (
      <div>
        <SearchBar
      searchText={this.state.searchText}
      onSearchTextChange={this.onSearchTextChange}
      bookmarkedOnly={this.state.bookmarkedOnly}
      onBookmarkedChange={this.onBookmarkedChange}
      selectedGenre={this.state.selectedGenre}
      onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
