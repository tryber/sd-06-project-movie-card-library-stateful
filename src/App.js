import React from 'react';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={movies} />
      </div>
    );
  }
}

export default App;
