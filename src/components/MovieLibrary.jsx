import React from 'react';
import PropTypes from 'prop-types';
// import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
  }

  inputHandler({ target }) {
    this.setState({ searchText: target.value });
  }

  selectHandler({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  checkHandler({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  filterBookmarked(movies, bookmarked) {
    if (bookmarked) {
      return movies.filter(movie => movie.bookmarked);
    }
    return movies;
  }

  filterGenre(movies, genre) {
    if (genre !== '') {
      return movies.filter(movie => movie.genre === genre);
    }
    return movies;
  }

  filterText(movies, text) {
    lowText = text.toLowerCase();
    if (lowText !== '') {
      return movies.filter((movie) => (
          movie.title.toLowerCase().search(lowText)
          + movie.subtitle.toLowerCase().search(lowText)
          + movie.storyline.toLowerCase().search(lowText)
            > -1
      ));
    }
    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let movies = this.state.movies;
    movies = this.filterBookmarked(movies, bookmarkedOnly);
    movies = this.filterGenre(movies, selectedGenre);
    movies = this.filterText(movies, searchText);
    return (
      <section>
        <SearchBar
          searchText={searchText} onSearchTextChange={this.inputHandler}
          bookmarkedOnly={bookmarkedOnly} onBookmarkedChange={this.checkHandler}
          selectedGenre={selectedGenre} onSelectedGenreChange={this.selectHandler}
        />
        <MovieList movies={movies} />
        {/* <AddMovie /> */}
      </section>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
