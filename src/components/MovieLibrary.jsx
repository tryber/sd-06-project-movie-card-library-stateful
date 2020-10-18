import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.searchTextChange = this.searchTextChange.bind(this);
    this.bookmarkedOnlyChange = this.bookmarkedOnlyChange.bind(this);
    this.selectedGenreChange = this.selectedGenreChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
    this.filterText = this.filterText.bind(this);
  }

  filterText() {
    const { movies, searchText } = this.state;
    const moviesSearch = movies.filter((movie) => movie.title.includes(searchText));
    this.setState({ movies: moviesSearch });
  }

  searchTextChange(event) {
    this.setState({ searchText: event.target.value }, () => this.filterText());
  }

  bookmarkedOnlyChange() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  selectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  newMovie(novoEstado) {
    this.setState({ movies: [...this.state.movies, novoEstado] });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.searchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.bookmarkedOnlyChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.selectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.newMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
