import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SetWeight from '../screens/SetWeight';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Splash from '../screens/Splash';
import WorkoutIntensity from '../screens/WorkoutIntensity';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRootName={'Splash'} headerMode={'none'}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SetWeight" component={SetWeight} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="WorkoutIntensity" component={WorkoutIntensity} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
