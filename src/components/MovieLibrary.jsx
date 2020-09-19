import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleSearchText({ target }) {
    const { value } = target;
    this.setState(() => ({
      searchText: value,
      movies: this.props.movies.filter(movie =>
        movie.title.includes(value) || movie.subtitle.includes(value) || movie.storyline.includes(value)
      )
    }));
  }
  
  handleBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
      movies: checked ?
        this.props.movies.filter(movie => movie.bookmarked) :
        this.props.movies
    });
  }
  
  handleSelectedGenre({ target }) {
    const { value } = target;
    console.log(value)
    this.setState({
      selectedGenre: value,
      movies: value === '' ?
      this.props.movies :
      this.props.movies.filter(movie => movie.genre === value)
    });
  }

  handleAddMovie(movie) {
    this.setState({ movies: this.state.movies.concat(movie) });
  }
  
  render() {
    return (
      <div>
        <SearchBar
          onSearchTextChange={this.handleSearchText}
          onBookmarkedChange={this.handleBookmarkedChange}
          onSelectedGenreChange={this.handleSelectedGenre}
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.array.isRequired };

export default MovieLibrary;
