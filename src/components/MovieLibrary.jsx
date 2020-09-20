import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.handleText = this.handleText.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.onClickFunc = this.onClickFunc.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      newMovies: movies,
    };
  }

  onClickFunc(event) {
    const { movies } = this.props;
    if (event) {
      movies.push(event);
    }
    console.log(movies);
    this.setState({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      newMovies: movies,
    });
  }

  handleText({ target }) {
    const { movies } = this.props;
    const e = target.value;
    const newMoviesList = [];
    movies.filter((Movie) => (Movie.title.includes(e)
      || Movie.subtitle.includes(e)
      || Movie.storyline.includes(e)
      ? newMoviesList.push(Movie)
      : undefined));
    this.setState({
      searchText: e,
      newMovies: newMoviesList,
    });
  }

  handleFavorite() {
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    const newMoviesList = [];
    if (bookmarkedOnly === false) {
      movies.filter((Movie) => (Movie.bookmarked === true ? newMoviesList.push(Movie) : undefined));
      this.setState({
        bookmarkedOnly: true,
        selectedGenre: '',
        newMovies: newMoviesList,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
        selectedGenre: '',
        newMovies: movies,
      });
    }
  }

  handleGenre({ target }) {
    const { movies } = this.props;
    const e = target.value;
    const newMoviesList = [];
    movies.filter((Movie) => (Movie.genre === e || e === '' ? newMoviesList.push(Movie) : undefined));
    this.setState({
      bookmarkedOnly: false,
      selectedGenre: e,
      newMovies: newMoviesList,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, newMovies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.handleText(event)}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() => this.handleFavorite()}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.handleGenre(event)}
        />
        <MovieList movies={newMovies} />
        <AddMovie onClick={(event) => this.onClickFunc(event)} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
