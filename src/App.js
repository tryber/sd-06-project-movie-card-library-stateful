import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

function App() {
  const {
    searchText, onSearchTextChange, bookmarkedOnly,
    onBookmarkedChange, selectedGenre, onSelectedGenreChange,
  } = this.props;

  return (
    <div className="App">
      <Header />
      <MovieLibrary />;
    </div>
  );
}

export default App;
