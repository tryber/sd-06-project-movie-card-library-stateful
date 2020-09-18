import React from 'react';

class AddMovie extends React.Component {
  constructor () {
    super()
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    }
    this.mudaEstado = this.mudaEstado.bind(this);
  }

  mudaEstado(evento) {
    this.setState({
      [evento.target.name]: evento.target.value
    })
  }

  // tem que dar um name igual ao state inicial para cada input e chamar essa mesma função em todas elas
// fazer a função que chama a função de onclick que será passada como props e chamar no botão que ainda não está criado

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título
          <input data-testid="title-input" type="text" name="title" value={this.state.title} onChange={this.mudaEstado} />
        </label>
        <label data-testid="subtitle-input-label">Subtítulo
          <input data-testid="subtitle-input" type="text" name="subtitle" value={this.state.subtitle} onChange={this.mudaEstado} />
        </label>
        <label data-testid="image-input-label">Imagem
          <input data-testid="image-input" type="text" name="imagePath" value={this.state.imagePath} onChange={this.mudaEstado} />
        </label>
        <label data-testid="storyline-input-label">Sinopse
          <input data-testid="storyline-input" type="textarea" name="storyline" value={this.state.storyline} onChange={this.mudaEstado} />
        </label>
        <label data-testid="rating-input-label">Avaliação
          <input data-testid="rating-input" type="number" name="rating" value={this.state.rating} onChange={this.mudaEstado} />
        </label>
        <label htmlFor="select-options" data-testid="genre-input-label">Gênero
          <select data-testid="genre-input" id="select-options" name="genre" value={this.state.genre} onChange={this.mudaEstado} >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
