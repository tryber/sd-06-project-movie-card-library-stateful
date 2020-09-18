import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';


class App extends React.Component {


  render() {
    const values = this.state;

    return (
      <div className="App">
        <Header />
        <MovieList

        />
        <
      </div>
    );
  }
}

export default App;
