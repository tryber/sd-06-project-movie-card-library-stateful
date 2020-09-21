// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSaveMovie = this.onSaveMovie.bind(this);
    this.OnSearchMovieBar = this.OnSearchMovieBar.bind(this);
    this.OnSearchMovieGenre = this.OnSearchMovieGenre.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
    this.OnSearchMovieBar(value);
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
    this.OnSearchMovieGenre(value);
  }

  onSaveMovie(obj) {
    this.setState((eA) => ({ movies: eA.movies.concat(obj) }));
  }

  OnSearchMovieBar(value) {
    const { movies } = this.props;
    if (value === '') {
      this.setState({ movies });
    } else {
      const moviesFiltered = movies.filter(movie => (
        movie.title.includes(value) ||
        movie.subtitle.includes(value) ||
        movie.storyline.includes(value)
      ));
      this.setState({ movies: moviesFiltered });
    }
  }

  OnSearchMovieGenre(value) {
    const { movies } = this.props;
    if (value === '') {
      this.setState({ movies });
    } else {
      const moviesFiltered = movies.filter(movie => movie.genre === value);
      this.setState({ movies: moviesFiltered });
    }
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
        <AddMovie onSaveMovie={this.onSaveMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(PropTypes.object)).isRequired,
};

export default MovieLibrary;
