import React from 'react';
// import propTypes from 'prop-types';
// import MovieList from './MovieList';
// import AddMovie from './AddMovie';
import SearchBar from './SearchBar';


class MovieLibrary extends React.Component {
  constructor() {
    super();
    const movies = this.props;
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onBookmarkedChange(e) {
    this.setState({ bookmarkedOnly: e.target.checked });
    // if (this.state.bookmarkedOnly === true) movies.filter((movie) => movie.bookmarked === true);
  }

  onSelectedGenreChange(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText} bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre} onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
      </div>
    );
  }
}

// MovieLibrary.propTypes = { movies: propTypes.a.isRequired };

export default MovieLibrary;
