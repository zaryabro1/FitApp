import * as React from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Plan from '../screens/Plan';
import Challenges from '../screens/Challenges';
import Reports from '../screens/Reports';
import WorkoutIntensity from '../screens/WorkoutIntensity';
import Profile from '../screens/Profile';
import MyTabStack from './StackTab';
import ProfileTabStack from './ProfileTabStack';

const {width, height} = Dimensions.get('window');

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let styleTabIcon;
            if (route.name === 'Plan') {
              styleTabIcon = focused
                ? {
                    resizeMode: 'contain',
                    height: width * 0.05,
                    width: width * 0.05,
                    tintColor: '#F38F17',
                  }
                : {
                    resizeMode: 'contain',
                    height: width * 0.05,
                    width: width * 0.05,
                    tintColor: 'gray',
                  };

              iconName = focused
                ? require('../../assets/plan.png')
                : require('../../assets/plan.png');
            } else if (route.name === 'Challenges') {
              styleTabIcon = focused
                ? {
                    resizeMode: 'contain',
                    height: width * 0.07,
                    width: width * 0.07,
                    tintColor: '#F38F17',
                  }
                : {
                    resizeMode: 'contain',
                    height: width * 0.07,
                    width: width * 0.07,
                    tintColor: 'gray',
                  };

              iconName = focused
                ? require('../../assets/thirty.png')
                : require('../../assets/thirty.png');
            } else if (route.name === 'Reports') {
              styleTabIcon = focused
                ? {
                    resizeMode: 'contain',
                    height: width * 0.05,
                    width: width * 0.05,
                    tintColor: '#F38F17',
                  }
                : {
                    resizeMode: 'contain',
                    height: width * 0.05,
                    width: width * 0.05,
                    tintColor: 'gray',
                  };

              iconName = focused
                ? require('../../assets/report.png')
                : require('../../assets/report.png');
            } else if (route.name === 'Profile') {
              styleTabIcon = focused
                ? {
                    resizeMode: 'contain',
                    height: width * 0.05,
                    width: width * 0.05,
                    tintColor: '#F38F17',
                  }
                : {
                    resizeMode: 'contain',
                    height: width * 0.05,
                    width: width * 0.05,
                    tintColor: 'gray',
                  };

              iconName = focused
                ? require('../../assets/profiletab.png')
                : require('../../assets/profiletab.png');
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={styleTabIcon} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: '#F38F17',
          inactiveTintColor: 'gray',
          labelStyle:{fontSize: width*0.03, fontFamily: 'JosefinSans-Bold'},
          style: {backgroundColor: 'rgba(0,0,0,0.8)'},
        }}>
        <Tab.Screen name="Plan" component={Plan} />
        <Tab.Screen name="Challenges" component={MyTabStack} />
        <Tab.Screen name="Reports" component={Reports} />
        <Tab.Screen name="Profile" component={ProfileTabStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
