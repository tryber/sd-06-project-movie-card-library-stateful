import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.message = 'Funcionou!';
  }

  onClick() {
    console.log(this.message);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        {/* <MovieList movies={this.props.movies} /> */}
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
