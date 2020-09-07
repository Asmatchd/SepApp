/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {primaryColor, white, silver, secondaryColor, black} from '../Dimens';

export class SignIn extends Component {
  state = {
    name: 'Default',
    email: 'Default@g.com',
    password: '123456789',
  };

  signUp = () => {
    console.warn(this.state.name);
    console.warn(this.state.email);
    console.warn(this.state.password);
  };

  render() {
    return (
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

            {/* Name */}
            <View
              style={{
                height: h('6%'),
                width: '80%',
                borderColor: primaryColor,
                borderWidth: h('0.1%'),
                borderRadius: h('1%'),
                flexDirection: 'row',
                marginBottom: h('2%'),
              }}>
              <View
                style={{
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: primaryColor,
                  borderRightWidth: h('0.1%'),
                }}>
                <Icon name={'person'} color={primaryColor} size={h('2.5%')} />
              </View>
              <View style={{width: '85%'}}>
                <TextInput
                  style={{
                    height: h('6%'),
                    width: '100%',
                    paddingLeft: h('1%'),
                  }}
                  placeholder={'Name'}
                  onChangeText={(text) => {
                    this.setState({name: text});
                  }}
                  // value={this.state.name}
                />
              </View>
            </View>

            {/* Email */}
            <View
              style={{
                height: h('6%'),
                width: '80%',
                borderColor: primaryColor,
                borderWidth: h('0.1%'),
                borderRadius: h('1%'),
                flexDirection: 'row',
                marginBottom: h('2%'),
              }}>
              <View
                style={{
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: primaryColor,
                  borderRightWidth: h('0.1%'),
                }}>
                <Icon name={'mail'} color={primaryColor} size={h('2.5%')} />
              </View>
              <View style={{width: '85%'}}>
                <TextInput
                  style={{
                    height: h('6%'),
                    width: '100%',
                    paddingLeft: h('1%'),
                  }}
                  placeholder={'Email'}
                  onChangeText={(email) => {
                    this.setState({email});
                  }}
                  keyboardType={'email-address'}
                />
              </View>
            </View>

            {/* Password */}
            <View
              style={{
                height: h('6%'),
                width: '80%',
                borderColor: primaryColor,
                borderWidth: h('0.1%'),
                borderRadius: h('1%'),
                flexDirection: 'row',
                marginBottom: h('2%'),
              }}>
              <View
                style={{
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: primaryColor,
                  borderRightWidth: h('0.1%'),
                }}>
                <MaterialIcons
                  name={'vpn-key'}
                  color={primaryColor}
                  size={h('2.5%')}
                />
              </View>
              <View style={{width: '85%'}}>
                <TextInput
                  style={{
                    height: h('6%'),
                    width: '100%',
                    paddingLeft: h('1%'),
                  }}
                  placeholder={'Password'}
                  onChangeText={(password) => {
                    this.setState({password});
                  }}
                  secureTextEntry
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => this.signUp()}
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
                Sign Up
              </Text>
            </TouchableOpacity>
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
    );
  }
}
