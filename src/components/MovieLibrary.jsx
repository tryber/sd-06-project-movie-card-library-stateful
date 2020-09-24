// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handlerChangeSearchText = this.handlerChangeSearchText.bind(this);
    this.handlerChangeBookmarkedOnly = this.handlerChangeBookmarkedOnly.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: movies.concat(newMovie) });
  }

  handlerChangeSearchText(event) {
    this.setState({ searchText: event.target.value }, () => {
      const { movies } = this.props;
      const { searchText } = this.state;
      const filterMovies = movies.filter((movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase()) ||
        movie.subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
        movie.storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
      this.setState({ movies: filterMovies });
    });
  }

  handlerChangeBookmarkedOnly(event) {
    this.setState({ bookmarkedOnly: event.target.checked }, () => {
      const { movies } = this.props;
      const { bookmarkedOnly } = this.state;
      if (bookmarkedOnly === true) {
        const favoriteMovies = movies.filter((movie) => movie.bookmarked === true);
        this.setState({ movies: favoriteMovies });
      } else {
        this.setState({ movies: { movies } });
      }
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handlerChangeSearchText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handlerChangeBookmarkedOnly}
          selectedGenre={selectedGenre}
          // onSelectedGenreChange=
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
