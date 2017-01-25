import React, { Component } from 'react';
import type { Element } from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';

const blue = 'blue';
const primary = '#0070E0';
const styles = StyleSheet.create({
  buttonStyles: {
    margin: 10,
    height: 40,
    backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  buttonPressed: {
    backgroundColor: blue,
  },
});

type Props = {
  onPress: () => void,
  style: Object,
  children: Element,
};

class Button extends Component {
  props: Props

  constructor(props) {
    super(props);
    this.state = {
      pressing: false,
    };
  }

  render() {
    const style = this.state.presssing
      ? [styles.buttonStyles, styles.buttonPressed, this.props.style]
      : [styles.buttonStyles, this.props.style];

    return (
      <TouchableHighlight
        style={style}
        onPress={() => this.props.onPress()}
        onPressIn={() => this.setState({ pressing: true })}
        onPressOut={() => this.setState({ pressing: false })}
        underlayColor="transparent"
      >
        {this.props.children}
      </TouchableHighlight>
    );
  }
}

export default Button;
