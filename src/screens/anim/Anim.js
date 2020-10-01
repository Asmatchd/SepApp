/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {primaryColor, white} from '../Dimens';
import {CustomModal, NavHeader} from '../../components';

export class Anim extends Component {
  state = {
    modalVisible: false,
    details: '',
    btnPressed: null,
    btnText: '',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          //   justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        }}>
        <SafeAreaView />
        <NavHeader title={'Anim Screen'} />

        <Image
          style={{
            resizeMode: 'contain',
            height: h('30%'),
            width: w('100%'),
          }}
          source={require('./smile.gif')}
        />

        <TouchableOpacity
          onPress={() =>
            this.setState({
              details: 'Do you really want to logout?',
              btnText: 'Yes',
              modalVisible: true,
              btnPressed: () =>
                this.setState({modalVisible: false}, () => {
                  this.props.navigation.navigate('DrawerNavigator');
                }),
            })
          }
          delayPressIn={0}
          style={{
            backgroundColor: '#faf',
            height: h('5%'),
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Show Modal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            this.setState({
              details: 'Your info is this........',
              btnText: 'OK',
              modalVisible: true,
              btnPressed: () => this.setState({modalVisible: false}),
            })
          }
          delayPressIn={0}
          style={{
            backgroundColor: '#faf',
            height: h('5%'),
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Show user info</Text>
        </TouchableOpacity>

        <CustomModal
          modalVisible={this.state.modalVisible}
          btnPressed={this.state.btnPressed}
          btnText={this.state.btnText}
          details={this.state.details}
          closePressed={() => this.setState({modalVisible: false})}
        />
      </View>
    );
  }
}
