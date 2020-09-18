import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input.jsx';
import SelectInput from './SelectInput.jsx';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    const options = [
      { label: 'Todos', value: '' },
      { label: 'Ação', value: 'action' },
      { label: 'Comédia', value: 'comedy' },
      { label: 'Suspense', value: 'thriller' },
    ];

    return (
      <form data-testid="search-bar-form">

        <Input type="text" name="searchText" value={searchText} handle={onSearchTextChange} inputId="text-input" labelText="Inclui o texto" labelId="text-input-label" checked="" />

        <Input type="checkbox" name="bookmarkedOnly" value={bookmarkedOnly} handle={onBookmarkedChange} inputId="checkbox-input" labelText="Mostrar somente favoritos" labelId="checkbox-input-label" checked={bookmarkedOnly} />

        <SelectInput name="selectedGenre" value={selectedGenre} handle={onSelectedGenreChange} inputTestId="select-input" labelText="Filtrar por gênero" labelTestId="select-input-label" options={options} />
      </form>
    );
  }
}

export default SearchBar;

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: false,
  onBookmarkedChange: '',
  selectedGenre: '',
  onSelectedGenreChange: '',
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
