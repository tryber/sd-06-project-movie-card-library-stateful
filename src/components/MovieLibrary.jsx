import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };

    this.changeText = this.changeText.bind(this);
    this.changeBook = this.changeBook.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
  }

  changeText(event) {
    this.setState({ searchText: event.target.value });
  }

  changeBook() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  changeGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.changeText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.changeBook}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.changeGenre}
        />
        <AddMovie onClick={this.handleClick} />
        <MovieList movies={movies} />
      </div>
    );
  }
}
MovieLibrary.propTyoes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
