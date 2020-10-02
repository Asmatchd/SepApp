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
import ImagePicker from 'react-native-image-picker';

export class ImgPick extends Component {
  state = {
    img: '',
    data: [],
  };

  showPicker = () => {
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else {
        console.warn(response.data);
        this.setState({img: response.uri, data: response.data});
      }
    });
  };

  componentDidMount = () => {};

  render() {
    return (
      <View
        style={{
          flex: 1,
          //   justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <SafeAreaView />
        <NavHeader title={'Image Picker'} />

        <View
          style={{
            height: h('30%'),
            width: '100%',
            // backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: h('10%'),
          }}>
          <View
            style={{
              height: h('30%'),
              width: '90%',
              backgroundColor: '#0002',
              borderRadius: h('2%'),
              borderWidth: h('0.2%'),
              borderColor: '#0006',
            }}>
            <Image
              style={{
                height: h('30%'),
                width: '100%',
                resizeMode: 'contain',
              }}
              source={{uri: this.state.img}}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              this.showPicker();
            }}
            delayPressIn={0}
            style={{
              height: h('5%'),
              width: '50%',
              marginTop: h('5%'),
              backgroundColor: '#faf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Open Picker</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
