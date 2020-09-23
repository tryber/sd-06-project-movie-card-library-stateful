import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleAddMovieClick = this.handleAddMovieClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.searchBarFilter = this.searchBarFilter.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  onBookmarkedChange({ target }) {
    const { value } = target;
    this.setState({ bookmarkedOnly: true });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  searchBarFilter() {
    const { movies, bookmarkedOnly, searchText, selectedGenre } = this.state;
    let filteredMovies = movies;
    if (bookmarkedOnly === true) {
      filteredMovies = filteredMovies.filter(movie => movie.bookmarked === bookmarkedOnly);
    }
    if (selectedGenre !== '') {
      filteredMovies = filteredMovies.filter(movie => movie.genre === selectedGenre);
    }
    filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(searchText.toLowerCase()));
    return filteredMovies;
  }

  handleAddMovieClick() {
    console.log('holdplace function');
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovies = this.searchBarFilter();
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={filteredMovies} />
        <AddMovie onClick={this.handleAddMovieClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf() }.isRequired;

export default MovieLibrary;
