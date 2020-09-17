import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.filteredMovies = this.filteredMovies.bind(this);
    this.resetState = this.resetState.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      newMovies: movies, // Quando o valor e a key tem o mesmo nome.
    };
  }

  resetState(oldList) {
    this.setState({
      selectedGenre: '',
      newMovies: oldList,
    });
  }

  filteredMovies({ target }) {
    const { movies } = this.props;
    // this.resetState(movies);
    const e = target.value;
    // const { newMovies } = this.state;
    const newMoviesList = [];
    movies.filter((Movie) => (Movie.genre === e ? newMoviesList.push(Movie) : undefined));
    this.setState({ newMovies: newMoviesList });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, newMovies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() => this.setState({ bookmarkedOnly: !bookmarkedOnly })}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.filteredMovies(event)}
        />
        <MovieList movies={newMovies} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.string).isRequired };

export default MovieLibrary;
