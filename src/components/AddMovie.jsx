import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.initialState = this.initialState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    }
  }

  initialState() {
    this.setState({
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    })
  }

  handleClick() {
    const { state, initialState, props: { onClick } } = this;
    onClick(state);
    initialState();
  }

  onChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  render () {
    const { state: { title, subtitle, imagePath, storyline, rating, genre },
    handleClick, onChange } = this;
    return (
      <form data-testid="add-movie-form" action="">
        <label data-testid="title-input-label" htmlFor="title-input">Título
          <input type="text" name="title" id="title-input" value={title} 
          data-testid="title-input" onChange={onChange} /></label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo
          <input type="text" name="subtitle" id="subtitle-input" value={subtitle}
          data-testid="subtitle-input" onChange={onChange} /></label>
        <label data-testid="image-input-label" htmlFor="image-input">Imagem
          <input type="text" name="imagePath" id="image-input" value={imagePath}
          data-testid="image-input" onChange={onChange} /></label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinopse
          <textarea name="storyline" id="storyline-input" cols="30" value={storyline}
          rows="10" data-testid="storyline-input" onChange={onChange} /></label>
        <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação
          <input type="number" name="rating" id="rating-input" value={rating}
          data-testid="rating-input" onChange={onChange} /></label>
        <label data-testid="genre-input-label" htmlFor="genre-input">Gênero
          <select name="genre" id="genre-input" data-testid="genre-input" value={genre}
          onChange={onChange}><option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option></select></label>
        <button data-testid="send-button" onClick={handleClick}>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;