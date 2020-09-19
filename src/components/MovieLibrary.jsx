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
    const arrayKeys = ['title', 'subtitle', 'storyline'];
    const key = target.id;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const movies = this.state.listMovies;
    this.setState({
      [key]: value,
      movies: key === 'searchText' && value !== '' ? 
      movies.filter(movie => arrayKeys.some(key2 => movie[key2].toUpperCase().includes(value.toUpperCase())))
      : target.type === 'checkbox' && value !== false ? movies.filter(movie => movie.bookmarked) 
      : key === 'selectedGenre' && value !== '' ? movies.filter(movie => movie.genre === value) 
      : movies,
    });
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
