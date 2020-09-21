// implement SearchBar component here
import React from 'react';
import Proptypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input-label" data-testid="text-input-label">
            Inclui o texto:
          <input
            type="text"
            name="name"
            onChange={(e) => onSearchTextChange(e.target.value)}
            data-testid="text-input"
          />
        </label>
        <label htmlFor="checkbox-input-label" data-testid="checkbox-input-label">

          Mostrar somente favoritos
          <input
            type="checkbox"
            onChange={(e) => onBookmarkedChange(e.target.checked)}
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input-label">
          Filtrar por gênero:
          <select

            onChange={(e) => onSelectedGenreChange(e.target.value)}
            data-testid="select-input"
          >
            <option
              value=""
              data-testid="select-option"
            >
              Todos
            </option>
            <option
              value="action"
              data-testid="select-option"
            >
              Ação
            </option>
            <option
              value="comedy"
              data-testid="select-option"
            >
                Comédia
            </option>
            <option
              value="thriller"
              data-testid="select-option"
            >
              Suspense
            </option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSelectedGenreChange: Proptypes.func.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
};

export default SearchBar;
