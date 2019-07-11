import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Camera from 'react-native-camera';
import InfoScreen from './src/components/InfoScreen';
import { StackNavigator, createStackNavigator } from "react-navigation";
import ScannerScreen from './src/components/Scanner';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}



const RootStack = createStackNavigator(
  {
    Scanner: { screen: ScannerScreen },
    Info: { screen: InfoScreen }
  }, {
    initialRouteName: 'Scanner',
  }
)

const styles = {
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}