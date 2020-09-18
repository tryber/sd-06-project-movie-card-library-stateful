import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input.jsx';
import SelectInput from './SelectInput.jsx';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.preparePropsToSearchInput = this.preparePropsToSearchInput.bind(this);
    this.preparePropsToBookmarkedInput = this.preparePropsToBookmarkedInput.bind(this);
    this.preparePropsToGenreInput = this.preparePropsToGenreInput.bind(this);
  }

  preparePropsToSearchInput() {
    const { searchText, onSearchTextChange } = this.props.objProps;
    return ({
      type: 'text',
      name: 'searchText',
      value: searchText,
      handle: onSearchTextChange,
      inputId: 'text-input',
      labelId: 'label-text-input',
      label: 'Inclui o texto',
      checked: '',
    });
  }

  preparePropsToBookmarkedInput() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props.objProps;
    return ({
      type: 'checkbox',
      name: 'bookmarkedOnly',
      value: bookmarkedOnly,
      handle: onBookmarkedChange,
      inputId: 'checkbox-input',
      labelId: 'label-checkbox-input',
      label: 'Mostrar somente favoritos',
      checked: bookmarkedOnly,
    });
  }

  preparePropsToGenreInput() {
    const { selectedGenre, onSelectedGenreChange } = this.props.objProps;
    const optionsToSelect = [
      { label: 'Todos', value: '' },
      { label: 'Ação', value: 'action' },
      { label: 'Comédia', value: 'comedy' },
      { label: 'Suspense', value: 'thriller' },
    ];

    return ({
      name: 'selectedGenre',
      value: selectedGenre,
      handle: onSelectedGenreChange,
      inputId: 'select-input',
      labelId: 'label-select-input',
      label: 'Filtrar por gênero',
      options: optionsToSelect,
    });
  }

  render() {
    const objToSearchInput = this.preparePropsToSearchInput();
    const objToBookmarkedInput = this.preparePropsToBookmarkedInput();
    const objToGenreInput = this.preparePropsToGenreInput();
    return (
      <form data-testid="search-bar-form">
        <Input objProps={objToSearchInput} />
        <Input objProps={objToBookmarkedInput} />
        <SelectInput objProps={objToGenreInput} />
      </form>
    );
  }
}

export default SearchBar;

SearchBar.defaultProps = {
  objProps: {
    searchText: '',
    onSearchTextChange: '',
    bookmarkedOnly: false,
    onBookmarkedChange: '',
    selectedGenre: '',
    onSelectedGenreChange: '',
  },
};

SearchBar.propTypes = {
  objProps: PropTypes.shape(
    PropTypes.string,
    PropTypes.func,
    PropTypes.bool,
    PropTypes.func,
    PropTypes.string,
    PropTypes.func,
  ),
};
