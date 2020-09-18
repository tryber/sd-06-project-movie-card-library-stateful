import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <MovieLibrary />
        <AddMovie />
      </div>
    );
  }
}

export default App;
