import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import movies from './data';


class App extends Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      filterMovieByName: movies,
      bookmarkedOnly: false,
      searchText: '',
      selectedGenre: '',
    };
  }

  onSearchTextChange({ target }) {
    const movieName = target.value.toLowerCase();
    const nameFiltered = movies.find((item) => (
      item.title.toLowerCase().split(' ').includes(movieName)
    ));

    if (nameFiltered === undefined) {
      this.setState({ filterMovieByName: movies });
    } else {
      this.setState({ filterMovieByName: [nameFiltered] });
    }
  }

  onBookmarkedChange({ target }) {
    if (target.checked === true) {
      this.setState({
        bookmarkedOnly: true,
        filterMovieByName: [movies[0]],
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
        filterMovieByName: movies,
      });
    }
  }

  onSelectedGenreChange({ target }) {
    const genreOption = target.value;
    const genreFiltered = movies.find((item) => item.genre === genreOption);

    if (genreFiltered === undefined) {
      this.setState({ filterMovieByName: movies });
    } else {
      this.setState({ filterMovieByName: [genreFiltered] });
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          onSearchTextChange={this.onSearchTextChange} searchText={this.state.searchText}
          onBookmarkedChange={this.onBookmarkedChange} bookmarkedOnly={this.state.bookmarkedOnly}
          onSelectedGenreChange={this.onSelectedGenreChange}
          selectedGenre={this.state.selectedGenre}
        />
        <MovieList movies={this.state.filterMovieByName} />
      </div>
    );
  }
}

export default App;
