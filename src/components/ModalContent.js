/**
 * Module dependencies.
 */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';//used to create a gradient as a background 
import CustomButton from './Button'
import ErrorIcon from './ErrorIcon'
import SuccessIcon from './SuccessIcon'
import ErrorText from './ErrorText.js'


/**
 * Setup content of Modal
 */
const ModalContent = props => (
  <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
    {/*If success is true, show CardSucces else show CardError component*/}
    {props.success ? <CardSuccess /> : <CardError errorMessage={props.message} />}
    <CustomButton label="Schliessen" success={props.success} handleClick={props.handleClick} />
  </View>
);

/**
 * Component which shows an success-alert in modal
 */
const CardSuccess = () => (
  <View>
    <LinearGradient colors={['#b77dff', '#8147ff']} style={styles.card}>
      <Text style={styles.text}>Abbuchung erfolgreich</Text>
      <SuccessIcon />
    </LinearGradient>
  </View>
);

/**
 * Component which shows an error alert in modal
 */
const CardError = (props) => (
  <View style={styles.error}>
    <Text style={styles.text}>Fehler beim Abbuchen</Text>
    <ErrorIcon />
    <ErrorText message={props.errorMessage} />
  </View>
);

const styles = {
  card: {
    margin: 20,
    height: 300,
    borderColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  error: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    marginBottom: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontFamily: "Avenir Next"
  }
}

export default ModalContent;