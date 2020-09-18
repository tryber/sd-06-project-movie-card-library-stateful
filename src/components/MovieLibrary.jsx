import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

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
    this.filterBookmarked = this.filterBookmarked.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.filterText = this.filterText.bind(this);
    this.addMovieBtn = this.addMovieBtn.bind(this);
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
      return movies.filter((movie) => movie.bookmarked);
    }
    return movies;
  }

  filterGenre(movies, genre) {
    if (genre !== '') {
      return movies.filter((movie) => movie.genre === genre);
    }
    return movies;
  }

  filterText(movies, text) {
    const lowText = text.toLowerCase();
    if (lowText !== '') {
      return movies.filter((movie) => {
        if (movie.title.toLowerCase().search(lowText) > -1) return true;
        if (movie.subtitle.toLowerCase().search(lowText) > -1) return true;
        if (movie.storyline.toLowerCase().search(lowText) > -1) return true;
        return false;
      });
    }
    return movies;
  }

  addMovieBtn(data) {
    const newMovie = {
      title: data.title,
      subtitle: data.subtitle,
      storyline: data.storyline,
      rating: data.rating,
      imagePath: data.imagePath,
      bookmarked: false,
      genre: data.genre,
    };
    const movies = this.state.movies;
    movies.push(newMovie);
    this.setState({ movies: movies });
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
        <AddMovie onClick={this.addMovieBtn} />
      </section>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
