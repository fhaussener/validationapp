import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';

/**
 * Component to show danger icon on bad_request/error
 */
class ErrorIcon extends React.Component {
  render() {
    return (
      <Image
        source={require('../../bad_Request.png')}
        style={{ width: 60, height: 220, margin: 15, alignSelf: "center" }}
      />
    );
  }
}
export default ErrorIcon;