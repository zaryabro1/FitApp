import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WorkoutIntensity from '../screens/WorkoutIntensity';
import Challenges from '../screens/Challenges';
import ExerciseScreen from '../screens/ExerciseScreen';
import StartWorkout from '../screens/StartWorkout';
import AboutMe from '../screens/AboutMe';
const Stack = createStackNavigator();

function MyTabStack() {
  return (
    <Stack.Navigator initialRootName={'Challenges'} headerMode={'none'}>
      <Stack.Screen name="Challenges" component={Challenges} />
      <Stack.Screen name="WorkoutIntensity" component={WorkoutIntensity} />
      <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
      <Stack.Screen name="StartWorkout" component={StartWorkout} />
      <Stack.Screen name="AboutMe" component={AboutMe} />
    </Stack.Navigator>
  );
}

export default MyTabStack;
