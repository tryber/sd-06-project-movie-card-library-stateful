import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.upateStatus = this.upateStatus.bind(this)

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  upateStatus( {target} ) {

    //const { title } = target

    this.setState({
      title: target.value 
    })
    console.log(target.title)
  }

  render() {

    const { onclick } = this.props

    return (
      <div>
        <form>
          <label data-testid="title-input-label">Título
            <input onChange={this.upateStatus} value={this.state.title} type="text" data-testid="title-input"/>
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
          <button data-testid="send-button">Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
