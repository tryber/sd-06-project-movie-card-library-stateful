import React from 'react';
import './App.css';
import movies from './data.js';

import Header from './components/Header';
import AddMovie from './components/AddMovie.jsx';
import MovieLibrary from './components/MovieLibrary.jsx'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: movies,
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(prop) {
    // movies.push(prop);
    console.log(movies);

    this.setState({
      movies: movies.push(prop)
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddMovie onClick={this.onClick} />
        <MovieLibrary movies={movies} />
      </div>
    );
  }
}

// function onClick(prop) {
//   movies.push(prop);
//   console.log(movies);

// }

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <AddMovie onClick={onClick} />
//       <MovieLibrary movies={movies} />
//     </div>
//   );
// }

export default App;
