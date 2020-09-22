import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { id, ty, te, on, va} = this.props.objTextarea
    return (
      <textarea id={id} type={ty} data-testid={te} onChange={on} value={va}>
      </textarea>
    );
  }
}

export default Textarea;
