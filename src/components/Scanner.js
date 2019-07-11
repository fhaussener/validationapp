/**
 * Module dependencies.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from 'react-native-camera'; //used for the camera functionality
import LogoTraffy from './Logo';
import _ from 'lodash'; //used for the thorttle function


/**
 * ScannerScreen Component creates a camera preview. 
 * with barcode-scan functionality.
 */
class ScannerScreen extends React.Component {
  //Setup Style for the Navigation Header
  static navigationOptions = {
    title: 'Scanner',
    headerStyle: {
      backgroundColor: '#8147FF',
    },
    headerTintColor: '#fff',
    headerTitle: <LogoTraffy />,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);

    //workaround for react-native-camera bug, because barcode scanner is too fast
    this.onBarCodeRead = _.throttle(this.onBarCodeRead, 1200);
  }

  //onscan handler, triggers when qr-coode is found, extracting the data from the qr-code
  onBarCodeRead(event) {
    const { navigate } = this.props.navigation;
    navigate('Info', { code: event.data }) //navigating to Info screen, passing the code value
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        {/*setup camera with barCodeType of QRCode(onBarCodeRead only triggers when QR-Code)*/}
        <Camera
          ref={cam => this.camera = cam}
          style={styles.preview}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          barCodeTypes={['org.iso.QRCode']}
        >
        </Camera>
      </View>
    );
  }
}

export default (ScannerScreen);

const styles = {
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}