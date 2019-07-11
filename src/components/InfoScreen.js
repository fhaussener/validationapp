/**
 * Module dependencies.
 */
import React from 'react';
import { StyleSheet, Text, View, Alert, Vibration } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';//used to show loading-animation while fetching
import axios from 'axios';
import LogoTraffy from './Logo';
import Valid from "./Valid";
import Error from "./Error";
const API_URI = "http://172.20.10.2:8080/api/v1/coupons/";

//Variables for canceling the axios request
const CancelToken = axios.CancelToken;
let cancel;


/**
 * InfoScreen component is a Container for the the components, 
 * which show information about the coupon.
 *
 */
class InfoScreen extends React.Component {

  //Setup Style for the Navigation Header
  static navigationOptions = {
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
    this.state = {
      description: "",
      expires: "",
      isvalid: Boolean,
      errorMessage: "",
      coupon: {},
      showAlert: false,
      visible: false
    }
  }

  //callback function to handle button click
  popToTop = () => {
    //function from react-navigation, pops the stacknavigatior and navigates to the first screen.
    this.props.navigation.popToTop()
  }

  /*
   * Request the coupon object with the code
   */
  requestCode = (code) => {
    //check that cancel isn't undefined
    if (cancel != undefined) {
      cancel();
    }
    this.setState({ visible: true })
    //create GET Request with code and add the cancel parameter
    axios.get(API_URI + code, {
      cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      })
    }).then(response => {
      this.checkUsed(response.data) //check if code is valid
    })
      .catch(error => {
        //shows the error message
        this.setState({ isValid: false, visible: false, errorMessage: "Code wurde nicht gefunden" })
      });
  }

  /*
   * check if coupon is not used before and coupon is not expired
   */
  checkUsed = (coupon) => {
    const dateTime = Date.now(); //get current date
    const timestamp = Math.floor(dateTime / 1000); //get unix time of current date
    const exp = coupon.expires

    if (!coupon.used) {
      if (timestamp > exp) {
        //code is expired
        this.setState({ isValid: false, visible: false, errorMessage: "Code ist abgelaufen" })
      } else {
        //code is valid an usable
        this.setState({ isValid: true, visible: false, coupon: coupon })
      }
    } else {
      //code was already used
      this.setState({ isValid: false, visible: false, errorMessage: "Code wurde schon eingelöst" })
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    const code = navigation.getParam('code', 'NO-Code'); //get param from navigation, if not available set NO-Code
    this.requestCode(code)
  }

  componentWillUnmount() {
    cancel(); //cancel the fetch request
  }

  render() {
    const { navigation } = this.props;
    const code = navigation.getParam('code', 'NO-Code');
    return (
      <View style={{ flex: 1, backgroundColor: "#3c3b3b" }}>
        {/*Check if isValid is true, show Valid component on true, show Error Component on false*/}
        {this.state.isValid ? <Valid valid={this.state.isValid} coupon={this.state.coupon} handlePop={() => this.popToTop()} /> : <Error errorMessage={this.state.errorMessage} valid={this.state.isValid} handleButtonClick={() => this.popToTop()} />}
        <View style={{ flex: 1 }}>
          {/*Show a loading animation if visible is true*/}
          <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{ color: '#FFF' }} overlayColor={"rgba(0, 0, 0, 0.25)"} />
        </View>
      </View>
    );
  }
}


export default InfoScreen;