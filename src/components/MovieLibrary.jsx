import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.refreshSearchText = this.refreshSearchText.bind(this);
    this.refreshBookmarkedOnly = this.refreshBookmarkedOnly.bind(this);
    this.refreshSelectedGenre = this.refreshSelectedGenre.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(newMovie) {
    this.setState({ movies: this.state.movies.concat(newMovie) });
  }

  refreshSelectedGenre(event) {
    this.setState({ selectedGenre: event.target.value }, () => {
      if (this.state.selectedGenre === '') {
        this.setState({ movies: this.props.movies });
      } else {
        const moviesGenre = this.props.movies.filter((movie) => (
          movie.genre === this.state.selectedGenre
        ));
        this.setState({ movies: moviesGenre });
      }
    });
  }

  refreshBookmarkedOnly(event) {
    this.setState({ bookmarkedOnly: event.target.checked }, () => {
      if (this.state.bookmarkedOnly === true) {
        const favoriteMovies = this.props.movies.filter((movie) => movie.bookmarked === true);
        this.setState({ movies: favoriteMovies });
      } else {
        this.setState({ movies: this.props.movies });
      }
    });
  }

  refreshSearchText(event) {
    this.setState({ searchText: event.target.value }, () => {
      const moviesFiltered = this.props.movies.filter((movie) => (
        movie.title.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        movie.subtitle.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        movie.storyline.toLowerCase().includes(this.state.searchText.toLowerCase())
      ));
      this.setState({ movies: moviesFiltered });
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.refreshSearchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.refreshBookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.refreshSelectedGenre}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
