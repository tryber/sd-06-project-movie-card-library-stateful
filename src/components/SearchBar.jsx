// implement SearchBar component here
import React, {Component} from 'react'

class SearchBar extends Component {
    render() {
        const {searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props
        return(
            <form data-testid="search-bar-form">
                <label htmlFor="textSearch" data-testid="text-input-label">Inclui o texto:</label>
                <input type="Text" id="textSearch" onChange={onSearchTextChange} data-testid="text-input" value={searchText}></input>
                <label htmlFor="favShow" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
                <input type="checkbox" id="favShow" checked={bookmarkedOnly} onChange={onBookmarkedChange} data-testid="checkbox-input"></input>
                <label htmlFor="select" data-testid="select-input-label">Filtrar por gênero</label>
                <select id="select" value={selectedGenre} onChange={onSelectedGenreChange} data-testid="select-input">
                    <option value="" data-testid="select-option">Todos</option>
                    <option value="action" data-testid="select-option">Ação</option>
                    <option value="comedy" data-testid="select-option">Comédia</option>
                    <option value="thriller" data-testid="select-option">Suspense</option>
                </select>
            </form>
        )
    }
}

export default SearchBar;