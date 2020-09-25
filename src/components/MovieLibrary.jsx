/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';


export default class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.filteredCheckBox = this.filteredCheckBox.bind(this);
    this.filteredGenre = this.filteredGenre.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
    // this.filteredText(this.state.searchText);
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
    this.filteredGenre(this.state.bookmarkedOnly);
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
    this.filteredGenre(this.state.selectedGenre);
  }

  filteredText(filter) {
    const { movies } = this.props;
    this.setState({
      movies: movies.filter((movie) => {
        const { title, subtitle, storyline } = movie;
        return (title.includes(filter) || subtitle.includes(filter) || storyline.includes(filter));
      }).map((movie) => movie),
    });
  }

  filteredGenre(event) {
    const { movies } = this.props;
    if (event === '') {
      this.setState({ movies: this.props.movies });
    } else {
      this.setState({
        movies: movies
          .filter((movie) => movie.genre === event)
          .map((movie) => movie),
      });
    }
  }


  filteredCheckBox(event) {
    const { movies } = this.props;
    this.setState({
      movies: movies
        .filter((movie) => movie.checkbox === event)
        .map((movie) => movie),
    });
  }

  addMovie(stateDoAddMovie) {
    const { movies } = this.props;
    movies.push(stateDoAddMovie);
    this.setState({ movies });
  }

  render() {
    const { searchText, bookmarkedOnly } = this.state;
    const { onSearchTextChange } = this;
    const filteredMovies = this.props.movies
      .filter((movie) => (movie.title.toLowerCase().indexOf(this.state.searchText) !== -1
  || movie.subtitle.toLowerCase().indexOf(this.state.searchText) !== -1
  || movie.storyline.toLowerCase().indexOf(this.state.searchText) !== -1));
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />

        <div data-testid="movie-list" className="movie-list">
          {filteredMovies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        {/* <MovieList movies={this.props.movies} /> */}
        <AddMovie
          onClick={(stateDoAddMovie) => this.addMovie(stateDoAddMovie)}
          movies={this.state.movies}
        />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  filter: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
