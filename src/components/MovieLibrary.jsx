/* eslint-disable react/prop-types */
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarkedOnly: false,
      movies: props.movies,
      searchText: '',
      selectedGenre: '',
    };

    // this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onChangeBookmark = this.onChangeBookmark.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onChangeBookmark({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
  }

  onChangeGenre({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  onChangeSearch({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  addMovie(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const { movies } = this.state;
    const { searchText } = this.state;
    const { bookmarkedOnly } = this.state;
    const { selectedGenre } = this.state;

    return (
      <div>
        <h2>Movie Library</h2>
        <SearchBar
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onChangeBookmark}
          onSearchTextChange={this.onChangeSearch}
          onSelectedGenreChange={this.onChangeGenre}
          searchText={searchText}
          selectedGenre={selectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
