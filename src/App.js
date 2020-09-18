import React from 'react';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';
import Header from './components/Header';

function App() {
  const {
    searchText, onSearchTextChange, bookmarkedOnly,
    onBookmarkedChange, selectedGenre, onSelectedGenreChange,
  } = this.props;

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
