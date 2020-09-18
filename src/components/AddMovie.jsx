import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.upateStatus = this.upateStatus.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  upateStatus({ target }) {
    this.setState({title: target.value});
    console.log(target.title);
  }

  render() {
    const { onclick } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="title" data-testid="title-input-label">Título
            <input id="title" onChange={this.upateStatus}
              value={this.state.title} type="text" data-testid="title-input"
            />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo
            <input id="subtitle" type="text" data-testid="subtitle-input" />
          </label>
          <label htmlFor="img" data-testid="image-input-label">Imagem
            <input id="img" type="text" data-testid="image-input" />
          </label>
          <label htmlFor="sinopse" data-testid="storyline-input-label">Sinopse
            <textarea id="sinopse" data-testid="storyline-input" />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">Avaliação
            <input id="rating" type="number" data-testid="rating-input" />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">Gênero
            <select id="genre" data-testid="genre-input">
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button">Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
