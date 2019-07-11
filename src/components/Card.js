/**
 * Module dependencies.
 */
import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; //Module to create gradients
import CustomButton from "./Button";
import Logo from "./Logo";


/**
 * Card Component which shows the active coupon
 */
const Card = props => (
  <LinearGradient colors={['#b77dff', '#8147ff']} style={styles.card}>
    <Image style={styles.icon} source={require('../../coffee.png')} />
    <Text style={styles.text}>{props.coupon.description}</Text>
    <View style={styles.buttonContainer}>
      <CustomButton label="Abbuchen" success={true} handleClick={props.handleButtonClick} />
    </View>
  </LinearGradient>
);

const styles = {
  card: {
    margin: 15,
    marginTop: 5,
    borderColor: "#fff",
    height: 500,
    borderRadius: 12,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  buttonContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    alignSelf: "center",
    color: "#fff",
    fontWeight: 'bold',
    fontFamily: "Avenir Next"
  },
  icon: {
    height: 200,
    resizeMode: "contain",
    marginBottom: 60,
    alignSelf: "center"
  }
}

export default Card;