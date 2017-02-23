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
  subscribe: () => void,
  getState: () => void,
  dispatch: () => void,
};

class TodoList extends Component {
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

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
  }

  render() {
    console.log('State:', JSON.stringify(this.state, null, 2));
    const todos = this.dataSource.cloneWithRows(this.state.todos);

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
      <View style={styles.wrapper}>
        <Button onPress={dispatchAdd} style={styles.buttonStyle}>
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
                      onChange={values => dispatchEdit(id, values)}
                      onDelete={() => dispatchDelete(id)}
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
