import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';


class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
    const element = event.target.value;
    const { movies } = this.props;
    let filterMovies = movies;
    if (element !== '') {
      filterMovies = movies.filter((movie) => movie.genre === element);
    }
    this.setState({ movies: filterMovies });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
    const element = event.target.checked;
    const { movies } = this.props;
    let filterMovies = movies;
    if (element) {
      filterMovies = movies.filter((movie) => movie.bookmarked === true);
    }
    this.setState({ movies: filterMovies });
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
    const element = event.target.value;
    const { movies } = this.props;
    let filterMovies = movies;
    if (element.length !== '') {
      filterMovies = movies.filter((movie) => movie.title.includes(element)
        || movie.subtitle.includes(element)
        || movie.storyline.includes(element));
    }
    this.setState({ movies: filterMovies });
  }

  onClick(movie) {
    this.setState((previousState) => ({ movies: previousState.movies.concat(movie) }));
  }

  // ({ movies: [...previousState.movies, movie] }));

  render() {
    const { bookmarkedOnly, selectedGenre, searchText, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
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
