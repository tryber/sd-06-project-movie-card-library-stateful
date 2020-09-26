import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }


  filterMovie() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    let newMovie = movies;
    if (searchText) {
      newMovie = newMovie.filter((movie) => movie.title.includes(searchText.toLowerCase())
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));

      if (bookmarkedOnly) {
        newMovie = newMovie.filter((movie) => movie.rating === bookmarkedOnly);
      }
      if (selectedGenre) {
        newMovie = newMovie.filter((movie) => movie.genre === selectedGenre);
      }
    }
    return newMovie;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          onBookmarkedChange={(e) => this.setState({ bookmarkedOnly: e.target.checked })}
          onSelectedGenreChange={(e) => this.setState({ selectedGenre: e.target.value })}
        />
        <MovieList movies={this.filterMovie()} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
