import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SignUp} from '../screens/signUp';
import {SignIn} from '../screens/signIn';
import {Dashboard} from '../screens/dashboard';
import {List, ShowItem, UsersList} from '../screens/list';
import {TabNavigator} from './TabNavigator';
import {DrawerNavigator} from './DrawerNavigator';
import {Anim} from '../screens/anim';
import {ImgPick} from '../screens/imgPick';
import {Splash} from '../screens/splash';
import {EditProfile} from '../screens/editProfile';
import {CalenderLearn} from '../screens/calenderLearn/CalenderLearn';

const Stack = createStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="CalenderLearn"
          component={CalenderLearn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ImgPick"
          component={ImgPick}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Anim"
          component={Anim}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        /> */}

        {/* <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        /> */}

        {/* <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="ShowItem"
          component={ShowItem}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UsersList"
          component={UsersList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
