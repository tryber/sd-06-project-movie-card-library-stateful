import React, {Component} from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import data from '../data'

class MovieLibrary extends Component {
  constructor() {
    super()
    this.state = {
      searchText:'',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: data
    }
  }

  handleTextChange = (event) => {
    
    this.setState(
      {searchText: event.target.value},
      () => {
        
        const filtered = data.filter(el => el.title === this.state.searchText);
        (this.state.searchText.trim() !== "") ? this.setState({movies: filtered}) : this.setState({movies: data})
        
      });
  };

  handleBookmarkedChange = () => {
    if (this.state.bookmarkedOnly === false) {
      this.setState(({bookmarkedOnly: true}))
      const markedData = this.state.movies.filter(el => el.bookmarked === true);
      this.setState(({movies: markedData}))
    } else {
        this.setState({bookmarkedOnly: false, movies: data});
    }
  };

  handleGenreChange = (event) => {
    this.setState({selectedGenre: event.target.value},
    () => {
      const markedData = data.filter(el => el.genre === this.state.selectedGenre);
      (this.state.selectedGenre !== '') ? this.setState({movies: markedData}) : this.setState({movies: data});
    })
  };

  render() {
    
    return(
      <>
      <SearchBar 
      searchText={this.state.searchText}
      onSearchTextChange={this.handleTextChange}
      bookmarkedOnly={this.state.bookmarkedOnly}
      onBookmarkedChange={this.handleBookmarkedChange}
      selectedGenre={this.state.selectedGenre}
      onSelectedGenreChange={this.handleGenreChange}
      />
      <MovieList movies={this.state.movies} />
      </>
    )
  }
}

export default MovieLibrary;