import React from 'react';
import MovieLibrary from './MovieLibrary';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
        <MovieLibrary />
      </header>
    );
  }
}

export default Header;
