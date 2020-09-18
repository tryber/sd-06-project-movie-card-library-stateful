import React from 'react';
import PropTypes from 'prop-types';
import AddInput from './AddInput';
import AddSelect from './AddSelect';

class SearchBar extends React.Component {
  render() {
    const { onSelectedGenreChange, onSearchTextChange, searchText } = this.props;
    return (
      <form data-testid="search-bar-form" className="search-bar">
        <AddInput
          id="text" label="Inclui o texto" callback={onSearchTextChange} value={searchText}
        />
        <label data-testid="checkbox-input-label" htmlFor="fav-checkbox">Mostrar somente favoritos
          <input
            type="checkbox" checked={this.props.bookmarkedOnly} id="fav-checkbox"
            onChange={this.props.onBookmarkedChange} data-testid="checkbox-input"
          />
        </label>
        <AddSelect
          id="select" value={this.props.selectedGenre} callback={onSelectedGenreChange}
          label="Filtrar por gênero" optionId="select-option" options={[
            ['', 'Todos'], ['action', 'Ação'], ['comedy', 'Comédia'], ['thriller', 'Suspense'],
          ]}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
// searchText, uma string
// onSearchTextChange, uma callback
// bookmarkedOnly, um boolean
// onBookmarkedChange, uma callback
// selectedGenre, uma string
// onSelectedGenreChange, uma callback
