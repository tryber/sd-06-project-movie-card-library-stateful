// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.filteringOnChange = this.filteringOnChange.bind(this);
    this.refresh = this.refresh.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

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

  refresh() {
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          onBookmarkedChange={(e) => this.setState({ bookmarkedOnly: e.target.checked })}
          onSelectedGenreChange={(e) => this.setState({ selectedGenre: e.target.value })}
        />
        <AddMovie />
        <MovieList
          movies={this.filteringOnChange()}
        />

      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.Object).isRequired };
