import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar'
import AddMovie from './components/AddMovie'


class App extends React.Component {
  // constructor() {
  //   super();

  // }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar /* searchText={} onSearchTextChange={}  *//>
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

export default App;
