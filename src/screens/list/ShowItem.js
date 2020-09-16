/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {primaryColor, white} from '../Dimens';
import {NavHeader} from '../../components';

export class ShowItem extends Component {
  state = {
    user: '',
  };

  componentDidMount = () => {
    const incomingData = this.props.route.params.navProps;
    this.setState({user: incomingData});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SafeAreaView />
        <NavHeader
          leftIc={'ios-arrow-back'}
          title={'Show Item'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        <View
          style={{
            height: h('20%'),
            backgroundColor: this.state.user.clr,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: h('12%'),
              width: h('12%'),
              borderRadius: h('12%'),
            }}
            source={this.state.user.img}
          />
        </View>
        <View
          style={{
            height: h('7%'),
            // backgroundColor: '#aaf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: h('3%'),
              color: '#000',
            }}>
            {this.state.user.name}
          </Text>
        </View>

        <View
          style={{
            height: h('5%'),
            // backgroundColor: '#a44',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: h('2%'),
              color: '#0008',
            }}>
            {this.state.user.email}
          </Text>
        </View>
      </View>
    );
  }
}
