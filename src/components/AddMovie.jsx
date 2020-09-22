import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props){
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.state = {
    subtitle: "",
    title: "",
    imagePath: "",
    storyline: "",
    rating: 0,
    gender: 'action',
    }
  }

  handleChange({ target }) {
   const { name, value } = target;
   this.setState({
     [name]: value
   })
  }

  clearClick() {
    this.setState({
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      gender: 'action',
    })

    document.querySelectorAll('input').forEach((element) => {
      if (element.type === 'number') {
        element.value = 0;
      } else {
        element.value = '';
      }
    });
    document.querySelectorAll('select').value = 'action';
  }
  
  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.props;
    const { onClick } = this.props;
     return (
      <form data-testid="add-movie-form">
      <label data-testid="title-input-label">
      Título
     <input type="text"
     data-testid="title-input"
     onChange={this.handleChange}
     name="title">{title}</input>
      </label>
      <label data-testid="subtitle-input-label">
      Subtítulo
     <input
        type="text"
        data-testid="subtitle-input"
        name="subtitle"
        onChange={this.handleChange}
     >{subtitle}</input>
      </label>
      <label data-testid="image-input-label">
      Imagem
     <input
        type="text"
        data-testid="image-input" 
        name="image"
        onChange={this.handleChange}
     >{imagePath}</input>
      </label>
      <label data-testid="storyline-input-label">
      Sinopse
     <textarea
        data-testid="storyline-input"
        name="storyline"
        onChange={this.handleChange}
     >{storyline}</textarea>
      </label>
      <label data-testid="rating-input-label">
      Avaliação
     <input
        type="number"
        data-testid="rating-input"
        name="rating"
        onChange={this.handleChange}
        defaultValue="0"
     >{rating}</input>
      </label>
      <label data-testid="genre-input-label">
          Gênero
        <select
          value={this.props.genre}
          data-testid="genre-input"
          name="genre"
          onChange={this.handleChange}
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
      <button
      type="submit"
        data-testid="send-button"
        onClick={(event)=> {
          event.preventDefault()
          onClick(this.state)
          this.clearClick()
        }}
      >
        Adicionar filme
      </button> 
      </form>
     );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
