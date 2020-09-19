// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';


class AddMovie extends React.Component {
  constructor() {
      super();

      this.handleChange = this.handleChange.bind(this)
      this.result = this.result.bind(this)

      this.state = {
          title: '',
          subtitle: '',
          imagePath: '',
          storyline: '',
          rating: 0,
          genre: 'action',
        }
      }

      handleChange({target}) {
          const {name, value} = target
          this.setState({ [name]: value})
        }

      result() {
          const { onClick } = this.props
          onClick(this.state)
          this.setState({
              title: '',
              subtitle: '',
              imagePath: '',
              storyline: '',
              rating: 0,
              genre: 'action',
          
          })
      }

  render() {
      const {title, subtitle, imagePath, storyline, rating, genre} = this.state
      return (
          <form data-testid="add-movie-form">

              <label for="title-input" data-testid="title-input-label">Título</label>
              <input type="text" value={title} data-testid="title-input" onChange={this.handleChange} name="title" />

              <label for="subtitle-input" data-testid="subtitle-input-label">Subtítulo</label>
              <input type="text" value={subtitle} data-testid="subtitle-input" onChange={this.handleChange} name="subtitle" />

              <label for="image-input" data-testid="image-input-label">Imagem</label>
              <input type="text" value={imagePath} data-testid="image-input" onChange={this.handleChange} name="imagePath" />

              <label for="storyline-input" data-testid="storyline-input-label">Sinopse</label>
              <textarea value={storyline} data-testid="storyline-input" onChange={this.handleChange} name="storyline">
              </textarea>

              <label for="rating-input" data-testid="rating-input-label">Avaliação</label>
              <input type="number" value={rating} data-testid="rating-input" onChange={this.handleChange} name="rating" />

              <label data-testid="genre-input-label">Gênero</label>
              <select value={genre} data-testid="genre-input" onChange={this.handleChange} name="genre">
                  <option value="action" data-testid="genre-option">Ação</option>
                  <option value="comedy" data-testid="genre-option">Comédia</option>
                  <option value="thriller" data-testid="genre-option">Suspense</option>
              </select>

              <button type="submit" data-testid="send-button" onClick={this.result}>Adicionar filme</button>

          </form>
      )
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired }

export default AddMovie;
