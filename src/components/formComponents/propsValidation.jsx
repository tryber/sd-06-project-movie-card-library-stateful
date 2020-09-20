import PropTypes from 'prop-types';

const props = {
  state: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool]).isRequired,
  name: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  ctl: PropTypes.func.isRequired,
  testDesc: PropTypes.string,
};

export default props;
