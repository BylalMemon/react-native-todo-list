import React, { Component } from 'react';

import TodoList from './TodoList';

type Props = {
  subscribe: () => void,
  getState: () => void,
  dispatch: () => void,
};

class TodoListContainer extends Component {
  props: Props

  constructor(props) {
    super(props);
    this.state = this.props.getState();
  }

  componentWillMount() {
    this.props.subscribe(() => {
      const newState = this.props.getState();

      this.setState(newState);
    });
  }

  render() {
    const dispatchAdd = () => this.props.dispatch({
      type: 'ADD_TODO',
      payload: {
        text: '',
      },
    });

    const dispatchEdit = (id, values) => this.props.dispatch({
      type: 'EDIT_TODO',
      payload: { id, ...values },
    });

    const dispatchDelete = id => this.props.dispatch({
      type: 'DELETE_TODO',
      payload: { id },
    });

    return (
      <TodoList
        todos={this.state.todos}
        addTodo={dispatchAdd}
        editTodo={dispatchEdit}
        deleteTodo={dispatchDelete}
      />
    );
  }
}

export default TodoListContainer;
