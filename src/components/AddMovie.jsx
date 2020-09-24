import React from "react";
import PropTypes from "prop-types";

class AddMovie extends React.Component {
  render() {
    const { onClick } = this.props;
    return <form data-testid="add-movie-form">Teste</form>;
  }
}

export default AddMovie;
