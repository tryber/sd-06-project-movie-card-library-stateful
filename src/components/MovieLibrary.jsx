import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.masterHandler = this.masterHandler.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies
    }
  }

  masterHandler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value
    });
  }

  onClick(newCard) {
    this.setState({
      movies: this.state.movies.concat(newCard)
    })
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return(
      <div>
        <SearchBar 
          searchText={searchText}
          onSearchTextChange={this.masterHandler}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.masterHandler}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.masterHandler}
        />
        <AddMovie onClick={this.onClick} />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MovieLibrary;
