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

type Props = {
  selected: Boolean,
  text: string,
  onChange: () => void,
  onDelete: () => void,
};

class TodoItem extends Component {
  props: Props

  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.text.length === 0,
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Checkbox
          value={this.props.selected}
          onChange={val => this.props.onChange({ selected: val })}
        />
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
                defaultValue={this.props.text}
                onChangeText={text => this.props.onChange({ text })}
                style={styles.input}
              />
            )
            : (
              <Text style={styles.todoText}>
                {this.props.text}
              </Text>
            )
          }
        </TouchableHighlight>
        {
          this.state.editing
            ? <Button title="Done" onPress={() => this.setState({ editing: false })} />
            : (
              <TouchableHighlight
                style={styles.delete}
                onPress={() => this.props.onDelete()}
                underlayColor="lightgray"
              >
                <Image source={deleteIcon} style={styles.delete} />
              </TouchableHighlight>
            )
        }
      </View>
    );
  }
}

export default TodoItem;
