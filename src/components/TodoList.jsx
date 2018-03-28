import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends Component {
  state = {
    inEdit: '',
    newTitle: '',
  };
  render() {
    const {
      todos, onDeleteTodo, onToggleTodo, onEditTodo,
    } = this.props;
    return (
      <ul>
        {todos.map(todo =>
            (todo.id === this.state.inEdit ? (
              <li key={todo.id}>
                <TodoInput
                  value={this.state.newTitle}
                  onChange={v => this.setState({ newTitle: v })}
                  buttonText="Sumbit"
                  showCancel
                  onSubmit={() => {
                  onEditTodo(todo.id, this.state.newTitle);
                  this.setState({ inEdit: null });
                }}
                  onCancel={() => this.setState({ inEdit: null })}
                />
              </li>
            ) : (
              <TodoItem
                todo={todo}
                key={todo.id}
                onDelete={onDeleteTodo}
                onCheck={onToggleTodo}
                onDoubleClick={() => this.setState({ inEdit: todo.id, newTitle: todo.title })}
              />
            )))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
};

export default TodoList;
