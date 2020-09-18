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
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  handleCheckChange({ target }) {
    const { value } = target.checked;
    this.setState({ bookmarkedOnly: value })
  }

  handleGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value })
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          handleTextChange={this.handleTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          handleCheckChange={this.handleCheckChange}
          selectedGenre={this.state.selectedGenre}
          handleGenreChange={this.handleGenreChange}
        />
        <MovieList movies={this.state.movies}/>
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
