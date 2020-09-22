// implement MovieLibrary component here
import React from 'react';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
