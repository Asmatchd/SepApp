/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {white, primaryColor} from '../screens/Dimens';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class NavHeader extends Component {
  render() {
    return (
      <View
        style={{
          height: h('6%'),
          width: '100%',
          backgroundColor: primaryColor,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={this.props.leftPressed}
          style={{
            height: h('6%'),
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          delayPressIn={0}>
          <Icon name={this.props.leftIc} color={white} size={h('3.5%')} />
        </TouchableOpacity>
        <View
          style={{
            height: h('6%'),
            width: '70%',
            // backgroundColor: '#aaf',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: white,
              fontSize: h('3%'),
            }}>
            {this.props.title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.props.rightPressed}
          style={{
            height: h('6%'),
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          delayPressIn={0}>
          <Icon name={this.props.rightIc} color={white} size={h('3.5%')} />
        </TouchableOpacity>
      </View>
    );
  }
}
