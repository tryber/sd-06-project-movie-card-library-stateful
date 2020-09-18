import React from 'react';
import movies from '../data';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.refreshSearchText = this.refreshSearchText.bind(this);
    this.refreshBookmarkedOnly = this.refreshBookmarkedOnly.bind(this);
    this.refreshSelectedGenre = this.refreshSelectedGenre.bind(this);
  }  

  refreshBookmarkedOnly(event) {
    this.setState({ bookmarkedOnly: event.target.checked }, () => {
      if (this.state.bookmarkedOnly === true) {
        const favoriteMovies = movies.filter((movie) => movie.bookmarked === true);
        this.setState({ movies: favoriteMovies });
      } else {
        this.setState({ movies });
      }
    });
  }

  refreshSelectedGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  // onClick() {

  // }

  refreshSearchText(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.refreshSearchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.refreshBookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.refreshSelectedGenre}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
