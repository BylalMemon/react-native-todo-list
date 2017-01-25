import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from './Button';
import TodoItem from './TodoItem';

let counterId = 0;

const white = 'white';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  buttonStyle: {
    alignSelf: 'stretch',
  },
  addText: {
    color: white,
    fontWeight: 'bold',
  },
});

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodoItem() {
    counterId += 1;

    const newTodo = { id: counterId, selected: false, text: '' };

    this.setState({
      todos: [newTodo, ...this.state.todos],
    });
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
    console.log('ids:', this.state.todos.map(({ id }) => id));

    return (
      <View style={styles.wrapper}>
        <Button onPress={() => this.addTodoItem()} style={styles.buttonStyle}>
          <Text style={styles.addText}>Add</Text>
        </Button>
        {
          this.state.todos.length === 0
          ? <Text>No todos yet</Text>
          : this.state.todos.map(({ id, selected, text }) => (
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
