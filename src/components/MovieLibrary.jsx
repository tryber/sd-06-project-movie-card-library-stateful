import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
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

  // Função explicada pela Letícia Bora ao colega Tiago com quem fiz pair programming deste projeto
  filteringOnChange() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filtered = movies;
    if (searchText) {
      filtered = movies
        .filter((movie) => movie.title.toUpperCase()
          .includes(searchText.toUpperCase()) || movie.subtitle.toUpperCase()
          .includes(searchText.toUpperCase()) || movie.storyline.toUpperCase()
          .includes(searchText.toUpperCase()));
    }
    if (bookmarkedOnly) {
      filtered = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      filtered = movies.filter((movie) => movie.genre === selectedGenre);
    }
    return filtered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          onBookmarkedChange={(e) => this.setState({ bookmarkedOnly: e.target.checked })}
          onSelectedGenreChange={(e) => this.setState({ selectedGenre: e.target.value })}
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
        />
        <AddMovie />
        <MovieList movies={this.filteringOnChange()} />
      </>
    );
  }
}
export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(Object).isRequired };
