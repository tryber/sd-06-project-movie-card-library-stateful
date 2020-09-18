import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.masterHandler = this.masterHandler.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filter = this.filter.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies
    }
  }

  masterHandler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value
    });
  }

  onClick(newCard) {
    this.setState({
      movies: this.state.movies.concat(newCard)
    })
  }

  filter() {
    let card = this.state.movies;
    const { selectedGenre, searchText, bookmarkedOnly } = this.state;
    if(searchText !== '') {
      card = card.filter(movie => (
        movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) ||
        movie.storyline.includes(searchText)
      ));
    }
    if(bookmarkedOnly === true) {
      card = card.filter(movie => movie.bookmarked === true)
    }
    if(selectedGenre !== '') {
      card = card.filter(movie => movie.genre === selectedGenre)
    }
    return card;
  }

  render() {
    const filtered = this.filter();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return(
      <div>
        <SearchBar 
          searchText={searchText}
          onSearchTextChange={this.masterHandler}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.masterHandler}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.masterHandler}
        />
        <MovieList movies={filtered} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
