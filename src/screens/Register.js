import React, {Component} from 'react';
import {View, StatusBar, Image, Text, Dimensions, TouchableOpacity} from "react-native";
import LinearGradieant from 'react-native-linear-gradient';

import Button from '../components/Button';
import Textfield from '../components/Textfield';

const {width, height} = Dimensions.get('window');

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Image
          source={require('../../assets/imageSeven.jpg')}
          style={styles.splashImage}/>
        <LinearGradieant colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']} style={styles.mainView}>
          <View style={styles.logo}>

            <View style={styles.profilePicture}>
              <Image source={require('../../assets/name.png')}
                     style={{resizeMode: 'contain', height: width * 0.08, width: width * 0.08}}/>
            </View>
            <View style={styles.textFields}>
              <Textfield source={require('../../assets/name.png')} placeholder={'Name'} maxLength={25}/>
              <Textfield source={require('../../assets/mail.png')} placeholder={'Email'} maxLength={25}/>
              <Textfield source={require('../../assets/password.png')} placeholder={'Password'} secureTextEntry={true}
                         maxLength={15}/>
              <Textfield source={require('../../assets/password.png')} placeholder={'Confirm Password'}
                         secureTextEntry={true} maxLength={15}/>

              <Button buttonText={'Register'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: '#5663FF',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 50
              }}
                      // onPress={() => {this.props.navigation.navigate('GpsScreen')}}
              />
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                <Text style={{color: '#FFFFFF', marginRight: 5, fontFamily: 'JosefinSans-Regular', fontSize: 17}}>Already
                  have an account?</Text>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login')}}>
                  <Text style={{
                    fontWeight: '600',
                    color: '#5663FF',
                    fontFamily: 'JosefinSans-Regular',
                    fontSize: 17
                  }}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradieant>
      </View>

    )

  }
}


const styles = {
  container: {
    flex: 1
  },
  splashImage: {
    resizeMode: 'cover',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1000
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
    flex: 1,
    position: 'absolute',
    // justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1002,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  profilePicture: {
    height: width * 0.33,
    width: width * 0.33,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderRadius: 80
  },
  textFields: {
    marginTop: 40
  }
}
