import React from 'react';
import propTypes from 'prop-types';
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
    this.updateSearchTextChange = this.updateSearchTextChange.bind(this);
    this.updateBookmarkedChange = this.updateBookmarkedChange.bind(this);
    this.updateSelectedGenreChange = this.updateSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  updateSearchTextChange(event) {
    this.setState({ searchText: event.target.value }, () => {
      const filterText = this.props.movies.filter((movie) => (
        movie.title.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        movie.subtitle.toLowerCase().includes(this.state.searchText.toLocaleLowerCase()) ||
        movie.storyline.toLowerCase().includes(this.state.searchText.toLocaleLowerCase())
      ));
      this.setState({ movies: filterText });
    });
  }

  updateBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked }, () => {
      if (this.state.bookmarkedOnly === true) {
        const filterFavorites = this.props.movies.filter((movie) => movie.bookmarked === true);
        this.setState({ movies: filterFavorites });
      } else {
        this.setState({ movies: this.props.movies });
      }
    });
  }

  updateSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value }, () => {
      if (this.state.selectedGenre === '') {
        this.setState({ movies: this.props.movies });
      } else {
        const filterGenre = this.props.movies.filter((movie) => (
          movie.genre === this.state.selectedGenre
        ));
        this.setState({ movies: filterGenre });
      }
    });
  }

  addMovie(newMovie) {
    this.setState({ movies: this.state.movies.concat(newMovie) })
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.updateSearchTextChange}
          onBookmarkedChange={this.updateBookmarkedChange}
          onSelectedGenreChange={this.updateSelectedGenreChange}
        />
        <MovieList
          movies={this.state.movies}
        />
        <AddMovie
          onClick={this.addMovie}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;
