/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {primaryColor, white, silver, secondaryColor} from '../Dimens';

export class SignIn extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          // justifyContent: 'center',
          // flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: primaryColor,
            height: h('30%'),
            width: '100%',
          }}
        />
        <View
          style={{backgroundColor: silver, height: h('67%'), width: '100%'}}
        />

        <View
          style={{
            height: h('70%'),
            // backgroundColor: '#faf',
            marginTop: -h('90%'),
            width: '95%',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: h('15%'),
              // backgroundColor: '#aaf',
              width: '85%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: white,
                fontSize: h('3%'),
                fontWeight: 'bold',
              }}>
              SignUp
            </Text>

            <Text
              style={{
                color: white,
                fontSize: h('1.8%'),
                marginTop: h('1%'),
              }}>
              Create new account
            </Text>
          </View>

          <View
            style={{
              height: h('55%'),
              backgroundColor: white,
              width: '85%',
              borderRadius: h('1%'),
              borderWidth: h('0.3%'),
              borderColor: silver,
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: h('10%'),
                width: h('10%'),
                marginTop: h('2%'),
                marginBottom: h('2%'),
              }}
              source={require('../../assets/logo.png')}
            />

            <TextInput
              style={{
                height: h('6%'),
                width: '80%',
                paddingLeft: h('2%'),
                borderColor: primaryColor,
                borderWidth: h('0.1%'),
                borderRadius: h('1%'),
              }}
              placeholder={'User Name'}
            />

            <TouchableOpacity
              style={{
                height: h('6%'),
                width: '60%',
                backgroundColor: secondaryColor,
                borderRadius: h('1%'),
                marginTop: h('6%'),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: white,
                  fontSize: h('2.5%'),
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
