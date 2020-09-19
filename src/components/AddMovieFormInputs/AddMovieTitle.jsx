import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovirTitle extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="add-movie-title-container" data-testid="title-input-label">
        <label htmlFor="title">
          Título
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            // onChange={Aqui tem que atualizar o state de ADDMOVIE} 
          />
        </label>
      </div>
    );
  }
}
