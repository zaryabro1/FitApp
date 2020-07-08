import React, {Component} from 'react';
import {View, StatusBar, Image, Text, Dimensions, TouchableOpacity, ScrollView} from "react-native";
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import LinearGradieant from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

export default class Profile extends Component {



  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} translucent={true} backgroundColor={'transparent'}/>
        <Image
          source={require('../../assets/imageTwo.jpg')}
          style={styles.splashImage}/>
        <LinearGradieant colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']} style={styles.mainView}>
          <View style={styles.logo}>
            <Text style={styles.logoStyle}>Profile</Text>
            <ScrollView>
                <Button buttonText={'About me'} style={styles.buttons}
                  onPress={() => {
                        this.props.navigation.navigate('AboutMe')
                  }}
                />
                <Button buttonText={'My fitness plan'} style={styles.buttons}
                  // onPress={() => {
                  //   this.setState({view: 2});
                  // }}
                />
                <Button buttonText={'Reminder'} style={styles.buttons}
                  // onPress={() => {
                  //   this.setState({view: 2});
                  // }}
                />
                <Button buttonText={'Settings'} style={styles.buttons}
                  // onPress={() => {
                  //   this.setState({view: 2});
                  // }}
                />
                <Button buttonText={'Feedback'} style={styles.buttons}
                  // onPress={() => {
                  //   this.setState({view: 2});
                  // }}
                />
                <Button buttonText={'Rate us'} style={styles.buttons}
                  // onPress={() => {
                  //   this.setState({view: 2});
                  // }}
                />
                <Button buttonText={'Disclaimer'} style={styles.buttons}
                  // onPress={() => {
                  //   this.setState({view: 2});
                  // }}
                />
                <Button buttonText={'Privacy policy'} style={styles.buttons}
                  // onPress={() => {
                  //   this.setState({view: 2});
                  // }}
                />
                <Button buttonText={'History'} style={styles.buttons}
                  // onPress={() => {
                  //   this.setState({view: 2});
                  // }}
                />
            </ScrollView>

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
    // flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1002,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0

  },
  input: {
    flex: 1
  },
  logoStyle: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: '600',
    color: '#F3D302',
    // position: 'absolute',
    // zIndex: 1003,
    fontFamily: 'JosefinSans-Bold',
    marginTop: 30

  },
  createNewAccount: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
    marginTop: 30
  },
  custom: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 32
  },
  buttons: {
    height: width * 0.15,
    width: width * 0.9,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderColor: 'rgba(255,255,255,0.7)',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 10,

  }
};
