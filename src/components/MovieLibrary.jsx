// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked })
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value })
  }

  onClick() {
    console.log('oi');
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies}/>
        <AddMovie onClick={this.onClick}/>
      </div>
    );
  }
}

export default MovieLibrary;
