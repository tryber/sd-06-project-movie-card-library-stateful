import React from 'react';
import Proptypes from 'prop-types';

import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList';
// import movies from '../data.js';
import AddMovie from './AddMovie.jsx';

class MovieLibrary extends React.Component {

  constructor(props) {
    super();

    // console.log(props.movies)
    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(event) {
    // const keys = Object.keys(this.props.movies[0]);

    this.setState({
      movies: this.state.movies.filter((movie) => {
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

  onClick(prop) {
    // this.state.movies.push(prop);
    console.log(this.props.movies);
    const newMovies = this.state.movies;
    newMovies.push(prop);

    this.setState({ movies: newMovies });
  }

  render() {
    return (
      <div>
        <AddMovie onClick={this.onClick} />
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
