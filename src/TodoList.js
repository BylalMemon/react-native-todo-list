import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';

import Button from './Button';
import TodoItem from './TodoItem';

let counterId = 23;

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
  listView: {
    alignSelf: 'stretch',
  },
});

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 23, selected: false, text: 'scroll' },
        { id: 22, selected: false, text: 'to' },
        { id: 21, selected: false, text: 'need' },
        { id: 20, selected: false, text: "I'll" },
        { id: 19, selected: false, text: 'before' },
        { id: 18, selected: false, text: 'need' },
        { id: 17, selected: false, text: "i'll" },
        { id: 16, selected: false, text: 'items' },
        { id: 15, selected: false, text: 'much' },
        { id: 14, selected: false, text: 'how' },
        { id: 13, selected: false, text: 'sure' },
        { id: 12, selected: false, text: 'not' },
        { id: 11, selected: false, text: "i'm" },
        { id: 10, selected: false, text: 'but' },
        { id: 9, selected: false, text: 'Scrollview' },
        { id: 8, selected: false, text: 'A' },
        { id: 7, selected: false, text: 'With' },
        { id: 6, selected: false, text: 'Develop' },
        { id: 5, selected: false, text: 'To' },
        { id: 4, selected: false, text: 'Test' },
        { id: 3, selected: false, text: 'A' },
        { id: 2, selected: false, text: 'Is' },
        { id: 1, selected: false, text: 'This' },
      ],
    };
  }

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
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
    console.log('State:', JSON.stringify(this.state, null, 2));
    const todos = this.dataSource.cloneWithRows(this.state.todos);

    return (
      <View style={styles.wrapper}>
        <Button onPress={() => this.addTodoItem()} style={styles.buttonStyle}>
          <Text style={styles.addText}>Add</Text>
        </Button>
        {
            this.state.todos.length === 0
            ? <Text>No todos yet</Text>
            : (
              <ListView
                style={styles.listView}
                dataSource={todos}
                renderRow={
                  ({ id, selected, text }) => (
                    <TodoItem
                      key={id}
                      selected={selected}
                      text={text}
                      onChange={values => this.changeTodoItem(id, values)}
                      onDelete={() => this.removeTodoItem(id)}
                    />
                  )
                }
              />
            )
          }
      </View>
    );
  }
}

export default TodoList;
