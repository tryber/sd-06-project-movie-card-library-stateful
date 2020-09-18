import React from 'react'

class AddMovie extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action'
    }
  }

  handleChange({ target }) {
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  handleClick() {
    this.props.onClick(this.state)

    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action'
    })
  }

  render() {
    const { onClick } = this.props
    const {title, subtitle, imagePath, storyLine, rating, genre } = this.state

    return(
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título
          <input data-testid="title-input" type="text" name="title" value={title} onChange={this.handleChange}></input>
        </label>
        <label data-testid="subtitle-input-label">Subtítulo
          <input data-testid="subtitle-input" type="text" name="subtitle" value={subtitle} onChange={this.handleChange}></input>
        </label>
        <label data-testid="image-input-label">Imagem
          <input data-testid="image-input" type="text" name="imagePath" value={imagePath} onChange={this.handleChange}></input>
        </label>
        <label data-testid="storyline-input-label">Sinopse
          <textarea data-testid="storyline-input" name="storyLine" value={storyLine} onChange={this.handleChange}></textarea>
        </label>
        <label data-testid="rating-input-label">Avaliação
          <input data-testid="rating-input" type="number" name="rating" value={rating} onChange={this.handleChange}></input>
        </label>
        <label data-testid="genre-input-label">Gênero
          <select data-testid="genre-input" name="genre" onChange={this.handleChange} value={genre}>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={this.handleClick}>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;
