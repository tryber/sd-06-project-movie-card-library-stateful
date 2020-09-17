import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.bookmarkedChange = this.bookmarkedChange.bind(this)
    this.selectedGenreChange = this.selectedGenreChange.bind(this)

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies
    }
  }

  handleChange({ target }) {
    this.setState({searchText: target.value})
  }

  bookmarkedChange() {
    this.setState({ bookmarkedOnly: true })
  }

  selectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value })
  }

  render() {
    const noClick = () => console.log('oi')
    console.log(this.props.movies.filter(e => e.title === this.state.searchText))
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.handleChange} bookmarkedOnly={this.state.bookmarkedOnly} 
        onBookmarkedChange={this.bookmarkedChange} selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.selectedGenreChange} />
        <MovieList movies={this.props.movies.filter(e => e.title === this.state.searchText)} />
        <AddMovie onClick={noClick}/>
      </div>
    );
  }
}

export default MovieLibrary;