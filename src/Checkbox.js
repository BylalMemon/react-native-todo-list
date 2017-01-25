// @flow
import React from 'react';
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

type Props = {
  value: Boolean,
  onChange: (val: Boolean) => void,
};

const Checkbox = ({ value, onChange }: Props) => (
  <TouchableHighlight
    onPress={() => onChange(!value)}
    style={styles.background}
    underlayColor="whitesmoke"
  >
    {
      value
        ? <View style={styles.fill} />
        : <View />
    }
  </TouchableHighlight>
);

export default Checkbox;
