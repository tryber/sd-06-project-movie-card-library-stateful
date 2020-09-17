import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <MovieLibrary />
        </div>
      </div>
    );
  }
}

export default App;
