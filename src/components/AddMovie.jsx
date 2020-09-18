import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.change = this.change.bind(this);
  }

  change(evento) {
    this.setState({ [evento.target.name]: evento.target.value });
  }

  /* tem que dar um name igual ao state inicial para cada input e chamar essa mesma função
  em todas elas
  fazer a função que chama a função de onclick que será passada como props e chamar no botão
  que ainda não está criado
 */
  renderSelect() {
    const { genre } = this.state;
    return (
      <label htmlFor="select" data-testid="genre-input-label">Gênero
        <select value={genre}
          onChange={this.change}
          id="select" data-testid="genre-input" name="genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">Título
          <input value={title} type="text" name="title"
            onChange={this.change} id="title" data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo
          <input value={subtitle} name="subtitle" id="subtitle"
            onChange={this.change} data-testid="subtitle-input" type="text"
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">Imagem
          <input value={imagePath} type="text" name="imagePath"
            onChange={this.change} id="imagePath" data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse
          <input onChange={this.change}  name="storyline" id="storyline"
            value={storyline} data-testid="storyline-input" type="textarea"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">Avaliação
          <input value={rating} type="number" name="rating"
            onChange={this.change} id="rating" data-testid="rating-input"
          />
        </label>
        {this.renderSelect()}
        <button data-testid="send-button">Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
