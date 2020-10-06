/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

export class Splash extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.getData();
    }, 2000);
  };

  getData = () => {
    AsyncStorage.getItem('userData', (error, data) => {
      if (!error && data !== null) {
        this.props.navigation.replace('DrawerNavigator');
      } else {
        this.props.navigation.replace('SignIn');
      }
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: h('5%'),
          }}>
          Welcome
        </Text>
      </View>
    );
  }
}
