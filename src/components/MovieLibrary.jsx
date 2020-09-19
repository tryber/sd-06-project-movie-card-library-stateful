import React from 'react';
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    // const movies = this.props.movies;
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
      listMovies: this.props.movies,
    }
  }
  handleChange({ target }) {
    const key = target.id;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const movies = this.state.listMovies;
    const type = target.type
    this.setState({
      [key]: value,
      movies: this.moviesConditioned(key, value , type, movies),
    });
  }
  moviesConditioned(key, value, type, movies) {
    const arrayKeys = ['title', 'subtitle', 'storyline'];
    const valueMovies = key === 'searchText' && value !== '' ? 
    movies.filter(movie => arrayKeys.some(key2 => movie[key2].toUpperCase().includes(value.toUpperCase())))
    : type === 'checkbox' && value !== false ? movies.filter(movie => movie.bookmarked) 
    : key === 'selectedGenre' && value !== '' ? movies.filter(movie => movie.genre === value) 
    : movies
    return valueMovies;
  }
  onClick(stateAddMovie) {
    const newMovie = this.state.listMovies.concat(stateAddMovie);
    this.setState({
      movies: newMovie,
      listMovies: newMovie,
    })
  }
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={this.state.searchText}
        onSearchTextChange={this.handleChange}
        bookmarkedOnly={this.state.bookmarkedOnly}
        onBookmarkedChange={this.handleChange}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={this.handleChange} 
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
