import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies: moviesList } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: moviesList,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectGenreChange = this.handleSelectGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleSearchChange({ target }) {
    const { name, value } = target;
    if (value !== '') {
      this.setState(() => ({
        [name]: value,
        movies: this.props.movies.filter((movie) => {
          const title = movie.title;
          const subtitle = movie.subtitle;
          const story = movie.storyline;
          return title.includes(value) || subtitle.includes(value) || story.includes(value);
        }),
        bookmarkedOnly: false,
        selectedGenre: '',
      }));
    } else {
      this.setState(() => ({
        [name]: value,
        movies: this.props.movies,
        bookmarkedOnly: false,
        selectedGenre: '',
      }));
    }
  }

  handleBookmarkedChange({ target }) {
    const { name, checked } = target;
    if (checked === true) {
      this.setState(() => ({
        [name]: checked,
        movies: this.props.movies.filter((movie) => movie.bookmarked === true),
        searchText: '',
        selectedGenre: '',
      }));
    } else {
      this.setState(() => ({
        [name]: checked,
        movies: this.props.movies,
        searchText: '',
        selectedGenre: '',
      }));
    }
  }

  handleSelectGenreChange({ target }) {
    const { name, value } = target;
    if (value !== '') {
      this.setState(() => ({
        [name]: value,
        movies: this.props.movies.filter((movie) => movie.genre === value),
        searchText: '',
        bookmarkedOnly: false,
      }));
    } else {
      this.setState(() => ({
        [name]: value,
        movies: this.props.movies,
        searchText: '',
        bookmarkedOnly: false,
      }));
    }
  }

  addNewMovie(newMovie) {
    this.setState(() => (this.state.movies.push(newMovie)));
  }

  render() {
    const hs = this.handleSearchChange;
    const hb = this.handleBookmarkedChange;
    const hg = this.handleSelectGenreChange;
    const ss = this.state.searchText;
    const sb = this.state.bookmarkedOnly;
    const sg = this.state.selectedGenre;
    return (
      <div>
        <SearchBar
          searchText={ss}
          onSearchTextChange={hs}
          bookmarkedOnly={sb}
          onBookmarkedChange={hb}
          selectedGenre={sg}
          onSelectedGenreChange={hg}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.defaultProps = { movies: [] };
MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };

