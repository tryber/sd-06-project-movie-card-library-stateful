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
        <select value={genre} onChange={this.change}
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
          <input value={title} onChange={this.change}
            id="title" data-testid="title-input" type="text" name="title"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo
          <input value={subtitle} onChange={this.change}
            data-testid="subtitle-input" type="text" name="subtitle" id="subtitle"
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">Imagem
          <input value={imagePath} onChange={this.change}
            id="imagePath" data-testid="image-input" type="text" name="imagePath"
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse
          <input onChange={this.change} value={storyline}
            data-testid="storyline-input" type="textarea" name="storyline" id="storyline"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">Avaliação
          <input value={rating} onChange={this.change}
            id="rating" data-testid="rating-input" type="number" name="rating"
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
