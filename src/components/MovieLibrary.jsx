import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

/*  as funções de busca e filtragem inspiradas by Matheus Coutinho*/

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.filterBySearchText = this.filterBySearchText.bind(this);
    this.filterByBookedMarked = this.filterByBookedMarked.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    this.setState(() => {
      if (value !== '') {
        return {
          [name]: value,
          movies: this.filterByGenre(value),
        };
      }
      return {
        [name]: value,
        movies: this.props.movies,
      };
    });
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState(() => {
      if (value !== '') {
        return {
          [name]: value,
          movies: this.filterBySearchText(value),
        };
      }
      return {
        [name]: value,
        movies: this.props.movies,
      };
    });
  }

  onBookmarkedChange({ target }) {
    const { name, checked } = target;

    this.setState(() => {
      if (checked) {
        return {
          [name]: checked,
          movies: this.filterByBookedMarked(),
        };
      }
      return {
        [name]: checked,
        movies: this.props.movies,
      };
    });
  }

  onClick(newMovie) {
    this.setState({ movies: [...this.state.movies, newMovie] });
  }

  filterByGenre(value) {
    const filteredMovies = this.props.movies.filter((movie) =>
      movie.genre === value,
    );
    return filteredMovies;
  }

  filterBySearchText(value) {
    const filteredMovies = this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase()) ||
      movie.subtitle.toLowerCase().includes(value.toLowerCase()) ||
      movie.storyline.toLowerCase().includes(value.toLowerCase()),
    );
    return filteredMovies;
  }

  filterByBookedMarked() {
    const filteredMovies = this.state.movies.filter((movie) =>
      movie.bookmarked,
    );
    return filteredMovies;
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
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
