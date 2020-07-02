import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradieant from 'react-native-linear-gradient';
import Store from '../store';
import AsyncStorage from '@react-native-community/async-storage';
import {InitializeFitnessSystem} from '../system/FitnessSystem';

const {width, height} = Dimensions.get('window');

export default class Login extends Component {
  componentWillMount = async () => {
    // await AsyncStorage.clear();
    await InitializeFitnessSystem();
  };

  componentDidMount = async () => {
    let {orderStore} = Store;
    try {
      const value = await AsyncStorage.getItem('weight');
      if (value) {
        this.setState({weight: value});
        setTimeout(() => {
          if (value === '') {
            this.props.navigation.navigate('SetWeight');
            console.warn(this.state.weight);
          } else {
            this.props.navigation.navigate('TabNavigation');
            console.warn(this.state.weight);
          }
        }, 3000);
      } else {
        this.props.navigation.navigate('SetWeight');
        console.warn('hello');
      }
    } catch (e) {
      console.warn(e);
    }
  };

  state = {
    weight: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image
          source={require('../../assets/imageFour.jpg')}
          style={styles.splashImage}
        />
        <LinearGradieant
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']}
          style={styles.mainView}>
          <View style={styles.logo}>
            <Text style={styles.logoStyle}>30 Days Challenge</Text>
          </View>
        </LinearGradieant>

        {/*<View style={styles.logo}>*/}

        {/*</View>*/}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  splashImage: {
    resizeMode: 'cover',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1000,
  },
  mainView: {
    position: 'absolute',
    // backgroundColor: '#0C0C0C',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1001,
    // opacity: 0.5
  },
  logo: {
    // flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1002,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  input: {
    flex: 1,
  },
  logoStyle: {
    fontSize: 40,
    // marginBottom: ,
    fontWeight: '600',
    color: '#F3D302',
    // position: 'absolute',
    // zIndex: 1003,
    fontFamily: 'JosefinSans-Bold',
  },
  createNewAccount: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
    marginTop: 30,
  },
  custom: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 32,
  },
};
