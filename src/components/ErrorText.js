/**
 * Module dependencies.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Component to show the Error message
 */
const ErrorText = props => (
  <Text style={styles.text}>{props.message}</Text>
);

const styles = {
  text: {
    fontSize: 20,
    margin: 10,
    alignSelf: "center",
    color: "#fff",
    fontFamily: "Avenir Next"
  }

}

export default ErrorText;