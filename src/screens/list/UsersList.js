/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {white} from '../Dimens';
import {Loading, NavHeader} from '../../components';
import {axiosInstance, baseUrl} from '../../services/AxiosApi';

export class UsersList extends Component {
  state = {
    data: [],
    refreshing: false,
    isLoading: false,
  };

  componentDidMount = () => {
    this.manageLoading(true);
    this.getUsers();
  };

  getUsers = () => {
    axiosInstance
      .get(baseUrl + 'users/allUsers')
      .then((res) => {
        const data = res.data;
        this.manageLoading(false);
        if (data.status === '200') {
          this.setState({data: data.data});
        } else {
          alert('Something went wrong');
        }
      })
      .catch((error) => {
        console.log(error);
        this.manageLoading(false);
      });
  };

  renderItemDesign = (item) => (
    <View
      style={{
        backgroundColor: white,
        height: h('10%'),
        marginBottom: h('1%'),
        // alignItems: 'center',
        // justifyContent: 'center',
        borderWidth: h('0.1%'),
        borderColor: '#0004',
        borderRadius: h('1%'),
        flexDirection: 'row',
      }}>
      {/* Left view */}
      <View
        style={{
          height: '100%',
          width: '65%',
          marginLeft: h('2%'),
          //   backgroundColor: '#aaf',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#0009',
            fontSize: h('2.7%'),
          }}>
          {item.name.toUpperCase()}
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
          width: '35%',
          //   backgroundColor: '#afa',
          //   alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#0009',
            fontSize: h('1.8%'),
            textAlign: 'center',
          }}>
          {item.userDob}
        </Text>
      </View>
    </View>
  );

  refresh = () => {
    this.setState({refreshing: true});

    setTimeout(() => {
      this.setState({refreshing: false}, () => {
        console.warn('All done');
      });
    }, 3000);
  };

  manageLoading = (value) => {
    this.setState({isLoading: value});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SafeAreaView />
        <Loading showLoading={this.state.isLoading} msg={'Please wait'} />

        <NavHeader
          leftIc={'ios-arrow-back'}
          title={'All Users'}
          leftPressed={() => {
            this.props.navigation.goBack();
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
            keyExtractor={(item) => item.email}
            showsVerticalScrollIndicator={false}
            refreshing={this.state.refreshing}
            onRefresh={() => this.refresh()}
          />
        </View>
      </View>
    );
  }
}
