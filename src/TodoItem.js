// @flow
import React, { Component } from 'react';
import { View, Text, TextInput, Image, Button, TouchableHighlight, StyleSheet } from 'react-native';
import Checkbox from './Checkbox';
import deleteIcon from './assets/delete.png';

const lightgray = 'lightgray';
const gray = 'gray';

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',

    padding: 7,
    paddingLeft: 12,
    paddingRight: 12,
    height: 50,

    backgroundColor: lightgray,
    borderBottomWidth: 1,
    borderColor: gray,
  },
  textWrapper: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
  },
  todoText: {
    fontSize: 17,
  },
  input: {
    height: 40,
  },
  delete: {
    width: 25,
    height: 25,
  },
});

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      text: 'buy milk',
      editing: false,
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Checkbox />
        <TouchableHighlight
          style={styles.textWrapper}
          onPress={() => this.setState({ editing: true })}
          underlayColor="lightgray"
        >
          {
            this.state.editing
            ? (
              <TextInput
                autoFocus
                defaultValue={this.state.text}
                onChangeText={text => this.setState({ text })}
                style={styles.input}
              />
            )
            : (
              <Text style={styles.todoText}>
                {this.state.text}
              </Text>
            )
          }
        </TouchableHighlight>
        {
          this.state.editing
            ? <Button title="Done" onPress={() => this.setState({ editing: false })} />
            : <Image source={deleteIcon} style={styles.delete} />
        }
      </View>
    );
  }
}

export default TodoItem;
