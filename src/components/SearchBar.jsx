/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import SelectInput from './SelectInput';

export default class SearchBar extends Component {
  render() {
    return (<form data-testid="search-bar-form">
      <Input
        type="text"
        id="text-input"
        name="searchText"
        onChange={this.props.onSearchTextChange}
        value={this.props.searchText}
        labelText="Inclui o texto"
      />
      <Input
        type="checkbox"
        id="checkbox-input"
        name="bookmarkedOnly"
        onChange={this.props.onBookmarkedChange}
        value={this.props.bookmarkedOnly}
        labelText="Mostrar somente favoritos"
      />
      <SelectInput
        id="select-input"
        name="selectedGenre"
        onChange={this.props.onSelectedGenreChange}
        value={this.props.selectedGenre}
        labelText="Filtrar por gênero"
      /></form>);
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
