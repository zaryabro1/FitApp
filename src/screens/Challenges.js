import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import LinearGradieant from 'react-native-linear-gradient';
import {WORKOUT_TYPE} from '../system/FitnessSystem';

const {width, height} = Dimensions.get('window');

export default class Challenges extends Component {

  componentDidMount(): void {
    console.warn(WORKOUT_TYPE.arms);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          translucent={true}
          backgroundColor={'transparent'}
        />
        <Image
          source={require('../../assets/background/background.png')}
          style={styles.splashImage}
        />
        <LinearGradieant
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']}
          style={styles.mainView}>
          <View style={styles.logo}>
            <Text style={styles.logoStyle}>Challenges</Text>
            <ScrollView>
              <TouchableOpacity style={{
                marginVertical: width*0.02,
                marginTop: width*0.07
              }} onPress={() => {
                this.props.navigation.navigate('WorkoutIntensity', {
                  title: WORKOUT_TYPE.fullBody,
                });
              }}>
                <ImageBackground source={require('../../assets/background/fullbody.png')}
                                 style={{
                                   resizeMode: 'cover',
                                   height: width*0.3,
                                   width: width *0.9,
                                 }}
                                 imageStyle={{
                                   borderRadius: 10
                                 }}>
                  <View style={{
                    height: '100%',
                    width: '100%',
                    // backgroundColor: 'rgba(255,255,255,0.5)',
                    borderColor: 'rgba(255,255,255,0.7)',
                    borderWidth: 1,
                    borderRadius: 10,
                    justifyContent: 'center',
                    // alignItems: 'center',
                    // marginVertical: 10,
                    paddingLeft: width*0.07
                    // marginTop: 10,
                  }}>
                    <Text style={{
                      color: "#FFFFFF",
                      fontFamily: 'JosefinSans-Regular',
                      fontSize: width*0.06,
                      // textAlign: 'center'
                    }}>{WORKOUT_TYPE.fullBody}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              {/*<Button*/}
              {/*  buttonText={WORKOUT_TYPE.fullBody}*/}
              {/*  style={{*/}
              {/*    height: width * 0.25,*/}
              {/*    width: width * 0.9,*/}
              {/*    backgroundColor: 'rgba(255,255,255,0.5)',*/}
              {/*    borderColor: 'rgba(255,255,255,0.7)',*/}
              {/*    borderWidth: 1,*/}
              {/*    borderRadius: 10,*/}
              {/*    justifyContent: 'center',*/}
              {/*    alignItems: 'center',*/}
              {/*    marginVertical: 10,*/}
              {/*    marginTop: 10,*/}
              {/*  }}*/}
              {/*  onPress={() => {*/}
              {/*    this.props.navigation.navigate('WorkoutIntensity', {*/}
              {/*      title: WORKOUT_TYPE.fullBody,*/}
              {/*    });*/}
              {/*  }}*/}
              {/*/>*/}

              <TouchableOpacity style={{
                marginVertical: width*0.02
              }} onPress={() => {
                this.props.navigation.navigate('WorkoutIntensity', {
                  title: WORKOUT_TYPE.fullBody,
                });
              }}>
                <ImageBackground source={require('../../assets/background/abs.png')}
                                 style={{
                                   resizeMode: 'cover',
                                   height: width*0.3,
                                   width: width *0.9,
                                 }}
                                 imageStyle={{
                                   borderRadius: 10
                                 }}>
                  <View style={{
                    height: '100%',
                    width: '100%',
                    // backgroundColor: 'rgba(255,255,255,0.5)',
                    borderColor: 'rgba(255,255,255,0.7)',
                    borderWidth: 1,
                    borderRadius: 10,
                    justifyContent: 'center',
                    // alignItems: 'center',
                    // marginVertical: 10,
                    paddingLeft: width*0.07
                    // marginTop: 10,
                  }}>
                    <Text style={{
                      color: "#FFFFFF",
                      fontFamily: 'JosefinSans-Regular',
                      fontSize: width*0.06,
                      // textAlign: 'center'
                    }}>{WORKOUT_TYPE.abs}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {/*<Button*/}
              {/*  buttonText={WORKOUT_TYPE.abs}*/}
              {/*  style={{*/}
              {/*    height: width * 0.25,*/}
              {/*    width: width * 0.9,*/}
              {/*    backgroundColor: 'rgba(255,255,255,0.5)',*/}
              {/*    borderColor: 'rgba(255,255,255,0.7)',*/}
              {/*    borderWidth: 1,*/}
              {/*    borderRadius: 10,*/}
              {/*    justifyContent: 'center',*/}
              {/*    alignItems: 'center',*/}
              {/*    marginVertical: 10,*/}
              {/*    marginTop: 10,*/}
              {/*  }}*/}
              {/*  onPress={() => {*/}
              {/*    this.props.navigation.navigate('WorkoutIntensity', {*/}
              {/*      title: WORKOUT_TYPE.abs,*/}
              {/*    });*/}
              {/*  }}*/}
              {/*/>*/}

              <TouchableOpacity style={{
                marginVertical: width*0.02
              }} onPress={() => {
                this.props.navigation.navigate('WorkoutIntensity', {
                  title: WORKOUT_TYPE.fullBody,
                });
              }}>
                <ImageBackground source={require('../../assets/background/butt.png')}
                                 style={{
                                   resizeMode: 'cover',
                                   height: width*0.3,
                                   width: width *0.9,
                                 }}
                                 imageStyle={{
                                   borderRadius: 10
                                 }}>
                  <View style={{
                    height: '100%',
                    width: '100%',
                    // backgroundColor: 'red',
                    borderColor: 'rgba(255,255,255,0.7)',
                    borderWidth: 1,
                    borderRadius: 10,
                    justifyContent: 'center',
                    paddingLeft: width*0.07
                    // alignItems: 'center',
                    // marginVertical: 10,
                    // marginTop: 10,
                  }}>
                    <Text style={{
                      color: "#FFFFFF",
                      fontFamily: 'JosefinSans-Regular',
                      fontSize: width*0.06,
                      // textAlign: 'center'
                    }}>{WORKOUT_TYPE.butt}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {/*<Button*/}
              {/*  buttonText={WORKOUT_TYPE.butt}*/}
              {/*  style={{*/}
              {/*    height: width * 0.25,*/}
              {/*    width: width * 0.9,*/}
              {/*    backgroundColor: 'rgba(255,255,255,0.5)',*/}
              {/*    borderColor: 'rgba(255,255,255,0.7)',*/}
              {/*    borderWidth: 1,*/}
              {/*    borderRadius: 10,*/}
              {/*    justifyContent: 'center',*/}
              {/*    alignItems: 'center',*/}
              {/*    marginVertical: 10,*/}
              {/*    marginTop: 10,*/}
              {/*  }}*/}
              {/*  onPress={() => {*/}
              {/*    this.props.navigation.navigate('WorkoutIntensity', {*/}
              {/*      title: WORKOUT_TYPE.butt,*/}
              {/*    });*/}
              {/*  }}*/}
              {/*/>*/}

              <TouchableOpacity style={{
                marginVertical: width*0.02
              }} onPress={() => {
                this.props.navigation.navigate('WorkoutIntensity', {
                  title: WORKOUT_TYPE.fullBody,
                });
              }}>
                <ImageBackground source={require('../../assets/background/arms.png')}
                                 style={{
                                   resizeMode: 'cover',
                                   height: width*0.3,
                                   width: width *0.9,
                                 }}
                                 imageStyle={{
                                   borderRadius: 10
                                 }}>
                  <View style={{
                    height: '100%',
                    width: '100%',
                    // backgroundColor: 'rgba(255,255,255,0.5)',
                    borderColor: 'rgba(255,255,255,0.7)',
                    borderWidth: 1,
                    borderRadius: 10,
                    justifyContent: 'center',
                    // alignItems: 'center',
                    // marginVertical: 10,
                    paddingLeft: width*0.07
                    // marginTop: 10,
                  }}>
                    <Text style={{
                      color: "#FFFFFF",
                      fontFamily: 'JosefinSans-Regular',
                      fontSize: width*0.06,
                      // textA/lign: 'center'
                    }}>{WORKOUT_TYPE.arms}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {/*<Button*/}
              {/*  buttonText={WORKOUT_TYPE.arms}*/}
              {/*  style={{*/}
              {/*    height: width * 0.25,*/}
              {/*    width: width * 0.9,*/}
              {/*    backgroundColor: 'rgba(255,255,255,0.5)',*/}
              {/*    borderColor: 'rgba(255,255,255,0.7)',*/}
              {/*    borderWidth: 1,*/}
              {/*    borderRadius: 10,*/}
              {/*    justifyContent: 'center',*/}
              {/*    alignItems: 'center',*/}
              {/*    marginVertical: 10,*/}
              {/*    marginTop: 10,*/}
              {/*  }}*/}
              {/*  onPress={() => {*/}
              {/*    this.props.navigation.navigate('WorkoutIntensity', {*/}
              {/*      title: WORKOUT_TYPE.arms,*/}
              {/*    });*/}
              {/*  }}*/}
              {/*/>*/}

              <TouchableOpacity style={{
                marginVertical: width*0.02
              }} onPress={() => {
                this.props.navigation.navigate('WorkoutIntensity', {
                  title: WORKOUT_TYPE.fullBody,
                });
              }}>
                <ImageBackground source={require('../../assets/background/legs.png')}
                                 style={{
                                   resizeMode: 'cover',
                                   height: width*0.3,
                                   width: width *0.9,
                                 }}
                                 imageStyle={{
                                   borderRadius: 10
                                 }}>
                  <View style={{
                    height: '100%',
                    width: '100%',
                    // backgroundColor: 'rgba(255,255,255,0.5)',
                    borderColor: 'rgba(255,255,255,0.7)',
                    borderWidth: 1,
                    borderRadius: 10,
                    justifyContent: 'center',
                    // alignItems: 'center',
                    // marginVertical: 10,
                    paddingLeft: width*0.07
                    // marginTop: 10,
                  }}>
                    <Text style={{
                      color: "#FFFFFF",
                      fontFamily: 'JosefinSans-Regular',
                      fontSize: width*0.06,
                      // textAlign: 'center'
                    }}>{WORKOUT_TYPE.legs}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {/*<Button*/}
              {/*  buttonText={WORKOUT_TYPE.legs}*/}
              {/*  style={{*/}
              {/*    height: width * 0.25,*/}
              {/*    width: width * 0.9,*/}
              {/*    backgroundColor: 'rgba(255,255,255,0.5)',*/}
              {/*    borderColor: 'rgba(255,255,255,0.7)',*/}
              {/*    borderWidth: 1,*/}
              {/*    borderRadius: 10,*/}
              {/*    justifyContent: 'center',*/}
              {/*    alignItems: 'center',*/}
              {/*    marginVertical: 10,*/}
              {/*    marginTop: 10,*/}
              {/*  }}*/}
              {/*  onPress={() => {*/}
              {/*    this.props.navigation.navigate('WorkoutIntensity', {*/}
              {/*      title: WORKOUT_TYPE.legs,*/}
              {/*    });*/}
              {/*  }}*/}
              {/*/>*/}
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
    flex: 1,
    backgroundColor: '#000000'
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
    marginTop: 20,
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
