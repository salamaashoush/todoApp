import React from 'react';
import PropTypes from 'prop-types';

const TodoFilters = ({ onChange, value }) => (
  <div>
    <label htmlFor="all">
      <input type="radio" value="all" onChange={e => onChange(e.target.value)} checked={value === 'all'} id="all" />
      All
    </label>
    <label htmlFor="all">
      <input type="radio" value="active" onChange={e => onChange(e.target.value)} checked={value === 'active'} id="active" />
      Active
    </label>
    <label htmlFor="completed">
      <input type="radio" value="completed" onChange={e => onChange(e.target.value)} checked={value === 'completed'} id="completed" />
      Completed
    </label>
  </div>
);

TodoFilters.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoFilters;
