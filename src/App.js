import React from 'react';
import './App.css';
import movies from './data.js';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = { movies };
  }

  render() {
    // console.log(movies);
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={movies} />
      </div>
    );
  }
}

export default App;
