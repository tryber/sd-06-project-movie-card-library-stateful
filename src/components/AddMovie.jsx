import React, { Component } from 'react';

class AddMovie extends Component{
  constructor() {
    super()
    
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: '',
    }
  }

  handleChange( {target} )  {
    let { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { onClick } = this.props
    return(
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título
          <input name="title" data-testid="title-input" value={this.state.title} onChange={this.handleChange} />
        </label>

        <label data-testid="subtitle-input-label">Subtítulo
          <input name="subtitle" data-testid="subtitle-input" value={this.state.subtitle} onChange={this.handleChange} />
        </label>
        
      </form>
    )
  }
}

export default AddMovie;
