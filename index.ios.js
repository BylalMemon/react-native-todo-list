/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import TodoList from './src/TodoList';

export default class todo extends Component {
  render() {
    return (
      <TodoList />
    );
  }
}
AppRegistry.registerComponent('todo', () => todo);
