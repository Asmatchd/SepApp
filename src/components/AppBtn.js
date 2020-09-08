/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {secondaryColor, white} from '../screens/Dimens';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class AppBtn extends Component {
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        style={{
          height: h('6%'),
          width: '60%',
          backgroundColor: secondaryColor,
          borderRadius: h('1%'),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: white,
            fontSize: h('2.5%'),
          }}>
          {this.props.txt}
        </Text>
      </TouchableOpacity>
    );
  }
}
