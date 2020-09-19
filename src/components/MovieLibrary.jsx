import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import data from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();
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

  handleTextChange({ target }) {
    this.setState(
      { searchText: target.value },
      () => {
        const filtered = this.state.movies.filter((el) =>
          el.title === this.state.searchText
          || el.subtitle === this.state.searchText
          || el.storyline === this.state.searchText);
        if (this.state.searchText.trim() !== '') this.setState({ movies: filtered });
        else if (this.state.selectedGenre !== ''){
          const filteredGenre = data.filter((el) => el.genre === this.state.selectedGenre);
          this.setState({ movies: filteredGenre });
        } else {
         this.setState({ movies: data });
        }
      });
  }

  handleBookmarkedChange() {
    if (this.state.bookmarkedOnly === false) {
      this.setState(({ bookmarkedOnly: true }));
      const filtered = this.state.movies
        .filter((el) => el.bookmarked === true);
      this.setState(({ movies: filtered }));
    } else {
      this.setState((
        {
          bookmarkedOnly: false,
          movies: data,
        }));
    }
  }

  handleGenreChange({ target }) {
    const genre = target.value;
    this.setState(({ selectedGenre: genre, movies: data }), () => {
      if (this.state.selectedGenre !== '') {
        const filtered = this.state.movies
          .filter((el) => el.genre === this.state.selectedGenre);
        this.setState(({ movies: filtered }));
      }
    });
  }

  AddMovieList(title, subtitle, imagePath, storyline, rating, genre) {
    this.setState(() => {
      data.push({
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
