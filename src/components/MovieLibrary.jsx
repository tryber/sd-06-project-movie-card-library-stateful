import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClick() {
    return ('');
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filteredMovies = (value.length !== 0)
      ? movies.filter((movie) => {
        const bool = movie.title.includes(value)
          || movie.subtitle.includes(value)
          || movie.storyline.includes(value);
        return bool;
      })
      : movies;

    this.setState({
      searchText: value,
      movies: filteredMovies,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { movies } = this.state;
    const filteredMovies = (checked) ? movies.filter((movie) => movie.bookmarked) : movies;

    this.setState({
      bookmarkedOnly: checked,
      movies: filteredMovies,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filteredMovies = (value !== '') ? movies.filter((movie) => movie.genre === value) : movies;

    this.setState({
      selectedGenre: value,
      movies: filteredMovies,
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <MovieList movies={movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
