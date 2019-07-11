/**
 * Module dependencies.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


/**
  * Text Component, which automatically shows the right status text, 
  * based on Boolean value of valid. 
  */
const ValidStatus = props => (
  <View style={styles.container}>
    {/*Checks if props.valid is true or false, if true it uses the first option */}
    {props.valid ? <Text style={styles.customText}>Code gültig</Text> : <Text style={styles.customText}>Code ungültig</Text>}
  </View>
)

const styles = {
  container: {
    margin: 20,
  },
  customText: {
    fontSize: 24,
    alignSelf: "center",
    color: "#fff",
    fontFamily: "Avenir Next",
    fontWeight: 'bold',
  }
}

export default ValidStatus;