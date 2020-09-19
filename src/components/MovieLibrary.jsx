import React from 'react';
import SearchBar from './SearchBar';

/* passar como propriedade os estados e as funçoes de mudança de estado */
/* declarar os estados searchtext bookemarks select genre
   declara as funçoes de mudança de estado */
class MovieLibrary extends React.Component {
  construtor() {
    super()
      this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
      this.onSearchTextChange = this.onSearchTextChange.bind(this);
      this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default MovieLibrary;
