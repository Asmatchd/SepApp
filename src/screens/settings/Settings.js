import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />

        <TouchableOpacity style={styles.ItemView}>
          <Text style={styles.txt}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ItemView}>
          <Text style={styles.txt}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ItemView}>
          <Text style={styles.txt}>Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ItemView}>
          <Text style={styles.txt}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ItemView: {
    height: h('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: h('0.05%'),
    backgroundColor: '#fff',
  },
  txt: {
    fontSize: h('3%'),
  },
});
