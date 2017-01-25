import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import TodoItem from './TodoItem';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20,
  },
});

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          selected: false,
          text: 'Buy milk',
        },
        {
          id: 2,
          selected: false,
          text: 'Buy potatoes',
        },
      ],
    };
  }

  changeTodoItem(id, values) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        ...values,
      };
    });
    this.setState({ todos: newTodos });
  }

  removeTodoItem(id) {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {
          this.state.todos.map(({ id, selected, text }) => (
            <TodoItem
              key={id}
              selected={selected}
              text={text}
              onChange={values => this.changeTodoItem(id, values)}
              onDelete={() => this.removeTodoItem(id)}
            />
          ))
        }
      </View>
    );
  }
}

export default TodoList;
