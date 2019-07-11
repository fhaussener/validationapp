/**
 * Module dependencies.
 */
import React from 'react';
import { Image } from 'react-native';

/**
  * Component which is shown on a successfull booking request
  */
const SuccessIcon = () => (
  <Image
    source={require('../../success_icon.png')}
    style={{ width: 100, height: 84 }}
  />
);

export default SuccessIcon;