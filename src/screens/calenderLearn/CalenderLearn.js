/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, SafeAreaView, StatusBar, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {primaryColor, white, silver, secondaryColor, black} from '../Dimens';
import {AppBtn, AppInput, NavHeader, Loading} from '../../components';

import {Calendar} from 'react-native-calendars';
import moment from 'moment';

export class CalenderLearn extends Component {
  state = {
    date: '',
    dateSelected: false,
    newDaysObject: {},
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <StatusBar backgroundColor={primaryColor} />

        <SafeAreaView />

        <NavHeader
          leftIc={'ios-arrow-back'}
          title={'Learn Calender'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />

        <Calendar
          onDayPress={(day) => {
            console.warn(moment('13').format('h:mm:ss a'));
            // this.setState({
            //   date: day.dateString,
            //   dateSelected: true,
            //   todayTxt: '#000',
            //   todayBg: '#fff',
            // });
          }}
          markedDates={{
            [this.state.date]: {selected: true},
          }}
          current={this.state.date}
          //   minDate={moment(new Date() - 1).format('YYYY-MM-DD')}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: secondaryColor,
            selectedDayBackgroundColor: secondaryColor,
            selectedDayTextColor: 'white',
            todayTextColor: secondaryColor,
            // todayBackgroundColor: this.state.todayBg,

            dayTextColor: 'black',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: 'pink',
            arrowColor: primaryColor,
            monthTextColor: secondaryColor,
            textDayFontSize: 14,
            textMonthFontSize: 12,
            textDayHeaderFontSize: 12,
          }}
        />
      </View>
    );
  }
}
