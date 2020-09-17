import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label data-testid="title-input-label">Título
            <input type="text" data-testid="title-input"/>
          </label>
          <label data-testid="subtitle-input-label">Subtítulo
            <input type="text" data-testid="subtitle-input"/>
          </label>
          <label data-testid="image-input-label">Imagem
            <input type="text" data-testid="image-input"/>
          </label>
          <label data-testid="storyline-input-label">Sinopse
            <textarea data-testid="storyline-input"></textarea>
          </label>
          <label data-testid="rating-input-label">Avaliação
            <input type="number" data-testid="rating-input"/>
          </label>
          <label data-testid="genre-input-label">Gênero
            <select data-testid="genre-input">
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
