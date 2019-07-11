/**
 * Module dependencies.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Moment from 'react-moment'; //used to format unix Timestamp
Moment.globalFormat = 'HH:mm'; //set the time format for react-moment 


/**
 * Component to format unix timestamp
 */
const Expires = props => (
  <View>
    <Text style={styles.text}> Gültig bis{" "}
      {/*Moment component formats the props.expires(unix) and shows like Text*/}
      <Moment element={Text} unix>{props.expires}</Moment>
    </Text>
  </View >
);

const styles = {
  text: {
    marginTop: 5,
    fontSize: 24,
    alignSelf: "center",
    color: "#fff",
    fontFamily: "Avenir Next"
  }
}

export default Expires;