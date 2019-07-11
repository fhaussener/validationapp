/**
 * Module dependencies.
 */
import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

/**
 * CustomButton is a styled TouchableHighlight component.
 *
 */
const CustomButton = props => (
  <TouchableHighlight
    onPress={() => props.handleClick()}
    style={styles.button}
  >
    {/*if props.success is true, the use first color (#8147FF), else use second color (#de5353)*/}
    <Text style={[styles.buttonText, props.success ? { color: '#8147FF' } : { color: '#de5353' }]}>{props.label}</Text>
  </TouchableHighlight >
);

const styles = {
  button: {
    backgroundColor: "#FFF",
    margin: 20,
    marginBottom: 10,
    justifyContent: 'flex-end',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 'bold',
    fontFamily: "Avenir-Black"
  }
}

export default CustomButton;