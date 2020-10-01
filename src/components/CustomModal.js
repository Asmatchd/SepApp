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

export class CustomModal extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <SafeAreaView />

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#0004',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                height: h('40%'),
                width: '80%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{this.props.details}</Text>

              <TouchableOpacity
                onPress={this.props.btnPressed}
                delayPressIn={0}
                style={{
                  backgroundColor: '#aaf',
                  height: h('5%'),
                  width: '30%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{this.props.btnText}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.props.closePressed}
                delayPressIn={0}
                style={{
                  backgroundColor: '#aaf',
                  height: h('5%'),
                  width: '30%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: h('2%'),
                }}>
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
