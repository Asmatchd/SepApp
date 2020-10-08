/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class Loading extends Component {
  render() {
    return (
      <View>
        {this.props.showLoading ? (
          <View
            style={{
              height: h('100%'),
              width: w('100%'),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0004',
              zIndex: 1,
              position: 'absolute',
            }}>
            <ActivityIndicator size="large" color={'red'} />
            <Text>{this.props.msg}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}
