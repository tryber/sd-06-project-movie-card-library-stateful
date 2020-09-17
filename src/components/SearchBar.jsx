import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      serachText: '',
      onSearchTextChange: this.handleChange(),
      bookmarkedOnly: true,
      onBookmarkedChange: this.handleChange(),
      selectedGenre: '',
      onSelectedGenreChange: this.handleChange(),
    }
  }

  handleChange(event) {
    this.setState(() => event.target.type === 'checkbox'
    ? { name: event.target.checked }
    : { name: event.target.value });
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <label>
          Search:
          <input type="text" value={this.state.serachText} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default SearchBar;
