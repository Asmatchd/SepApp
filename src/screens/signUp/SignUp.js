/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ActionButton from 'react-native-action-button';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
var validator = require('email-validator');
import DateTimePickerModal from 'react-native-modal-datetime-picker/src/index';

import {primaryColor, white, silver, secondaryColor, black} from '../Dimens';
import {AppInput, AppBtn, Loading} from '../../components';
import moment from 'moment';
import {axiosInstance, baseUrl} from '../../services/AxiosApi';

export class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    isLoading: false,

    isDatePickerVisible: false,
    selectedDate: 'Click to select',
  };

  signUp = () => {
    const valid = validator.validate(this.state.email); // true

    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.selectedDate === 'Click to select'
    ) {
      alert('All fields are required');
    } else if (valid === false) {
      alert('Provide valid email');
    } else {
      this.manageLoading(true);
      const params = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        userDob: this.state.selectedDate,
      };
      axiosInstance
        .post(baseUrl + 'users/signUp', params)
        .then((res) => {
          const data = res.data;
          this.manageLoading(false);
          if (data.status === '200') {
            console.warn(data.data);
            alert(data.msg);
          } else {
            alert(data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
          this.manageLoading(false);
        });
    }
  };

  showDatePicker = () => {
    this.setState({isDatePickerVisible: true});
  };

  hideDatePicker = () => {
    this.setState({isDatePickerVisible: false});
  };

  handleConfirm = (date) => {
    this.setState({selectedDate: moment(date).format('DD-MM-YYYY')}, () => {
      this.hideDatePicker();
    });

    // this.setState({selectedDate: moment(date).format('hh:mm a')}, () => {
    //   this.hideDatePicker();
    // });
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
              height: h('75%'),
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
                height: h('60%'),
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
              <TouchableOpacity
                onPress={() => {
                  this.setState({isDatePickerVisible: true});
                }}
                delayPressIn={0}
                style={{
                  height: h('6%'),
                  width: '80%',
                  borderColor: primaryColor,
                  borderWidth: h('0.1%'),
                  borderRadius: h('1%'),
                  flexDirection: 'row',
                  marginBottom: h('2%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>{this.state.selectedDate}</Text>
              </TouchableOpacity>

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

          <ActionButton
            buttonColor="#2dbca4"
            onPress={() => {
              console.warn('pressed');
            }}
            // position={'center'}
            useNativeFeedback={true}
          />
          <DateTimePickerModal
            isVisible={this.state.isDatePickerVisible}
            // mode="time"
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
