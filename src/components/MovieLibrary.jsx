// implement MovieLibrary component here
import React from 'react';
import propTypes, { object } from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';


class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.OnSearchTextChange = this.OnSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }


  onBookmarkedChange(currentState) {
    this.setState(({ bookmarkedOnly: currentState }));
  }

  onSelectedGenreChange(currentGenre) {
    this.setState(({ selectedGenre: currentGenre }));
  }

  onClick(newMovie) {
    const { movies } = this.state;
    this.setState(({ movies: movies.concat(newMovie) }));
  }

  OnSearchTextChange(currentText) {
    this.setState(() => ({ searchText: currentText }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.state;
    return (
      <div>
        <SearchBar
          onSearchTextChange={this.OnSearchTextChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
          onBookmarkedChange={this.onBookmarkedChange}
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
        />
        <MovieList
          movies={movies}
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
        />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(object).isRequired };

export default MovieLibrary;
