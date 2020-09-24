import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
        <SearchBar />
        <AddMovie />
      </header>
    );
  }
}

export default Header;
