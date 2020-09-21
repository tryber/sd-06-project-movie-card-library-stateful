// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    // const {
    //   movie: {
    //     searchText,
    //     onSearchTextChange,
    //     bookmarkedOnly,
    //     onBookmarkedChange,
    //     selectedGenre,
    //     onSelectedGenreChange,
    //   },
    // } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        <br />
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <br />
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <options data-testid="select-option" value="">Todos</options>
            <options data-testid="select-option" value="action">Ação</options>
            <options data-testid="select-option" value="comedy">Comédia</options>
            <options data-testid="select-option" value="thriller">Suspense</options>
          </select>
        </label>
      </form>
    );
  }
}

// SearchBar.propTypes = { movie: PropTypes.objectOf(PropTypes.any).isRequired };

export default SearchBar;
