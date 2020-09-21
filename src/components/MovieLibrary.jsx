// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filteringSearchChange = this.filteringSearchChange.bind(this);
    this.filteredByBookmarked = this.filteredByBookmarked.bind(this);
    this.filteredByGenre = this.filteredByGenre.bind(this);
    this.refresh = this.refresh.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    const { searchText } = this.state;
    const { movies } = this.props;
    console.log('teste');
    this.setState({ [name]: value }, () => {
      if (searchText === '') {
        console.log('teste1');
        // porque não captura backspace dentro do 'if'?
        this.setState({ movies });
      } else {
        return this.filteringSearchChange();
      }
    });
  }

  onBookmarkedChange({ target }) {
    const { name, checked } = target;
    const { movies } = this.props;
    this.setState({ [name]: checked }, () => {
      if (checked === true) {
        this.filteredByBookmarked();
      } else {
        return this.setState({ movies });
      }
    });
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.refresh();
      this.filteredByGenre(value);
    });
  }

  filteringSearchChange() {
    const { movies, searchText } = this.state;
    const filteredByTitle = movies
      .filter((movie) => movie.title.toUpperCase()
        .includes(searchText.toUpperCase()));

    const filteredBySubtitle = movies
      .filter((movie) => movie.subtitle.toUpperCase()
        .includes(searchText.toUpperCase()));

    const filteredByStoryline = movies
      .filter((movie) => movie.storyline.toUpperCase()
        .includes(searchText.toUpperCase()));
    let text = '';
    if (filteredByTitle.length > 0) {
      text = filteredByTitle;
    } else if (filteredBySubtitle.length > 0) {
      text = filteredBySubtitle;
    } else if (filteredByStoryline.length > 0) {
      text = filteredByStoryline;
    }
    this.setState({ movies: text });
  }

  filteredByBookmarked() {
    const { movies } = this.state;
    const filteredByBookmarked = movies
      .filter((movie) => movie.bookmarked === true);
    this.setState({ movies: filteredByBookmarked });
  }

  filteredByGenre(value) {
    const { movies } = this.state;
    const filteredByGenre = movies
      .filter((movie) => movie.genre === value);
    this.setState({ movies: filteredByGenre });
  }


  refresh() {
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <AddMovie />
        <MovieList
          movies={movies}
        />

      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.Object).isRequired };
