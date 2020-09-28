import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dashboard} from '../screens/dashboard';
import {List} from '../screens/list';
import {primaryColor, secondaryColor} from '../screens/Dimens';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: primaryColor,
        inactiveTintColor: secondaryColor,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={h('3%')} />
          ),
        }}
      />

      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-list" color={color} size={h('3%')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
