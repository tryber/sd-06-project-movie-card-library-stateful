import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.handleFiltering = this.handleFiltering.bind(this);
    this.saveState = this.saveState.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
      baseMovies: [],
    };
  }

  componentDidMount() {
    const { movies } = this.props;

    this.saveState(movies);
  }

  saveState(movies) {
    this.setState({
      movies,
      baseMovies: movies,
    });
  }

  async handleFiltering({ target }) {
    const { name, value, checked, type } = target;

    if (type === 'checkbox') {
      await this.setState({ [name]: checked });
    } else {
      await this.setState({ [name]: value });
    }

    const { baseMovies, bookmarkedOnly, selectedGenre, searchText } = this.state;

    let filteredMovies = baseMovies;

    filteredMovies = filteredMovies.filter((movie) => (
      bookmarkedOnly ? (movie.bookmarked === bookmarkedOnly) : true
    ));


    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText) {
      const pattern = new RegExp(searchText, 'i');

      filteredMovies = filteredMovies.filter((movie) => (
        movie.title.match(pattern)
          || movie.subtitle.match(pattern)
          || movie.storyline.match(pattern)
      ));
    }

    this.setState({ movies: filteredMovies });
  }


  handleAddMovie(movie) {
    const { movies } = this.props;
    const newCollection = [...movies, movie];

    this.setState({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: newCollection,
      baseMovies: newCollection,
    });
  }


  render() {
    const values = this.state;

    return (
      <div>
        <SearchBar
          searchText={values.searchText}
          bookmarkedOnly={values.bookmarkedOnly}
          selectedGenre={values.selectedGenre}
          onSearchTextChange={this.handleFiltering}
          onBookmarkedChange={this.handleFiltering}
          onSelectedGenreChange={this.handleFiltering}
        />

        <MovieList
          movies={values.movies}
        />

        <AddMovie
          onClick={this.handleAddMovie}
        />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
    bookmarked: PropTypes.bool,
  })).isRequired,
};
