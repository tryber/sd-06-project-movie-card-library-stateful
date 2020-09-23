import React from 'react';
import Proptypes from 'prop-types';

import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList';
// import movies from '../data.js';

class MovieLibrary extends React.Component {

  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  onSearchTextChange(event) {
    // const keys = Object.keys(this.props.movies[0]);

    this.setState({
      movies: this.props.movies.filter((movie) => {
        if (
          movie.title.includes(event.target.value) ||
          movie.subtitle.includes(event.target.value) ||
          movie.storyline.includes(event.target.value)
        ) {
          return movie;
        }
        return null;
      }),
    });
  }

  onBookmarkedChange() {
    this.setState({ movies: this.state.movies.filter((movie) => movie.bookmarked === true) });
  }

  async onSelectedGenreChange(event) {
    this.setState({
      movies: this.props.movies
        .filter((movie) => movie.genre.includes(event.target.value)),
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: Proptypes.arrayOf(Proptypes.object).isRequired };

export default MovieLibrary;
