import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.listFilterText = this.listFilterText.bind(this);
    this.listFilterBookmarked = this.listFilterBookmarked.bind(this);
    this.listFilterGenre = this.listFilterGenre.bind(this);
    this.onClickAddMovie = this.onClickAddMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClickAddMovie() {

  }

  onSearchTextChange({ target: { value } }) {
    this.setState(() => ({ searchText: value }));
    this.listFilterText(this.state.searchText);
  }

  onBookmarkedChange({ target: { checked } }) {
    this.setState({ bookmarkedOnly: checked });
    this.listFilterBookmarked(this.state.bookmarkedOnly);
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({ selectedGenre: value });
    this.listFilterGenre(this.state.selectedGenre);
  }

  listFilterText(filter) {
    const { movies } = this.props;
    this.setState({ movies: movies.filter((movie) => {
      const { title, subtitle, storyline } = movie;
      return (title.includes(filter) || subtitle.includes(filter) || storyline.includes(filter));
    }).map((movie) => movie) });
  }

  listFilterBookmarked(filter) {
    const { movies } = this.props;
    this.setState({ movies: movies
      .filter((movie) => movie.bookmarked === filter)
      .map((movie) => movie) });
  }

  listFilterGenre(filter) {
    const { movies } = this.props;
    if (filter === '') {
      this.setState({ movies: movies });
    } else {
      this.setState({ movies: movies
        .filter((movie) => movie.genre === filter)
        .map((movie) => movie) });
    }
  }

  render() {
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange, onClickAddMovie } = this;
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <MovieList movies={movies} />
        <SearchBar
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={onSelectedGenreChange}
        />
        <AddMovie onClick={onClickAddMovie} />
      </div>
    );
  }
}

MovieLibrary.PropTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieLibrary;
