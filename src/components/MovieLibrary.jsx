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
      movies: props.movies,
    }
  }
  handleChange({ target }) {
    // console.log('camou')
    const arrayKeys = ['title', 'subtitle', 'storyline'];
    const key = target.id;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // if (this.state.bookmarkedOnly) {
      this.setState((_estadoAnterior, _props) => ({
        [key]: value,
        movies: key === 'searchText' ? this.props.movies.filter(movie => {
          const booleano = arrayKeys.some(key => movie[key] === value)
          console.log(this.state.searchText)
          console.log('booleano')
          // console.log(booleano)
          return booleano;
        }) : this.state.movies,
      }));
    // } else {
    //   this.setState({ [key]: value });
    // }
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
