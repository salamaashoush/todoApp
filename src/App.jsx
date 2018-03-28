import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoFilters from './components/TodoFilters';

export default class App extends Component {
  state = {
    todos: [],
    newTodo: '',
    todosFilter: 'all',
  };
  getFilteredTodos = () => {
    switch (this.state.todosFilter) {
      case 'all':
        return this.state.todos;
      case 'completed':
        return this.state.todos.filter(todo => todo.completed);
      case 'active':
        return this.state.todos.filter(todo => !todo.completed);
      default:
        return this.state.todos;
    }
  };
  handleFilterTodos = (filter) => {
    this.setState({ todosFilter: filter });
  };
  handleAddTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { completed: false, title: this.state.newTodo, id: Math.floor(Math.random() * 10000) },
      ],
      newTodo: '',
    });
  };
  handleDeleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  };
  handleEditTodo = (id, newValue) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newValue };
        }
        return todo;
      }),
    });
  };
  handleToggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };
  render() {
    return (
      <div>
        <TodoInput
          value={this.state.newTodo}
          onChange={v => this.setState({ newTodo: v })}
          onSubmit={this.handleAddTodo}
          buttonText="Add Todo"
        />
        <TodoList
          todos={this.getFilteredTodos()}
          onDeleteTodo={this.handleDeleteTodo}
          onEditTodo={this.handleEditTodo}
          onToggleTodo={this.handleToggleTodo}
        />
        <TodoFilters value={this.state.todosFilter} onChange={this.handleFilterTodos} />
      </div>
    );
  }
}
