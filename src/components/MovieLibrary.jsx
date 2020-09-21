import React from 'react';
import PropTypes from 'prop-types';
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

    this.buttonFunction = this.buttonFunction.bind(this);
    this.upDateBookmarked = this.upDateBookmarked.bind(this);
    this.upDateSelectedGenre = this.upDateSelectedGenre.bind(this);
  }

  buttonFunction(value) {
    this.setState({ movies: this.state.movies.concat(value) });
  }

  upDateBookmarked(event) {
    this.setState({ bookmarkedOnly: event.target.checked }, () => {
      if (this.state.bookmarkedOnly === true) {
        const favorites = this.props.movies.filter((movie) => movie.bookmarked === true);
        this.setState({ movies: favorites });
      } else {
        this.setState({ movies: this.props.movies });
      }
    });
  }

  upDateSelectedGenre(event) {
    this.setState({ selectedGenre: event.target.value }, () => {
      if (this.state.selectedGenre === '') {
        this.setState({ movies: this.props.movies });
      } else {
        const genre = this.props.movies.filter((movie) => (
          movie.genre === this.state.selectedGenre
        ));
        this.setState({ movies: genre });
      }
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.upDateBookmarked}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.upDateSelectedGenre}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.buttonFunction} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
