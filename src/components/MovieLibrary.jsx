import React, { Component } from 'react';
// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';



class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    // this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    //  this.filteredText = this.filteredText.bind(this);
     this.filteredCheckBox = this.filteredCheckBox.bind(this);
     this.filteredGenre = this.filteredGenre.bind(this);
    // this.onClickAddMovie = this.onClickAddMovie.bind(this);
    this.state = {
      searchText:'',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies:props.movies,
    };
    }

  onSearchTextChange(event) {
    this.setState({searchText:event.target.value})
  }
  filteredGenre(event){
    const { movies } = this.props;
      if( event == ''){
        this.setState({movies: this.props.movies})
      }else {
        this.setState({movies: movies
      .filter((movie)=>movie.genre === event)
      .map((movie) => movie)
    });
  }
}
// - Quando o estado para `selectedGenre` não é vazio, deve ser renderizado somente filmes com o mesmo gênero;

  filteredCheckBox(event){
    const { movies } = this.props;
    this.setState({ movies: movies
      .filter((movie)=>movie.checkbox === event)
      .map((movie) => movie)
    });
  }

  // filteredText(event){
  //   const {movies} = this.props
  //   this.setState({ 
  //     movies:movies
  //     .filter((movie) => {
  //       const { title, subtitle, storyline } = movie;
  //       return (
  //         title.includes(event)
  //         || subtitle.includes(event)
  //         || storyline.includes(event))})
  //     .map((movie) => movie)
  //   });
  // }


  render() { 
    const { searchText, bookmarkedOnly, selectedGenre} = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange} = this
const filteredMovies=this.props.movies.filter( (movie) => {
  return (movie.title.toLowerCase().indexOf(this.state.searchText) !== -1
  || movie.subtitle.toLowerCase().indexOf(this.state.searchText) !== -1
  || movie.storyline.toLowerCase().indexOf(this.state.searchText) !== -1)})
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
         searchText={searchText}
          onSearchTextChange={onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={onSelectedGenreChange}
        />
        <div data-testid="movie-list" className="movie-list">
          {filteredMovies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
          </div>
        {/* <MovieList movies={this.props.movies} /> */}
        <AddMovie movies={this.state.movies} />
      </div>
    );
  }
}

export default MovieLibrary;
