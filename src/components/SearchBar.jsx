import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }
  render() {
    return (
      <h1>Olá! Eu estou renderizando A-Ok!</h1>
    );
  }
}

export default SearchBar;
