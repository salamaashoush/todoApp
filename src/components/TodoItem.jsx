import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({
  todo, onCheck, onDelete, onDoubleClick,
}) => (
  <li>
    <input type="checkbox" checked={todo.completed} onChange={() => onCheck(todo.id)} />
    <span onDoubleClick={onDoubleClick}>{todo.title}</span>
    <button onClick={() => onDelete(todo.id)}>delete</button>
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
};

export default TodoItem;
