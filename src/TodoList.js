import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';

import Button from './Button';
import TodoItem from './TodoItem';

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

type Props = {
  todos: Array<Object>,
  addTodo: () => void,
  editTodo: () => void,
  deleteTodo: () => void,
};

class TodoList extends Component {
  props: Props

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
  }

  render() {
    const todos = this.dataSource.cloneWithRows(this.props.todos);

    return (
      <View style={styles.wrapper}>
        <Button onPress={() => this.props.addTodo()} style={styles.buttonStyle}>
          <Text style={styles.addText}>Add</Text>
        </Button>
        {
            this.props.todos.length === 0
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
                      onChange={values => this.props.editTodo(id, values)}
                      onDelete={() => this.props.deleteTodo(id)}
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
