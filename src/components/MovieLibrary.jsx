// implement MovieLibrary component here
import React, {Component} from 'react'
import SearchBar from './SearchBar'
import AddMovie from './AddMovie'

class MovieLibrary extends Component {
    constructor(props) {
        super(props)
        const {movies} = this.props
        this.state = {
            searchText: '',
            bookmarkedOnly: false,
            selectedGenre: '',
            movies: movies
        }
    }
    nome() {
        
    }
    render() {
        
        return (
            <div>
                <SearchBar 
                searchText={this.state.searchText}
                bookmarkedOnly={this.bookmarkedOnly}
                selectedGenre={this.selectedGenre}
                />
                <AddMovie onClick={this.nome}/>
            </div>
        )
    }
}

export default MovieLibrary