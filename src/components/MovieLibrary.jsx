import React from 'react'
import AddMovie from './AddMovie'
import SearchBar from './SearchBar'
import MovieList from './MovieList'

class MovieLibrary extends React.Component {

  constructor() {
    super(); 
  }
  
  render(){
    const { movies } = this.props;
      return(
        <div>
          <SearchBar />
          <MovieList movies={movies} />
          <AddMovie />
        </div>
      )
    }
  }

export default MovieLibrary;
