import React from 'react';
import PropTypes from 'prop-types';

const TodoInput = ({
  value, onSubmit, onChange, buttonText, onCancel, showCancel,
}) => (
  <div>
    <input type="text" onChange={e => onChange(e.target.value)} value={value} />
    <button onClick={() => onSubmit()}>{buttonText}</button>
    {showCancel && <button onClick={() => onCancel()}>Cancel</button>}
  </div>
);

TodoInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  showCancel: PropTypes.bool,
  onCancel: PropTypes.func,
};

TodoInput.defaultProps = {
  showCancel: false,
  onCancel: () => {},
};

export default TodoInput;
