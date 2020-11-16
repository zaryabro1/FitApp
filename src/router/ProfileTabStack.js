import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AboutMe from '../screens/AboutMe';
import Profile from '../screens/Profile';
import Reminder from '../screens/Reminder';
const Stack = createStackNavigator();

function ProfileTabStack() {
  return (
    <Stack.Navigator initialRootName={'Profile'} headerMode={'none'}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AboutMe" component={AboutMe} />
      <Stack.Screen name="Reminder" component={Reminder} />
    </Stack.Navigator>
  );
}

export default ProfileTabStack;
