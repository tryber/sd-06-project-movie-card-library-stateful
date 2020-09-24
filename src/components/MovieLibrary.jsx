import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filteringFilmsTitle = this.filteringFilmsTitle.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClick(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.filteringFilmsTitle(name);
    });
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    const { name, checked } = target;
    this.setState({ [name]: checked }, () => {
      if (checked === true) {
        const checkMovies = movies
          .filter((movie) => movie.bookmarked === true);
        this.setState({ movies: checkMovies });
      } else {
        this.setState({ movies });
      }
    });
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      if (value !== '') {
        const checkMovies = movies
          .filter((movie) => movie.genre === value);
        this.setState({ movies: checkMovies });
      }
    });
  }

  filteringFilmsTitle() {
    const { searchText, movies } = this.state;
    const filteringFilm = movies
      .filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    this.setState({ movies: filteringFilm });
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
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
