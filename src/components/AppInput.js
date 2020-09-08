/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {primaryColor} from '../screens/Dimens';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export class AppInput extends Component {
  render() {
    return (
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
          <Icon
            name={this.props.icName}
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
            {...this.props}
          />
        </View>
      </View>
    );
  }
}
