import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import LinearGradieant from 'react-native-linear-gradient';
import {CHALLENGE_LEVEL} from '../system/FitnessSystem';
import {Picker} from 'react-native-wheel-pick';
import {setWeight} from '../global/Functions';

const {height, width} = Dimensions.get('window');

let dataSecond = [];

for(let i = 0; i<60; i++){
  dataSecond[i] = i+1;
}





export default class Reminder extends Component{



  state = {
    timeHour: 0,
    timeMin: 0
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar hidden={false} translucent={true} backgroundColor={'transparent'}/>
        <Image
          source={require('../../assets/background/background.png')}
          style={styles.splashImage}/>
        <LinearGradieant colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']} style={styles.mainView}>
          <View style={styles.logo}>
            <Text style={styles.logoStyle}>Reminder</Text>
            <ScrollView>
              <View style={{flexDirection: 'row'}}>
                  <Picker
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', width: width * 0.38, height: width * 0.73}}
                    selectedValue={6}
                    textColor={'white'}
                    textSize={40}
                    pickerData={[
                      1,
                      2,
                      3,
                      4,
                      5,
                      6,
                      7,
                      8,
                      9,
                      10,
                      11,
                      12,
                      13,
                      14,
                      15,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22,
                      23,
                      24]}
                    onValueChange={value => {
                      this.setState({timeHour: value});

                      // setWeight(`${value}`);
                    }}
                    itemSpace={30}
                  />
                  <Picker
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', width: width * 0.38, height: width * 0.73}}
                    selectedValue={15}
                    textColor={'white'}
                    textSize={40}
                    pickerData={dataSecond}
                    onValueChange={value => {
                      this.setState({timeMin: value});

                      // setWeight(`${value}`);
                    }}
                      // setWeight(`${value}`);

                    itemSpace={30}
                  />
              </View>
            </ScrollView>

          </View>
        </LinearGradieant>

        {/*<View style={styles.logo}>*/}

        {/*</View>*/}


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
    color: '#F38F17',
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
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderColor: '#F38F17',
    borderWidth: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 10,

  }
};
