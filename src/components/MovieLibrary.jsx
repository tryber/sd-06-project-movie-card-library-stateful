import React from 'react';
//import data from '../data';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie.';

class MovieCard extends React.Component {
    constructor() {
        super();

        this.state = {
            searchText: '',
            bookmarkedOnly: false,
            selectedGenre: '',
            movies: {movies}
        }
    }
    render() {
        return(
            <div>
                <SearchBar />
                <MovieList />
                <AddMovie />
            </div>
        )
    }
}

export default MovieLibrary;