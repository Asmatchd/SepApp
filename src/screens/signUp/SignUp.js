/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

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

export class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  signUp = () => {
    const valid = validator.validate(this.state.email); // true

    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.password === ''
    ) {
      alert('All fields are required');
    } else if (valid === false) {
      alert('Provide valid email');
    } else {
      alert('All done');
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 2}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
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

              <AppInput
                icName={'person'}
                placeholder={'Name'}
                onChangeText={(name) => this.setState({name})}
              />

              <AppInput
                icName={'mail'}
                placeholder={'Email'}
                onChangeText={(email) => this.setState({email})}
                keyboardType={'email-address'}
              />

              <AppInput
                icName={'key'}
                placeholder={'Password'}
                onChangeText={(password) => this.setState({password})}
                secureTextEntry
              />
              <AppBtn onPress={() => this.signUp()} txt={'Sign Up'} />

              <View
                style={{
                  marginTop: h('2%'),
                  height: h('5%'),
                  // backgroundColor: '#faf',
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('1.7%'),
                    color: black,
                  }}>
                  Already have an account
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('SignIn')}
                  style={{
                    // backgroundColor: '#aaf',
                    height: h('3%'),
                    width: '25%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: h('2%'),
                      color: primaryColor,
                      textDecorationLine: 'underline',
                    }}>
                    Sign In!
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
