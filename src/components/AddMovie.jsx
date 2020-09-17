import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name] : value
    })
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre, } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">Título
          <input
              data-testid="title-input"
              name="title"
              type="text"
              value={title}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="subtitle-input-label">Subtítulo
            <input
              data-testid="subtitle-input"
              name="subtitle"
              type="text"
              value={subtitle}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="image-input-label">Imagem
            <input
              data-testid="image-input"
              name="imagePath"
              type="text"
              value={imagePath}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="storyline-input-label">Sinopse
            <textarea
              data-testid="storyline-input"
              name="storyline"
              value={storyline}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="rating-input-label">Avaliação
            <input
              data-testid="rating-input"
              name="rating"
              type="number"
              value={rating}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="genre-input-label">Gênero
            <select data-testid="genre-input" name="genre" value={genre} onChange={this.handleChange} />
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </label>
          <button data-testid="send-button" onClick={ () => onClick(this.state) } >Adicionar filme</button>
        </form>
      </div>
    )
  }
}

export default AddMovie;
