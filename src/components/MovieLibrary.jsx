import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleTextChange({ target }) {
    const value = target.value;
    this.setState({
      searchText: target.value,
      movies: this.props.movies.filter((movie) =>
        movie.title.includes(value) ||
        movie.subtitle.includes(value) ||
        movie.storyline.includes(value)),
    });
  }

  handleBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.value,
      movies: this.props.movies.filter((movie) => movie.bookmarked === true),
    });
  }

  handleSelectedGenreChange({ target }) {
    this.setState({ movies: this.props.movies.filter((movie) => movie.genre === target.value) });
  }

  handleClick(value) {
    this.setState({ movies: this.state.movies.concat(value) });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <AddMovie onClick={this.handleClick} />
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleSelectedGenreChange}
        />
        <MovieList movies={movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
