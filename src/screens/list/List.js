/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {primaryColor, white} from '../Dimens';
import {NavHeader} from '../../components';

export class List extends Component {
  state = {
    data: [
      {
        email: 'study@g.com',
        name: 'Study',
      },
      {
        email: 'new@g.com',
        name: 'New',
      },
      {
        email: 'Monday@g.com',
        name: 'Monday',
      },
    ],
  };

  renderItemDesign = (item) => (
    <View
      style={{
        backgroundColor: primaryColor,
        height: h('8%'),
        marginBottom: h('1%'),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: white,
          fontSize: h('3%'),
        }}>
        {item.name}
      </Text>
    </View>
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SafeAreaView />
        <NavHeader
          leftIc={'ios-arrow-back'}
          title={' Listing'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        <View
          style={{
            marginTop: h('1%'),
            flex: 1,
          }}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => this.renderItemDesign(item)}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    );
  }
}
