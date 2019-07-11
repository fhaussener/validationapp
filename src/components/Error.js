/**
 * Module dependencies.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ErrorIcon from './ErrorIcon';
import ErrorText from './ErrorText';
import ValidStatus from "./ValidStatus";
import CustomButton from "./Button";



/**
 * Component shown on invalid, expired or used Coupon in infoscreen
 */
const Error = props => (
  <View style={styles.container}>
    <ValidStatus valid={props.valid} />
    <View style={styles.errorContainer}>
      <ErrorIcon />
      <ErrorText style={styles.message} message={props.errorMessage} />
      <CustomButton style={styles.button} label="Neu versuchen" success={false} handleClick={props.handleButtonClick} />
    </View >
  </View >
);


const styles = {
  container: {
    justifyContent: "center",
  },
  errorContainer: {
    marginTop: 70,
  }
}

export default Error;