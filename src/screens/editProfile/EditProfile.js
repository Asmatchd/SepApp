/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, SafeAreaView, StatusBar, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {primaryColor, white, silver} from '../Dimens';
import {AppBtn, AppInput, NavHeader, Loading} from '../../components';
import AsyncStorage from '@react-native-community/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dropdown} from 'react-native-material-dropdown-v2';
export class EditProfile extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    gender: 'Male',
    loading: false,

    data: [
      {
        value: 'Male',
      },
      {
        value: 'Female',
      },
    ],
  };

  componentDidMount = () => {
    this.manageLoading(true);
    setTimeout(() => {
      this.getData();
    }, 3000);
  };

  getData = () => {
    AsyncStorage.getItem('userData', (error, user) => {
      const userData = JSON.parse(user);
      if (!error && userData !== null) {
        this.setState(
          {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phone: userData.phone,
            address: userData.address,
            gender: userData.gender,
          },
          () => {
            this.manageLoading(false);
          },
        );
      } else {
        this.manageLoading(false);
      }
    });
  };

  storeData = () => {
    const {firstName, lastName, email, phone, address, gender} = this.state;
    const data = {
      firstName,
      lastName,
      email,
      phone,
      address,
      gender,
    };
    AsyncStorage.setItem('userData', JSON.stringify(data), () => {
      this.componentDidMount();
    });
  };

  manageLoading = (value) => this.setState({loading: value});

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <StatusBar backgroundColor={primaryColor} />

        <SafeAreaView />

        <Loading showLoading={this.state.loading} msg={'Please wait'} />

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

              <View
                style={{
                  height: h('6%'),
                  width: '80%',
                  borderRadius: h('1%'),
                  marginBottom: h('2%'),
                }}>
                <Dropdown
                  value={this.state.gender}
                  data={this.state.data}
                  onChangeText={(value) => this.setState({gender: value})}
                  containerStyle={{
                    // backgroundColor: '#faf',
                    width: '100%',
                    marginTop: -h('3%'),
                    borderBottomWidth: 0,
                  }}
                  selectedItemColor={primaryColor}
                />
              </View>

              <AppBtn onPress={() => this.storeData()} txt={'Save'} />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
