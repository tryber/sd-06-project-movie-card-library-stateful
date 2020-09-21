import React from 'react';
import MovieLibrary from './components/MovieLibrary';
import data from './data';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();

    this.onclickBtn = this.onclickBtn.bind(this);
    this.state = { movies: data };
  }

  onclickBtn() {
    const oldState = this.state;
    console.log(oldState);
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={movies} />
        <button type="button" onClick={() => this.onclickBtn()}>Console do state</button>
      </div>
    );
  }
}

export default App;
