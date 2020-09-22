import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.UpdateProp = this.UpdateProp.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClick(movieToAdd) {
    const { subtitle, title, imagePath, storyline, rating, genre } = movieToAdd;
    const NEW_MOVIE = { subtitle, title, imagePath, storyline, rating, genre };
    this.setState((past) => ({ movies: [...past.movies, NEW_MOVIE] }));
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    console.log(value);
    this.setState((_, props) => value
      ? {
        movies: props.movies.filter((movie) =>
          movie.title.includes(value) || movie.subtitle.includes(value) || movie.storyline.includes(value))
      }
      : { movies: props.movies }
    );
    this.UpdateProp(false, '', value);
  }

  UpdateProp(bookmarkedOnly = false, selectedGenre = '', searchText = '') {
    this.setState({ searchText, selectedGenre, bookmarkedOnly, });
  }

  ResetAndFilter() {
    this.setState({ movies: this.props.movies }, () => {
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState((_, props) => value
      ? { movies: props.movies.filter((movie) => movie.genre === value) }
      : { movies: props.movies }
    );
    this.UpdateProp(false, value, '');
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState((_, props) => checked
      ? { movies: props.movies.filter((movie) => movie.bookmarked === checked) }
      : { movies: props.movies },
    );
    this.UpdateProp(checked, '', '');



    /* if (!checked) {
    } else {
      this.ResetAndFilter('bookmarked', checked, name);
    } */
    /* this.setState({ movies: movies.filter((movie) => movie.bookmarked === bookmarkedOnly) }); */
    // this.filterMovies();
  }

  /* filterMovies() {
    this.setState({ movies: this.props.movies });
    const { movies, bookmarkedOnly, selectedGenre } = this.state;
  } */

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange, onClick } = this;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={onSearchTextChange}
          searchText={searchText}
          onBookmarkedChange={onBookmarkedChange}
          bookmarkedOnly={bookmarkedOnly}
          onSelectedGenreChange={onSelectedGenreChange}
          selectedGenre={selectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={onClick} />
      </div >
    );
  }


  /* async insertMovie() {
    await recordData()
      .then(resetState());
  } */
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  /* 32: Arrow function used ambiguously with a conditional expression. [eslint]
35: Line 35 exceeds the maximum line length of 100. [eslint]
35: Missing trailing comma. [eslint]
37: Missing trailing comma. [eslint]
42: UpdateProp should be placed after onBookmarkedChange [eslint]
43: Unexpected trailing comma. [eslint]
53: Arrow function used ambiguously with a conditional expression. [eslint]
55: Missing trailing comma. [eslint]
62: Arrow function used ambiguously with a conditional expression. [eslint]
67: More than 2 blank lines not allowed. [eslint] */
};

export default MovieLibrary;
