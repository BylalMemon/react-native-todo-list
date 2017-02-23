/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoListContainer from './src/TodoListContainer';

const initialState = {
  todos: [],
  latestId: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newId = state.latestId + 1;
      const newTodo = {
        id: newId,
        ...action.payload,
      };

      return {
        todos: [...state.todos, newTodo],
        latestId: newId,
      };
    }
    case 'EDIT_TODO': {
      const index = state.todos.findIndex(todo =>
        todo.id === action.payload.id,
      );
      const todo = state.todos[index];
      const editedTodo = {
        ...todo,
        ...action.payload,
      };

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          editedTodo,
          ...state.todos.slice(index + 1),
        ],
      };
    }
    case 'DELETE_TODO': {
      const indexToRemove = state.todos.findIndex(todo =>
        todo.id === action.payload.id,
      );

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, indexToRemove),
          ...state.todos.slice(indexToRemove + 1),
        ],
      };
    }
    default: return state;
  }
};

const store = createStore(reducer, initialState);

export default class todo extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoListContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('todo', () => todo);
