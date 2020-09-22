import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
      const filteredMovies = movies.filter(movie => { if(bookmarkedOnly) movie.bookmarked; })
      .filter(movie => movie.genre === selectedGenre)
      .filter(movie => {
        if (searchText !== '') {
          movie.title.toLowerCase().includes(searchText.toLowerCase()) ||
          movie.subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
          movie.storyline.toLowerCase().includes(searchText.toLowerCase())
        }
      });

    this.setState({ movies: filteredMovies });
    })
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;

    return (
      <section>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={movies} />
      </section>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf() };
MovieLibrary.defaultProps = { movies: [] };

export default MovieLibrary;
