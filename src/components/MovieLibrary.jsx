import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(newMovieCard) {
    this.setState((prevState) => ({ movies: [...prevState.movies, newMovieCard] }));
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filteredMovies = (value.length !== 0)
      ? movies.filter((movie) => {
        const filter = movie.title.toLowerCase().includes(value)
          || movie.subtitle.toLowerCase().includes(value)
          || movie.storyline.toLowerCase().includes(value);
        return filter;
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
    const filterFav = (checked) ? movies.filter((movie) => movie.bookmarked) : movies;
    this.setState({
      bookmarkedOnly: checked,
      movies: filterFav,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filterGen = (value !== ' ') ? movies.filter((movie) => movie.genre === value) : movies;
    this.setState({
      selectedGenre: value,
      movies: filterGen,
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
