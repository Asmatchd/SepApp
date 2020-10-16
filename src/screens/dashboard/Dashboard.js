/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {primaryColor} from '../Dimens';
import {NavHeader} from '../../components';

const bg = require('../../assets/bg.jpg');
const btn = require('../../assets/btn.jpg');

export class Dashboard extends Component {
  render() {
    return (
      <ImageBackground
        source={bg}
        resizeMode={'cover'}
        style={{
          flex: 1,
          // backgroundColor: '#fff',
        }}>
        <StatusBar backgroundColor={primaryColor} />
        <SafeAreaView />
        <NavHeader
          leftIc={'ios-list'}
          title={' Dashboard'}
          leftPressed={() => {
            this.props.navigation.openDrawer();
          }}
        />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {/* first */}
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Important....!',
                'Critical update is available.',
                [
                  {text: 'Ask Later', onPress: () => console.warn('Later')},
                  {
                    text: 'NO',
                    onPress: () => console.warn('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'Yes', onPress: () => console.warn('OK Pressed')},
                ],
                {cancelable: false},
              );
            }}
            delayPressIn={0}
            style={{
              height: h('17%'),
              width: '80%',
              // backgroundColor: '#fff',
              borderColor: primaryColor,
              borderWidth: h('0.1%'),
              borderRadius: h('1%'),
              marginTop: h('3%'),
              // alignItems: 'center',
              // justifyContent: 'center',
            }}>
            <ImageBackground
              source={btn}
              style={{
                flex: 1,
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
            </ImageBackground>
          </TouchableOpacity>

          {/* second */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('List');
            }}
            delayPressIn={0}
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
            delayPressIn={0}
            onPress={() => {
              this.props.navigation.navigate('UsersList');
            }}
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
      </ImageBackground>
    );
  }
}
