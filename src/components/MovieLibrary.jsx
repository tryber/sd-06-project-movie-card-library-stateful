import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import data from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    //this.filteredMovies = this.filteredMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: data,
    };
  }

  // filteredMovies(movies) {
  //   const { searchText } = this.state;
  //   const searchTextRegEx = new RegExp(searchText);
  //   if (searchText.length !== 0) {
  //     return movies.filter((movie) => movie.title.match(searchTextRegEx));
  //   }
  //   return movies;
  // }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
