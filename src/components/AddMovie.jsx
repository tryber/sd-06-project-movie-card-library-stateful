import React from 'react'

class AddMovie extends React.Component {
  constructor() {
    super()

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action'
    }
  }

  render() {
    return(
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título
          <input type="text" value={this.state.title}></input>
        </label>
      </form>
    )
  }
}

export default AddMovie;
