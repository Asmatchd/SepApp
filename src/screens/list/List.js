/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

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
        email: 'study@g.com study@g.com study@g.com study@g.com study@g.com',
        name: 'Study',
        time: '12:00 PM',
        img: require('../../assets/1.jpg'),
        clr: '#faf',
      },
      {
        email: 'new@g.com',
        name: 'New',
        time: '01:00 AM',
        img: require('../../assets/2.jpg'),
        clr: '#f22',
      },
      {
        email: 'Monday@g.com',
        name: 'Monday',
        time: '12:46 AM',
        img: require('../../assets/3.jpg'),
        clr: '#aaf',
      },
      {
        email: 'new@g.com',
        name: 'asd',
        time: '01:00 AM',
        img: require('../../assets/2.jpg'),
        clr: '#f22',
      },
      {
        email: 'Monday@g.com',
        name: 'asda',
        time: '12:46 AM',
        img: require('../../assets/3.jpg'),
        clr: '#aaf',
      },
      {
        email: 'new@g.com',
        name: 'ew',
        time: '01:00 AM',
        img: require('../../assets/2.jpg'),
        clr: '#f22',
      },
      {
        email: 'Monday@g.com',
        name: 'gf',
        time: '12:46 AM',
        img: require('../../assets/3.jpg'),
        clr: '#aaf',
      },
      {
        email: 'new@g.com',
        name: 'werw',
        time: '01:00 AM',
        img: require('../../assets/2.jpg'),
        clr: '#f22',
      },
      {
        email: 'Monday@g.com',
        name: 'we',
        time: '12:46 AM',
        img: require('../../assets/3.jpg'),
        clr: '#aaf',
      },
    ],

    cart: [],
  };

  renderItemDesign = (item, index) => (
    <TouchableOpacity
      delayPressIn={0}
      // onPress={() => this.navToShow(item)}
      // onPress={() => {
      //   this.removeByIndex(item);
      // }}
      onPress={() => {
        this.add(item);
      }}
      style={{
        backgroundColor: white,
        height: h('10%'),
        marginBottom: h('1%'),
        // alignItems: 'center',
        // justifyContent: 'center',
        borderWidth: h('0.1'),
        borderColor: '#0004',
        borderRadius: h('1'),
        flexDirection: 'row',
      }}>
      {/* Img view */}
      <View
        style={{
          height: '100%',
          width: '20%',
          // backgroundColor: '#faf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <View
          style={{
            height: h('4%'),
            width: h('4%'),
            borderRadius: h('6%'),
            backgroundColor: item.clr,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: h('3%'),
              width: h('3%'),
              borderRadius: h('6%'),
              backgroundColor: 'blue',
              borderColor: '#fff',
              borderWidth: h('0.2%'),
            }}
          />
        </View> */}
        <Image
          style={{
            height: h('8%'),
            width: h('8%'),
            borderRadius: h('6%'),
          }}
          source={item.img}
        />
      </View>

      {/* Center view */}
      <View
        style={{
          height: '100%',
          width: '65%',
          // backgroundColor: '#aaf',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#0009',
            fontSize: h('2.7%'),
          }}>
          {item.name}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: '#0009',
            fontSize: h('2%'),
          }}>
          {item.email}
        </Text>
      </View>

      {/* right view */}
      <View
        style={{
          height: '100%',
          width: '15%',
          // backgroundColor: '#afa',
          // alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#0009',
            fontSize: h('1.8%'),
          }}>
          {item.time}
        </Text>
      </View>
    </TouchableOpacity>
  );

  // remove by index
  removeByIndex = (item) => {
    const arr = this.state.data;

    // const index = arr.findIndex((prev) => prev.name === item.name);

    const index = arr.indexOf(item);

    if (index > -1) {
      arr.splice(index, 1);
    }

    this.setState({data: arr});
  };

  // navigate to show screen
  navToShow = (item) => {
    this.props.navigation.navigate('ShowItem', {
      navProps: item,
    });
  };

  //  add item into array
  add = (item) => {
    // const data = {
    //   email: 'newUser@g.com',
    //   name: 'my new user',
    //   time: '12:00 PM',
    //   img: require('../../assets/1.jpg'),
    //   clr: '#aaa',
    // };

    // this.setState({cart: item});

    // to store new data along side previous one
    this.setState((prevState) => ({cart: [...prevState.cart, item]}));
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
          rightIc={'ios-add'}
          title={'Listing'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
          rightPressed={() => {
            console.warn(this.state.cart);
          }}
        />
        <View
          style={{
            margin: h('1%'),
            flex: 1,
          }}>
          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => this.renderItemDesign(item, index)}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    );
  }
}
