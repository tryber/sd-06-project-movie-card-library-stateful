import React from 'react'

class AddMovie extends React.Component {
  constructor(props) {
    super()

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    if (name === 'rating') {
      return this.setState({ [name]: Number(value) });
    }
    return this.setState({ [name]: value });
  }
  
  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título</label>
        <input
          id="title"
          value={this.state.title}
          type="text"
          onChange={(e) => handleChange(e)}
          data-testid="title-input"
        />

        <label data-testid="subtitle-input-label">Subtítulo</label>
        <input
          id="subtitle"
          type="text"
          value={this.state.subtitle}
          onChange={(e) => handleChange(e)}
          data-testid="subtitle-input"
        ></input>

        <label data-testid="image-input-label">Imagem</label>
        <input
          id="imagePath"
          type="text"
          value={this.state.imagePath}
          onChange={(e) => handleChange(e)}
          data-testid="image-input"
        ></input>

        <label data-testid="storyline-input-label">Sinopse</label>
        <textarea
          id="storyline"
          value={this.state.storyline}
          onChange={(e) => handleChange(e)}
          data-testid="storyline-input"
        >
        </textarea>

        <label
          htmlFor="rating-input"
          data-testid="rating-input-label">Avaliação
        </label>
        <input
          id="rating"
          type="number"
          value={this.state.rating}
          onChange={(e) => handleChange(e)}
          data-testid="rating-input"
        ></input>

        <label
          htmlFor="genre"
          data-testid="genre-input-label"
        >Gênero</label>
        <select
          id="genre"
          htmlFor="genre-input"
          value={this.state.genre}
          onChange={(e) => handleChange(e)}
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>

        <button
          onClick={() => {
            this.setState({
              subtitle: "",
              title: "",
              imagePath: "",
              storyline: "",
              rating: 0,
              genre: "action",
            }, this.props.onClick)
          }}
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    )
  }
  
}

export default AddMovie;