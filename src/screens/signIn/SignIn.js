/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';

var validator = require('email-validator');

import {primaryColor, white, silver, black} from '../Dimens';
import {AppInput, AppBtn, Loading} from '../../components';
import {axiosInstance, baseUrl} from '../../services/AxiosApi';

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
  };

  signIn = () => {
    const {email, password} = this.state;

    const valid = validator.validate(email); // true

    if (email === '' || password === '') {
      alert('All fields are required');
    } else if (valid === false) {
      alert('Provide valid email');
    } else {
      this.manageLoading(true);
      const params = {
        email,
        password,
      };
      axiosInstance
        .post(baseUrl + 'users/signIn', params)
        .then((res) => {
          const data = res.data;

          if (data.status === '200') {
            this.storeData(data.data);
          } else {
            this.manageLoading(false);
            alert(data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
          this.manageLoading(false);
        });
    }
  };

  storeData = (userData) => {
    AsyncStorage.setItem('userData', JSON.stringify(userData), () => {
      setTimeout(() => {
        this.manageLoading(false);
        this.props.navigation.replace('DrawerNavigator');
      }, 1500);
    });
  };

  manageLoading = (value) => {
    this.setState({isLoading: value});
  };

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 2}}>
        <View
          style={{
            flex: 1,
          }}>
          <Loading showLoading={this.state.isLoading} msg={'Please wait'} />

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
              width: '100%',
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
                Sign In
              </Text>

              <Text
                style={{
                  color: white,
                  fontSize: h('1.8%'),
                  marginTop: h('1%'),
                }}>
                Sign in to account
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
              <AppBtn onPress={() => this.signIn()} txt={'Sign In'} />

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
                  Don't have an account
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('SignUp')}
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
                    Sign Up!
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
