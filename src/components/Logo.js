/**
 * Module dependencies.
 */
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

/**
 * Component to show Company logo
 */
const Logo = () => (
  <Image
    source={require('../../Logo_Traffy.png')}
    style={{ width: 30, height: 30 }}
  />
);

export default (Logo);