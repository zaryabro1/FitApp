import React, {Component} from 'react';
import {View, StatusBar,ImageBackground, Text, Dimensions} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import Store from '../store';

const {width, height} = Dimensions.get('window');

export default class Splash extends Component {

  state = {
    weight: ''
  }

  componentDidMount(): void {
    setTimeout(() => {
      if (this.state.weight === '') {
        this.props.navigation.navigate('Login')
      } else {
        this.props.navigation.navigate('Login')

      }

    }, 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <ImageBackground
          source={require('../../assets/imageFour.jpg')}
          style={styles.splashImage}>
          <Text style={styles.logoStyle}>30 Days Challenge</Text>
        </ImageBackground>


      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'purple'
  },
  splashImage: {
    resizeMode: 'cover',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    fontSize: 50,
    // fontWeight: '600',
    color: '#3E3F68',
    zIndex: 1001,
    fontFamily: 'JosefinSans-Bold'
  }
};
