import React from 'react';
import propTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(newMovie) {
    this.setState({ movies: this.state.movies.concat(newMovie) });
  }

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ [name]: value }, () => { this.filteringChange(); });
  }

  filteringChange() {
    let moviesFiltered = this.props.movies;

    if (this.state.bookmarkedOnly === true) {
      moviesFiltered = moviesFiltered.filter((movie) => movie.bookmarked === true);
    } else {
      moviesFiltered = this.props.movies;
    }

    if (this.state.selectedGenre !== '') {
      moviesFiltered = moviesFiltered.filter((movie) => movie.genre === this.state.selectedGenre);
    }

    if (this.state.searchText !== '') {
      moviesFiltered = moviesFiltered.filter((movie) =>
        movie.title.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        movie.subtitle.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        movie.storyline.toLowerCase().includes(this.state.searchText.toLowerCase()));
    }

    this.setState({ movies: moviesFiltered });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText} onSearchTextChange={this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.handleChange}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.handleChange}
        />
        <AddMovie onClick={this.handleClick} />
        <MovieList movies={movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.objectOf).isRequired };

export default MovieLibrary;
