// import React from "react";
// import propTypes from 'prop-types'

// class AddMovie extends React.Component {
//   constructor() {
//     super();

//     this.handleChange = this.handleChange.bind(this);
//     this.addMovie = this.addMovie.bind(this);


//     this.state = {
//       subtitle: '',
//       title: '',
//       imagePath: '',
//       storyline: '',
//       rating: 0,
//       genre: 'action',
//     }
//   };
  
//   handleChange({ target }) {
//     const inputName = target.name;

//     this.setState(() => ({
//       [inputName]: target.value
//     }))
//   }

//   addMovie() {
//     const callBack = this.props.onClick

//     callBack(this.state)

//     this.setState(() => ({
//       subtitle: '',
//       title: '',
//       imagePath: '',
//       storyline: '',
//       rating: 0,
//       genre: 'action',
//     }))
//   }

//   render() {
//     return (
//       <form data-testid="add-movie-form">
//         <label data-testid="title-input-label">Título
//           <input type="text" value={this.state.title} data-testid="title-input" onChange={this.handleChange} name="title" />
//         </label>
        

//         <label data-testid="subtitle-input-label">Subtítulo</label>
//         <input type="text" value={this.state.subtitle} data-testid="subtitle-input" onChange={this.handleChange} name="subtitle" />

//         <label data-testid="image-input-label">Imagem</label>
//         <input type='text' value={this.state.imagePath} onChange={this.handleChange} name="imagePath" data-testid="image-input" />

//         <label data-testid="storyline-input-label">Sinopse</label>
//         <input type='textarea' value={this.state.storyline} onChange={this.handleChange} name="storyline" data-testid="storyline-input" />

//         <label data-testid="rating-input-label">Avaliação</label>
//         <input type='number' value={this.state.rating} onChange={this.handleChange} name="rating" data-testid="rating-input" />

//         <label data-testid="genre-input-label">Gênero</label>
//         <select value={this.state.genre} data-testid="genre-input" name="genre" onChange={this.handleChange}>
//           <option value='action' data-testid="genre-option">Ação</option>
//           <option value='comedy' data-testid="genre-option">Comédia</option>
//           <option value='thriller' data-testid="genre-option">Suspense</option>
//         </select>
        
//         <button data-testid="send-button">Adicionar filme</button>
//       </form>
//     )
//   }
// }

// AddMovie.propTypes = {
//   onClick: propTypes.func.isRequired
// }

// export default AddMovie;