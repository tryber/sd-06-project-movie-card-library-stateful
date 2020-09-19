import React from 'react';
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    // const movies = this.props.movies;
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }
  }
  handleChange({ target }) {
    const arrayKeys = ['title', 'subtitle', 'storyline'];
    const key = target.id;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [key]: value,
      movies: key === 'searchText' && value !== '' ? 
      this.props.movies.filter(movie => arrayKeys.some(key2 => value.split('').every((letter, index) => letter === movie[key2].split('')[index]))) 
      : this.props.movies,
    });
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
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
