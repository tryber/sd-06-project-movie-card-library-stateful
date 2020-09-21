import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filteringCategory = this.filteringCategory.bind(this);
    this.filteringFavorites = this.filteringFavorites.bind(this);
    this.filteringMovies = this.filteringMovies.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClick(movie) {
    console.log(movie);
    this.setState({ movies: [...this.state.movies, movie] })
  };

  onSearchTextChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
    this.filteringMovies();
  }

  onBookmarkedChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
    this.filteringFavorites();
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
    this.filteringCategory();
  }

  filteringMovies() {
    const { movies, searchText } = this.state;
    const newMovies = (movies.filter((movie) => (
    movie.title.includes(searchText) ||
     movie.subtitle.includes(searchText) ||
     movie.storyline.includes(this.state.searchText))));
    this.setState({ movies: newMovies });
  }

  filteringCategory() {
    const { movies } = this.state;
    const newCategory = (movies.filter((movie) => movie.genre === this.state.selectedGenre));
    this.setState({ movies: newCategory });
  }

  filteringFavorites() {
    const { movies } = this.state;
    const newFavorites = (movies.filter((movie) => movie.bookmarked === this.state.bookmarkedOnly));
    this.setState({ movies: newFavorites });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          selectedGenre={selectedGenre}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          onSearchTextChange={this.onSearchTextChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.onClick}/>
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(Object).isRequired };

export default MovieLibrary;
