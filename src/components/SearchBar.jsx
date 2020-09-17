// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <section className="form" data-testid="search-bar-form">
                    <label data-testid="text-input-label">Inclui o texto:</label>
                    <input  data-testid="text-input"
                    type="text" value="searchText" onchange="onSearchChange" />
                    <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
                    <input type="checkbox" data-testid="checkbox-input" 
                    checked="bookMarkedOnly" onchange="onBookMarkedChange" />
                </section>
            </div>
        )
    }
}

export default SearchBar;