import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.bookMark = this.bookMark.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
    this.searchForText = this.searchForText.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onClick(state) {
    this.setState({ movies: this.state.movies.concat(state) });
  }
  bookMark({ target }) {
    const { movies } = this.props;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      if (this.state.bookmarkedOnly === true) {
        this.setState({ movies: movies.filter((movie) => movie.bookmarked === true) });
      } else {
        this.setState({ [movies]: movies });
      }
    });
  }
  genreFilter({ target }) {
    const { movies } = this.props;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      if (this.state.selectedGenre.length > 0) {
        this.setState({
          movies: movies
          .filter((movie) => movie.genre === this.state.selectedGenre),
        });
      } else {
        this.setState({ [movies]: movies });
      }
    });
  }
  searchForText({ target }) {
    const { movies } = this.props;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      if (this.state.searchText.length > 0) {
        this.setState({
          movies: movies.filter((movie) => movie.title.includes(this.state.searchText) ||
          movie.subtitle.includes(this.state.searchText) ||
          movie.storyline.includes(this.state.searchText)),
        });
      } else {
        this.setState({ [movies]: movies });
      }
    });
  }
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText} onSearchTextChange={this.searchForText}
          bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.bookMark}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.genreFilter}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} movies={this.props} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
