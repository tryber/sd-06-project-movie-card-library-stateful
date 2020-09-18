import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  // const { search } = this.props;
  return (
    <div className="App">
      <Header />
      <SearchBar />
      {/* searchText={search.searchText}
      onSearchTextChange={search.onSearchTextChange}
      bookmarkedOnly={search.bookmarkedOnly}
      onBookMarkedOnly={search.onBookMarkedOnly}
      selectedGenre={search.selectedGenre}
      onSelectedGenre={search.onSelectedGenre} */}
    </div>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookMarkedOnly: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenre: PropTypes.func,
};

export default App;
