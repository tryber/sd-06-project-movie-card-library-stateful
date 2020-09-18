import React from 'react';
// import MovieList from './components/MovieList'

export default class SearchBar extends React.Component {
  render() {
    const {keyword, setKeyWord} = this.props
    return (
      <div>
        <input key="random1" value={keyword} placeholder={"search movie"} onChange={(e) => setKeyWord(e.target.value)} />
      </div>
    );
  }
}
// searchText={props.searchText}
// onSearchTextChange={props.onSearchTextChange}
// bookmarkedOnly={props.bookmarkedOnly}
// onBookmarkedChange={props.onBookmarkedChange}
// selectedGenre={props.selectedGenre}
// onSelectedGenreChange={props.onSelectedGenreChange}
