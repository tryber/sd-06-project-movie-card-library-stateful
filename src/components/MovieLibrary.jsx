// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMoviesByTitle = this.filterMoviesByTitle.bind(this);
    this.onclick = this.onclick.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }
  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value }, () => {
      const filterMovies = this.state.movies.filter((movie) =>
      movie.title.includes(this.state.searchText) ||
      movie.subtitle.includes(this.state.searchText) ||
      movie.storyline.includes(this.state.searchText));
      this.setState({ movies: filterMovies });
    });
  }
  onBookmarkedChange({ target }) {
    const { name, checked } = target;
    this.setState({ [name]: checked }, () => {
      const bookMarked = this.state.movies.filter((movie) =>
      movie.bookmarked === this.state.bookmarkedOnly);
      if (this.state.bookmarkedOnly) {
        this.setState({ movies: bookMarked });
      } else {
        const { movies } = this.props;
        this.setState({ movies });
      }
    });
  }
  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      if (this.state.selectedGenre !== '') {
        const genreMovies = this.state.movies.filter((movie) =>
        movie.genre === this.state.selectedGenre);
        this.setState({ movies: genreMovies });
      } else {
        const { movies } = this.props;
        this.setState({ movies });
      }
    });
  }
  onclick(addMovie) {
    const listFil = this.state.movies;
    this.setState({ movies: listFil.concat(addMovie) });
  }
  filterMoviesByTitle(value) {
    const filter = this.props.movies.filter((filterObj) => filterObj.title === value);
    return filter;
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onclick} />
      </div>
    );
  }
}
MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
export default MovieLibrary;
