import React from 'react';
import './App.css';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

export default App;
