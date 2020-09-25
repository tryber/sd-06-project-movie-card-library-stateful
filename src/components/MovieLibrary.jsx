import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
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

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value }, () => {
      if (this.state.searchText === '') {
        this.setState({ movies: this.props.movies });
      } else {
        const textFiltered = this.props.movies.filter((movie) => movie.title.includes(target.value)
        || movie.subtitle.includes(target.value)
        || movie.storyline.includes(target.value));
        this.setState({ movies: textFiltered });
      }
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked }, () => {
      if (this.state.bookmarkedOnly === true) {
        const favoritesFiltered = this.props.movies.filter((movie) => movie.bookmarked === true);
        this.setState({ movies: favoritesFiltered });
      } else {
        this.setState({ movies: this.props.movies });
      }
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value }, () => {
      if (this.state.selectedGenre === '') {
        this.setState({ movies: this.props.movies });
      } else {
        const genreFiltered = this.props.movies.filter((movie) => movie.genre === target.value);
        this.setState({ movies: genreFiltered });
      }
    });
  }

  onClick(newMovie) {
    this.setState({ movies: this.state.movies.concat(newMovie) });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.searchText}
          bookmarkedOnly={this.bookmarkedOnly}
          selectedGenre={this.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <AddMovie onClick={this.onClick} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
