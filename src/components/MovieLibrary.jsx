import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import data from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.AddMovieList = this.AddMovieList.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: data,
    };
  }

  handleTextChange() {
  }

  handleBookmarkedChange() {
  }

  handleGenreChange() {
  }

  AddMovieList(title, subtitle, imagePath, storyline, rating, genre) {
    this.setState(() => {
      this.state.movies.push({
        title,
        subtitle,
        storyline,
        rating,
        imagePath,
        bookmarked: false,
        genre,
      });
    }, this.setState({ movies: this.state.movies }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie
          onClick={this.AddMovieList}
        />
      </div>
    );
  }
}

export default MovieLibrary;
