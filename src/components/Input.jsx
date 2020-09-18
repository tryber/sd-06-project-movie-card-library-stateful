import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label: lb, type: tp, name: nm, value: val, checked: chk } = this.props.objProps;
    const { handle: hd, inputId: iptId, labelId: lbId } = this.props.objProps;

    return (
      <div>
        <label htmlFor={nm} data-testid={lbId} >{lb}</label>
        <input type={tp} name={nm} value={val} onChange={hd} data-testid={iptId} checked={chk} />
      </div>
    );
  }
}

export default Input;

Input.defaultProps = {
  objProps: {
    label: '',
    type: '',
    name: '',
    value: '',
    checked: false,
    handle: '',
    inputId: '',
    labelId: '',
  },
};

Input.propTypes = {
  objProps: PropTypes.shape(
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.bool,
    PropTypes.func,
    PropTypes.string,
    PropTypes.string,
  ),
};
