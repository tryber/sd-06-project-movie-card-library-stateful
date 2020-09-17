// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
    render() {
        const {searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props
        return (
            <form data-testid="search-bar-form">

                <label for="text-input" data-testid="text-input-label">Inclui o texto:</label>
                <input type="text" value={searchText} onChange={onSearchTextChange} data-testid="text-input" />

                <label for="checkbox-input" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
                <input type="checkbox" onChange={onBookmarkedChange} checked={bookmarkedOnly} data-testid="checkbox-input" />

                <label for="checkbox-input" data-testid="select-input-label">Filtrar por gênero</label>
                <select value={selectedGenre} onChange={onSelectedGenreChange} data-testid="select-input">
                    <option value="" data-testid="select-option">Todos</option>
                    <option value="action" data-testid="select-option">Ação</option>
                    <option selected value="comedy" data-testid="select-option">Comédia</option>
                    <option value="thriller" data-testid="select-option">Suspense</option>
                </select>

            </form>
        )
    }
}

export default SearchBar;
