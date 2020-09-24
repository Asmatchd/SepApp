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
        name: 'First',
        data: [
          {
            email:
              'study@g.com study@g.com study@g.com study@g.com study@g.com',
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
        ],
      },

      {
        name: 'Second',
        data: [
          {
            email: 'Second.Com',
            name: 'Second',
            time: '01:12 PM',
            img: require('../../assets/1.jpg'),
            clr: '#faf',
          },
          {
            email: '@nd.Com',
            name: 'Second Name',
            time: '01:12 PM',
            img: require('../../assets/2.jpg'),
            clr: '#f22',
          },
          {
            email: '#triyem.Com',
            name: 'yz',
            time: '01:12 PM',
            img: require('../../assets/3.jpg'),
            clr: '#aaf',
          },
        ],
      },

      {
        name: 'Third',
        data: [
          {
            email: 'Third.Com',
            name: 'Third',
            time: '01:12 PM',
            img: require('../../assets/1.jpg'),
            clr: '#faf',
          },
          {
            email: '3Rd.Com',
            name: 'Third Name',
            time: '01:12 PM',
            img: require('../../assets/2.jpg'),
            clr: '#f22',
          },
          {
            email: 'New.Com',
            name: 'yz',
            time: '01:12 PM',
            img: require('../../assets/3.jpg'),
            clr: '#aaf',
          },
        ],
      },
    ],

    verticalData: [
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
    ],

    cart: [],

    refreshing: false,
  };

  // Horizontal
  renderHorizontalDesign = (item, index) => (
    <TouchableOpacity
      onPress={() => this.setState({verticalData: item.data})}
      style={{
        height: h('13%'),
        // backgroundColor: '#a44',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: h('8%'),
          width: w('25%'),
          backgroundColor: '#0001',
          margin: h('1%'),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: h('1%'),
        }}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  // Vertical
  renderItemDesign = (item, index) => (
    <TouchableOpacity
      delayPressIn={0}
      onPress={() => this.navToShow(item)}
      // onPress={() => {
      //   this.removeByIndex(item);
      // }}
      // onPress={() => {
      //   this.add(item);
      // }}
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

  refresh = () => {
    this.setState({refreshing: true});

    setTimeout(() => {
      this.setState({refreshing: false}, () => {
        console.warn('All done');
      });
    }, 3000);
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
            height: h('13%'),
            backgroundColor: '#fff',
          }}>
          <FlatList
            horizontal
            data={this.state.data}
            renderItem={({item, index}) =>
              this.renderHorizontalDesign(item, index)
            }
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            margin: h('1%'),
            flex: 1,
          }}>
          <FlatList
            data={this.state.verticalData}
            renderItem={({item, index}) => this.renderItemDesign(item, index)}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
            refreshing={this.state.refreshing}
            onRefresh={() => this.refresh()}
          />
        </View>
      </View>
    );
  }
}
