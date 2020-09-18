import React from 'react';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
    this.search = this.search.bind(this);
    this.mark = this.mark.bind(this);
    this.genre = this.genre.bind(this);
    this.filter = this.filter.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  mark() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      return this.setState({ bookmarkedOnly: false });
    }
    return this.setState({ bookmarkedOnly: true });
  }

  async genre(e) {
    const { value } = e.target;
    await this.setState({ selectedGenre: value });
  }

  search(e) {
    this.setState({ searchText: e.target.value });
  }

  filter() {
    const { selectedGenre, bookmarkedOnly, searchText } = this.state;
    const { movies } = this.state;
    const select = movies;
    if (selectedGenre !== '') {
      return select.filter((item) => item.genre === selectedGenre);
    }
    if (bookmarkedOnly === true) {
      return select.filter((item) => item.bookmarked);
    }
    if (searchText !== '') {
      return select.filter((item) => (
        (item.title.includes(searchText))
        || (item.subtitle.includes(searchText))
        || (item.storyline.includes(searchText))
      ));
    }
    return select;
  }

  addMovie(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const select = this.filter();
    return (
      <div>
        <SearchBar
          searchText={searchText}
          mark={this.mark}
          bookmarkedOnly={bookmarkedOnly}
          search={this.search}
          selectedGenre={selectedGenre}
          genre={this.genre}
        />
        <MovieList movies={select} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.any).isRequired };

// import React from 'react';
// import propType from 'prop-types';
// import SearchBar from './SearchBar';

// class MovieLibrary extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       searchText: '',
//       bookmarkedOnly: false,
//       selectedGenre: '',
//       movies: props.movies,
//     };
//   }

//   render() {
//     const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
//     return (
//       <div>
//         <SearchBar searchText={searchText} />
//       </div>
//     );
//   }
// }

// MovieLibrary.propTypes = { movies: propType.arrayOf(propType.any).isRequired };

// export default MovieLibrary;
