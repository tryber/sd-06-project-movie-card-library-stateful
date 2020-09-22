import React from 'react';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleState = this.handleState.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleAddMovie(newMovie) {
    console.log(newMovie);
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  handleState(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ [name]: value }, () => {
      this.handleFilter();
    });
  }

  handleFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let moviesArray = movies;

    if (bookmarkedOnly) {
      moviesArray = moviesArray.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre) {
      moviesArray = moviesArray.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText) {
      moviesArray = moviesArray.filter((movie) => movie.title.toLowerCase()
        .includes(searchText.toLowerCase()) || movie.subtitle.toLowerCase()
        .includes(searchText.toLowerCase()) || movie.storyline.toLowerCase()
        .includes(searchText.toLowerCase()));
    }
    this.setState({ movies: moviesArray });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleState}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleState}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleState}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;
