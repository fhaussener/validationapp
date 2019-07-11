/**
 * Module dependencies.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; //used to create a gradient as a background
import CustomButton from "./Button";
import Card from "./Card";
import ValidStatus from "./ValidStatus";
import Expires from "./Expires";
import axios from "axios";
const API_URI = "http://172.20.10.2:8080/api/v1/coupons/";
import ModalContent from "./ModalContent"
import Modal from "react-native-modal";// used for creating an overlay with modal functionality

/**
  * Container Component for showing a valid code
  * with the booking option
  */
class Valid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      success: Boolean,
      errorMessage: ""
    };
  }

  /**
   * handles the booking of the coupon code,
   * if book button is clicked. Also rechecking if coupon is valid
   */
  handleBooking = (code) => {
    axios.get(API_URI + code).then(response => {
      var coupon = response.data
      if (!coupon.used) {
        const dateTime = Date.now(); //get current date
        const timestamp = Math.floor(dateTime / 1000);//get unix time of current date
        const exp = coupon.expires
        if (timestamp > exp) {
          //Code is expired
          this.setState({ isModalVisible: true, errorMessage: "Code ist abgelaufen", success: false })
          return false
        } else {
          axios.put(API_URI + coupon.code)
            .then(response => {
              //Booking is valid
              this.setState({ isModalVisible: true, success: true })
            })
            .catch(error => {
              //Booking did not work
              this.setState({ isModalVisible: true, success: false })
            });
        }
      } else {
        //code was already used
        this.setState({ isModalVisible: true, errorMessage: "Code wurde schon eingelöst", success: false })
      }
    })
      .catch(error => {
        //booking request not working
        console.log("error at request" + error)
        this.setState({ success: false })
      });



  }


  //showing and hiding the modal
  toggleModal = (e) => {
    if (this.state.success) {
      //modal is shown
      this.props.handlePop(); //pop back from stacknavigator, back to scanner
      this.setState({ isModalVisible: !this.state.isModalVisible });
    } else {
      //modal is hidden 
      this.setState({ isModalVisible: !this.state.isModalVisible });
    }
  }



  render() {
    const props = this.props
    return (
      <View>
        <ValidStatus valid={props.valid} />
        <Card coupon={props.coupon} success={this.state.success} handleButtonClick={() => this.handleBooking(props.coupon.code)} />
        <Expires expires={props.coupon.expires} />
        <Modal isVisible={this.state.isModalVisible}>
          <ModalContent success={this.state.success} message={this.state.errorMessage} handleClick={(e) => this.toggleModal(e)} />
        </Modal>
      </View >
    )
  }
}


export default Valid;