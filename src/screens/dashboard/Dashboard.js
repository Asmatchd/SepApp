/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
var validator = require('email-validator');

import {primaryColor, white, silver, secondaryColor, black} from '../Dimens';
import {AppInput, AppBtn} from '../../components';

export class Dashboard extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {/* first */}
          <TouchableOpacity
            style={{
              height: h('17%'),
              width: '80%',
              backgroundColor: '#fff',
              borderColor: primaryColor,
              borderWidth: h('0.1%'),
              borderRadius: h('1%'),
              marginTop: h('8%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/first.png')}
              style={{
                height: h('6%'),
                width: h('6%'),
                marginBottom: h('2%'),
              }}
            />

            <Text>Get Doctor Appointment</Text>
          </TouchableOpacity>

          {/* second */}
          <TouchableOpacity
            style={{
              height: h('17%'),
              width: '80%',
              backgroundColor: '#fff',
              borderColor: primaryColor,
              borderWidth: h('0.1%'),
              borderRadius: h('1%'),
              marginTop: h('3%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/second.png')}
              style={{
                height: h('6%'),
                width: h('6%'),
                marginBottom: h('2%'),
              }}
            />

            <Text>All Appointments</Text>
          </TouchableOpacity>

          {/* third */}
          <TouchableOpacity
            style={{
              height: h('17%'),
              width: '80%',
              backgroundColor: '#fff',
              borderColor: primaryColor,
              borderWidth: h('0.1%'),
              borderRadius: h('1%'),
              marginTop: h('3%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/third.png')}
              style={{
                height: h('6%'),
                width: h('6%'),
                marginBottom: h('2%'),
              }}
            />

            <Text>Waiting Room</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
