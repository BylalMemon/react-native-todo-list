// @flow
import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

const white = 'white';
const primary = '#0070E0';

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: primary,
    backgroundColor: white,
  },
  fill: {
    backgroundColor: primary,
    width: 17,
    height: 17,
    borderRadius: 10,
  },
});

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.setState(state => ({ selected: !state.selected }))}
        style={styles.background}
        underlayColor="whitesmoke"
      >
        {
          this.state.selected
            ? <View style={styles.fill} />
            : <View />
        }
      </TouchableHighlight>
    );
  }
}

export default Checkbox;
