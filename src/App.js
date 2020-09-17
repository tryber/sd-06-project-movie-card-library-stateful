import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor() {
    super();

    this.handleValueChange = this.handleValueChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleValueChange({ target }) {
    const { name, value, type, checked } = target;

    if (type === 'checkbox') {
      this.setState({ [name]: checked });
      return;
    }

    this.setState({ [name]: value });
  }

  render() {
    const values = this.state;

    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={values.searchText}
          bookmarkedOnly={values.bookmarkedOnly}
          selectedGenre={values.selectedGenre}
          onSearchTextChange={this.handleValueChange}
          onBookmarkedChange={this.handleValueChange}
          onSelectedGenreChange={this.handleValueChange}
        />
      </div>
    );
  }
}

export default App;
