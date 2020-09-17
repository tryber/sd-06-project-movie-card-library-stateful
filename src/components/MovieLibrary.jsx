import React from 'react';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super()
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.listFilter = this.listFilter.bind(this);
    this.onClickAddMovie = this.onClickAddMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    }
  }

  listFilter(criteria, filter) {
    const { state } = this;
    console.log(filter);
    const filteredMovies = state.movies.filter(movie => movie[criteria].includes(filter)).map(movie => movie);
    console.log(filteredMovies);
  }

  onSearchTextChange({ target: { value } }) {
    this.setState(() => ({ searchText: value }));
    this.listFilter('title', this.state.searchText);
  }

  onBookmarkedChange({ target: { checked } }) {
    this.setState({ bookmarkedOnly: checked });
    this.listFilter('bookmarked', this.state.bookmarkedOnly);
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({ selectedGenre: value });
    this.listFilter('genre', this.state.selectedGenre);
  }

  onClickAddMovie() {

  }

  render() {
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange, onClickAddMovie,
      state: { searchText, bookmarkedOnly, selectedGenre, movies, } } = this;
    return (
    <div>
      <MovieList movies={movies} />
      <SearchBar
        searchText={searchText}
        onSearchTextChange={onSearchTextChange}
        bookmarkedOnly={bookmarkedOnly}
        onBookmarkedChange={onBookmarkedChange}
        selectedGenre={selectedGenre}
        onSelectedGenreChange={onSelectedGenreChange}
      />
      <AddMovie onClick={onClickAddMovie}/>
    </div>
  )}
}

export default MovieLibrary;
