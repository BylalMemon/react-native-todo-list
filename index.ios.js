/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TodoItem from './src/TodoItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class todo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoItem />
      </View>
    );
  }
}
AppRegistry.registerComponent('todo', () => todo);
