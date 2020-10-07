/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {primaryColor, white, silver} from '../Dimens';
import {AppBtn, AppInput, NavHeader} from '../../components';
import AsyncStorage from '@react-native-community/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class EditProfile extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    AsyncStorage.getItem('userData', (error, user) => {
      const userData = JSON.parse(user);
      if (!error && userData !== null) {
        this.setState({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          phone: userData.phone,
          address: userData.address,
        });
      }
    });
  };

  storeData = () => {
    const {firstName, lastName, email, phone, address} = this.state;
    const data = {
      firstName,
      lastName,
      email,
      phone,
      address,
    };
    AsyncStorage.setItem('userData', JSON.stringify(data), () => {
      this.componentDidMount();
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <StatusBar backgroundColor={primaryColor} />
        <SafeAreaView />
        <NavHeader
          leftIc={'ios-arrow-back'}
          title={' Edit Profile'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 2}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: h('70%'),
                backgroundColor: white,
                width: '85%',
                borderRadius: h('1%'),
                borderWidth: h('0.3%'),
                borderColor: silver,
                alignItems: 'center',
                paddingTop: h('5%'),
                marginTop: h('5%'),
                //   justifyContent: 'center',
              }}>
              <AppInput
                icName={'ios-person'}
                placeholder={'First Name'}
                onChangeText={(firstName) => this.setState({firstName})}
                value={this.state.firstName}
              />
              <AppInput
                icName={'ios-person'}
                placeholder={'Last Name'}
                onChangeText={(lastName) => this.setState({lastName})}
                value={this.state.lastName}
              />

              <AppInput
                icName={'mail'}
                placeholder={'Email'}
                onChangeText={(email) => this.setState({email})}
                keyboardType={'email-address'}
                value={this.state.email}
                editable={false}
              />

              <AppInput
                icName={'ios-call'}
                placeholder={'Phone'}
                onChangeText={(phone) => this.setState({phone})}
                keyboardType={'phone-pad'}
                value={this.state.phone}
              />

              <AppInput
                icName={'location'}
                placeholder={'Address'}
                onChangeText={(address) => this.setState({address})}
                value={this.state.address}
              />

              <AppBtn onPress={() => this.storeData()} txt={'Save'} />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
