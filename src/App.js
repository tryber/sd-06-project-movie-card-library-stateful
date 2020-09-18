import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import movies from './data';
import AddMovie from './components/AddMovie';

function App() {
  // const { search } = this.props;
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
      {/* searchText={search.searchText}
      onSearchTextChange={search.onSearchTextChange}
      bookmarkedOnly={search.bookmarkedOnly}
      onBookMarkedOnly={search.onBookMarkedOnly}
      selectedGenre={search.selectedGenre}
      onSelectedGenre={search.onSelectedGenre} */}
      <MovieList movies={movies}/>
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
