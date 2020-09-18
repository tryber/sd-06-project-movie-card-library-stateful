// import React, { Component } from 'react'
// import SeachBar from './SearchBar'
// import AddMovie from './AddMovie'
// // import movies from '../data'

// class MovieLibrary extends Component {
//   constructor() {
//     super()

//     this.onSearchTextChange = this.onSearchTextChange.bind(this);

//     this.state = {
//       searchText: "",
//       bookmarkedOnly: false,
//       selectedGenre: "",
//       movies: ""
//     }

//   }

//   onSearchTextChange({ target }) {
//     this.setState({
//       [target.name]: target.value
//     });
//   }

//   onBookmarkedChange({ target }) {
//     this.setState({
//       [target.name]: target.value
//     });
//   }

//   onSelectedGenreChange({ target }) {
//     this.setState({
//       [target.name]: target.value
//     });
//   }

//   render() {
//     const { movies } = this.props;

//     return (
//       <div>
//         <SeachBar
//           searchText={this.state.searchText}
//           onSearchTextChange={this.onSearchTextChange}
//           bookmarkedOnly={this.state.bookmarkedOnly}
//           onBookmarkedChange={this.onBookmarkedChange}
//           selectedGenre={this.state.selectedGenre}
//           onSelectedGenreChange={this.onSelectedGenreChange}
//         />
//         <AddMovie />
//       </div>
//     )
//   };
// }

// export default MovieLibrary;
