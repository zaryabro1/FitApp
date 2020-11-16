import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  BackHandler,
  Alert,
} from 'react-native';
import Button from '../components/Button';
import LinearGradieant from 'react-native-linear-gradient';
import SoundPlayer from 'react-native-sound-player';

import {CHALLENGE_LEVEL, SetFitnessStatusTrue} from '../system/FitnessSystem';

const {width, height} = Dimensions.get('window');

let i = 4;

// const hello = function () {
//   this.props.navigation.goBack();
// }

// const { title } = route.params;
let _onFinishedPlayingSubscription = null;
let _onFinishedLoadingSubscription = null;
let _onFinishedLoadingFileSubscription = null;
let _onFinishedLoadingURLSubscription = null;

export default class StartWorkout extends Component {

  backAction = () => {
    Alert.alert('Hold on!', 'You have not completed today\'s exercises, you will have start over later!', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => this.props.navigation.goBack()},
    ]);
    return true;
  };

  componentDidMount(): void {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
    // console.warn(this.props.route.params.itemName);

    // _onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
    //   console.log('finished playing', success)
    // })

    // console.log("asdas0");
    _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      'FinishedLoading',
      ({success}) => {
        console.log('finished loading', success);
      },
    );

    //SoundPlayer.playSoundFile('go', 'mp3')

    // console.log("asdas1");
    // _onFinishedLoadingFileSubscription = SoundPlayer.addEventListener('FinishedLoadingFile', ({ success, name, type }) => {
    //   console.log('finished loading file', success, name, type)
    // })
    // _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener('FinishedLoadingURL', ({ success, url }) => {
    //   console.log('finished loading url', success, url)
    // })
  }

  componentWillUnmount() {
    // _onFinishedPlayingSubscription.remove()
    this.backHandler.remove();
    _onFinishedLoadingSubscription.remove();
    // _onFinishedLoadingURLSubscription.remove()
    // _onFinishedLoadingFileSubscription.remove()
  }

  startTimerForRest = () => {
    // let secForRest = 30;
    if (this.countDownInterval) {
      clearInterval(this.countDownInterval);
    }

    this.setState({timer: 30});
    this.countDownInterval = setInterval(() => {
      // this.setState({timer: secForRest})
      // secForRest--;
      this.setState({timer: this.state.timer - 1}, () => {
        if (this.state.timer <= 0 || this.state.toShow !== 5) {
          clearInterval(this.countDownInterval);
        }
      });

      // ((this.state.stopTimer == true || (this.state.timer <= 0 && this.state.toShow != 3)) && clearInterval(countdown));
    }, 1000);
  };

  palySound = () => {
    if (this.state.toShow == 1) {
      SoundPlayer.playSoundFile('go', 'mp3');
      setTimeout(() => {
        this.setState({toShow: 3});
      }, 4500);
    }
    if (this.state.toShow == 4) {
      SoundPlayer.playSoundFile('cheer', 'mp3');
    }
  };

  state = {
    workoutIndex: 0,
    stopTimer: false,
    toShow: 2,
    timer: 30,
    secForRest: 30,
  };

  render() {
    console.log(this.props.route.params.itemName[this.state.workoutIndex]);
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          translucent={true}
          backgroundColor={'transparent'}
        />
        {this.palySound()}
        <Image
          source={require('../../assets/background/background.png')}
          style={styles.splashImage}
        />
        <LinearGradieant
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']}
          style={styles.mainView}>
          <View
            style={{
              // flex: 1,
              position: 'absolute',
              justifyContent:
                this.state.toShow == 3 ||
                this.state.toShow == 1 ||
                this.state.toShow == 4
                  ? 'center'
                  : 'flex-start',
              // justifyContent: this.state.toShow == 3 && 'center',
              alignItems: 'center',
              zIndex: 1002,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            {(this.state.toShow == 3 &&
              this.state.workoutIndex <
              this.props.route.params.itemName.length && (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{
                    width: width,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                    <View style={{marginTop: 30}}>
                      <TouchableOpacity onPress={() => {
                        this.backAction();
                      }}>
                        <Image
                          source={require('../../assets/backbutton.png')}
                          style={{
                            resizeMode: 'contain',
                            width: width * 0.08,
                            height: width * 0.08,
                            tintColor: '#F38F17',
                          }}/>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.logoStyle}>
                      {
                        this.props.route.params.itemName[this.state.workoutIndex]
                          .title
                      }
                    </Text>
                    <View style={{backgroundColor: 'transparent', marginTop: 30}}>
                      <Image
                        source={require('../../assets/backbutton.png')}
                        style={{
                          resizeMode: 'contain',
                          width: width * 0.1,
                          height: width * 0.1,
                          tintColor: 'transparent',
                        }}/>
                    </View>
                  </View>
                  <Image
                    source={
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == "Jumping Jack" &&
                        require('../../assets/gifs/jumpingjack.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Crunches' &&
                        require('../../assets/gifs/crunches.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Lunges' &&
                        require('../../assets/gifs/lunges.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Bird Dog' &&
                        require('../../assets/gifs/bird-dog.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Mountain Climbing' &&
                        require('../../assets/gifs/mountain-climbing.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Push Up' &&
                        require('../../assets/gifs/push-ups.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Squats' &&
                        require('../../assets/gifs/squats.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Planks' &&
                        require('../../assets/gifs/plank_f_rgb.jpg')) ||
                      // (this.props.route.params.itemName[this.state.workoutIndex]
                      //     .title == 'Stepup Onto Chair' &&
                      //   require('../../assets/gifs/squats.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Butt Bridge' &&
                        require('../../assets/gifs/butt--brigde.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Reverse Crunches' &&
                        require('../../assets/gifs/reverse-crunches.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Scissors' &&
                        require('../../assets/gifs/scissors.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Triceps Dips' &&
                        require('../../assets/gifs/tricep-dips.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Abdominal Crunches' &&
                        require('../../assets/gifs/abs/abdominal-crunches.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Sit Ups' &&
                        require('../../assets/gifs/abs/sit-ups.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Leg Raises' &&
                        require('../../assets/gifs/abs/leg-raises.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex]
                          .title == 'Plank' &&
                        require('../../assets/gifs/abs/plank_f_rgb.jpg')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Stepup Onto Chair' &&
                        require('../../assets/gifs/step-up-onto-chair.gif'))
                    }
                    style={{
                      width: width * 1,
                      marginTop: 20,
                      height: width * 0.6,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text style={styles.logoStyle}>
                    X
                    {
                      this.props.route.params.itemName[this.state.workoutIndex]
                        .quantity
                    }
                  </Text>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: '600',
                      color: 'rgba(255,255,255,0.5)',
                      // position: 'absolute',
                      // zIndex: 1003,
                      fontFamily: 'JosefinSans-Italic',
                      marginVertical: 10,
                    }}>
                    Do{' '}
                    {
                      this.props.route.params.itemName[this.state.workoutIndex]
                        .quantity
                    }{' '}
                    {
                      this.props.route.params.itemName[this.state.workoutIndex]
                        .title
                    }
                  </Text>
                  <TouchableOpacity>
                    <Button
                      buttonText={'Next'}
                      style={{
                        height: width * 0.2,
                        width: width * 0.9,
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        borderColor: '#F38F17',
                        borderWidth: width * 0.025,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 10,
                        marginTop: width * 0.04,
                      }}
                      onPress={async () => {
                        // title, level
                        // await SetFitnessStatusTrue(
                        //   this.props.route.params.title,
                        //   this.props.route.params.level,
                        //   this.props.route.params.day,
                        // );
                        this.setState(
                          {workoutIndex: this.state.workoutIndex + 1},
                          async () => {
                            if (
                              this.state.workoutIndex ===
                              this.props.route.params.itemName.length
                            ) {
                              // await this.props.route.params.beforeGoBack();
                              this.setState({toShow: 4});
                            } else {
                              clearInterval(this.countDownInterval);
                              // this.setState({stopTimer: false});
                              this.startTimerForRest();
                              this.setState({toShow: 5});
                            }
                          },
                        );
                      }}
                    />
                  </TouchableOpacity>
                </View>
              )) || (this.state.toShow == 5 && (
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  paddingTop: width * 0.15,
                }}>
                <Text
                  style={{
                    fontSize: width * 0.2,
                    // marginBottom: ,
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#F38F17',
                    // position: 'absolute',
                    // zIndex: 1003,
                    fontFamily: 'JosefinSans-Bold',
                  }}>
                  Take Rest
                </Text>
                <Text
                  style={{
                    fontSize: width * 0.1,
                    // marginBottom: ,
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#F38F17',
                    // position: 'absolute',
                    // zIndex: 1003,
                    fontFamily: 'JosefinSans-Bold',
                  }}>
                  {this.state.timer} sec
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: width}}>
                  <Button
                    buttonText={'Reset Timer'}
                    style={{
                      height: width * 0.14,
                      width: width * 0.45,
                      backgroundColor: 'rgba(255,255,255,0.3)',
                      borderColor: '#F38F17',
                      borderWidth: width * 0.025,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: width * 0.15,
                      marginTop: width * 0.03,
                    }}
                    onPress={() => {
                      // clearInterval(this.countDownInterval);
                      // this.setState({stopTimer: true});
                      // setTimeout(() => {
                      // this.startCountdown();
                      // this.setState({stopTimer: false});
                      // this.setState({timer: 30});
                      //   this.setState({stopTimer: false});
                      this.startTimerForRest();
                      // },500);
                    }}
                  />

                  <Button
                    buttonText={'Next Exercise'}
                    style={{
                      height: width * 0.14,
                      width: width * 0.45,
                      backgroundColor: 'rgba(255,255,255,0.3)',
                      borderColor: '#F38F17',
                      borderWidth: width * 0.025,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: width * 0.15,
                      marginTop: width * 0.03,
                    }}
                    onPress={() => {
                      this.setState({toShow: 3});
                      // this.setState({timer: 30});
                      clearInterval(this.countDownInterval);
                      // this.setState({stopTimer: true});

                    }}
                  />

                </View>

              </View>
            )) ||
            (this.state.toShow == 1 && (
              <View
                style={{
                  width: width,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: width * 0.15,
                }}>
                <Text
                  style={{
                    fontSize: width * 0.2,
                    // marginBottom: ,
                    fontWeight: '600',
                    color: '#F38F17',
                    // position: 'absolute',
                    // zIndex: 1003,
                    fontFamily: 'JosefinSans-Bold',
                  }}>
                  Start!
                </Text>
              </View>
            )) ||
            (this.state.toShow == 4 && (
              <View
                style={{
                  width: width,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: width * 0.15,
                  height: '100%',
                }}>
                <Text
                  style={{
                    fontSize: width * 0.115,
                    // marginBottom: ,
                    fontWeight: '600',
                    color: '#F38F17',
                    textAlign: 'center',
                    // position: 'absolute',
                    // zIndex: 1003,
                    fontFamily: 'JosefinSans-Bold',
                  }}>
                  Congratulations!
                </Text>
                <Image
                  source={require('../../assets/doublethumbsup.png')}
                  style={{
                    resizeMode: 'contain',
                    height: width * 0.35,
                    width: width * 0.55,
                  }}
                />
                <Text
                  style={{
                    fontSize: width * 0.07,

                    color: '#FFFFFF',
                    // position: 'absolute',
                    // zIndex: 1003,
                    fontFamily: 'JosefinSans-regular',
                  }}>
                  You are done for the day.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../assets/partypopper.png')}
                    style={{
                      resizeMode: 'contain',
                      height: width * 0.2,
                      width: width * 0.2,
                    }}
                  />
                  <Image
                    source={require('../../assets/partypopper.png')}
                    style={{
                      resizeMode: 'contain',
                      height: width * 0.2,
                      width: width * 0.2,
                    }}
                  />
                  <Image
                    source={require('../../assets/partypopper.png')}
                    style={{
                      resizeMode: 'contain',
                      height: width * 0.2,
                      width: width * 0.2,
                    }}
                  />
                </View>
                <Button
                  buttonText={'DONE'}
                  style={{
                    height: width * 0.2,
                    width: width * 0.9,
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    borderColor: '#F38F17',
                    borderWidth: width * 0.025,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 10,
                    marginTop: 40,
                  }}
                  onPress={async () => {
                    await SetFitnessStatusTrue(
                      this.props.route.params.title,
                      this.props.route.params.level,
                      this.props.route.params.day,
                    );
                    this.props.navigation.goBack();
                  }}
                />
              </View>
            )) ||
            (this.state.toShow == 2 && (
              <View style={{
                width: width,
                paddingTop: width * 0.07,
                // flex: 1,
                height: height,
                alignItems: 'space-between',
              }}>
                <View
                  style={{
                    // height: width * 0.2,
                    width: width,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: width * 0.09,
                      // marginBottom: ,
                      fontWeight: '600',
                      color: 'rgba(243, 143, 23, 1)',
                      textAlign: 'center',
                      // position: 'absolute',
                      // zIndex: 1003,
                      fontFamily: 'JosefinSans-Bold',
                    }}>
                    Get Ready!
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: width,
                    justifyContent: 'space-around',
                    // backgroundColor: 'red'
                  }}>
                  <Text
                    style={{
                      fontSize: width * 0.05,
                      fontFamily: 'JosefinSans-Bold',
                      color: 'rgba(255, 255, 255, 0.8)',

                      // marginLeft: width * 0.05,
                    }}>
                    {this.props.route.params.burning}
                  </Text>

                  <Text
                    style={{
                      fontSize: width * 0.05,
                      fontFamily: 'JosefinSans-Bold',
                      color: 'rgba(255, 255, 255, 0.8)',

                      marginLeft: width * 0.05,
                    }}>
                    {this.props.route.params.time}
                  </Text>

                  <Text
                    style={{
                      fontSize: width * 0.05,
                      fontFamily: 'JosefinSans-Bold',
                      color: 'rgba(255, 255, 255, 0.8)',

                      marginLeft: width * 0.05,
                    }}>
                    {this.props.route.params.level}
                  </Text>
                </View>
                {/*<View style={{backgroundColor: 'transparent', flex: 1}}>*/}
                <View style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  // paddingBottom: width*0.1
                  flex: 1,
                }}>
                  <FlatList
                    contentContainerStyle={{
                      // paddingBottom: 20,

                    }}
                    data={this.props.route.params.itemName}
                    keyExtractor={(item, index) => {
                      index.toString();
                    }}
                    renderItem={({item, index}) => {
                      console.warn(this.props.route.params.time);
                      // console.warn(item);
                      // console.warn(index);.
                      // console.warn("FlatList entered");
                      return (
                        <View
                          style={{
                            width: width,
                            alignItems: 'center',
                            height: width * 0.25,
                            flexDirection: 'row',
                            paddingTop: width * 0.15,
                            paddingLeft: width * 0.03,
                            paddingBottom: 20,
                          }}>
                          <Image
                            style={{width: width * 0.15, height: width * 0.15}}
                            source={
                              (item.title == 'Jumping Jack' &&
                                require('../../assets/gifs/jumpingjack.gif')) ||
                              (item.title == 'Crunches' &&
                                require('../../assets/gifs/crunches.gif')) ||
                              (item.title == 'Lunges' &&
                                require('../../assets/gifs/lunges.gif')) ||
                              (item.title == 'Bird Dog' &&
                                require('../../assets/gifs/bird-dog.gif')) ||
                              (item.title == 'Mountain Climbing' &&
                                require('../../assets/gifs/mountain-climbing.gif')) ||
                              (item.title == 'Push Up' &&
                                require('../../assets/gifs/push-ups.gif')) ||
                              (item.title == 'Squats' &&
                                require('../../assets/gifs/squats.gif')) ||
                              (item.title == 'Planks' &&
                                require('../../assets/gifs/plank_f_rgb.jpg')) ||
                              (item.title == 'Stepup Onto Chair' &&
                                require('../../assets/gifs/step-up-onto-chair.gif')) ||
                              (item.title == 'Butt Bridge' &&
                                require('../../assets/gifs/butt--brigde.gif')) ||
                              (item.title == 'Reverse Crunches' &&
                                require('../../assets/gifs/reverse-crunches.gif')) ||
                              (item.title == 'Scissors' &&
                                require('../../assets/gifs/scissors.gif')) ||
                              (item.title == 'Triceps Dips' &&
                                require('../../assets/gifs/tricep-dips.gif')) ||
                              (item.title == 'Abdominal Crunches' &&
                                require('../../assets/gifs/abs/abdominal-crunches.gif')) ||
                              (item.title == 'Sit Ups' &&
                                require('../../assets/gifs/abs/sit-ups.gif')) ||
                              (item.title == 'Leg Raises' &&
                                require('../../assets/gifs/abs/leg-raises.gif')) ||
                              (item.title == 'Plank' &&
                                require('../../assets/gifs/abs/plank_f_rgb.jpg')) ||
                              (item.title == 'Stepup Onto Chair' &&
                                require('../../assets/gifs/step-up-onto-chair.gif'))
                            }
                          />
                          <Text
                            style={{
                              fontSize: width * 0.05,
                              fontFamily: 'JosefinSans',
                              color: 'rgba(255, 255, 255, 0.8)',
                              marginLeft: width * 0.05,
                            }}>
                            {item.title}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
                {/*</View>*/}
                <View
                  style={{
                    // height: 50,
                    width: width,
                    // height: width * 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // marginBottom: width * 0.5,
                  }}>
                  <Button
                    buttonText={'START'}
                    style={{
                      height: width * 0.14,
                      width: width * 0.9,
                      backgroundColor: 'rgba(255,255,255,0.3)',
                      borderColor: '#F38F17',
                      borderWidth: width * 0.025,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: width * 0.15,
                      marginTop: width * 0.03,
                    }}
                    onPress={() => {
                      // title, level
                      this.setState({toShow: 1});
                      //SoundPlayer.playSoundFile('go', 'mp3')
                      // try {
                      //   // play the file tone.mp3
                      //   SoundPlayer.playSoundFile('go', 'mp3')
                      //   // or play from url
                      //  // SoundPlayer.playUrl('https://example.com/music.mp3')
                      // } catch (e) {
                      //   console.log(`cannot play the sound file`, e)
                      // }
                    }}
                  />
                </View>
              </View>
            ))}

            {/*{*/}
            {/*  this.props.route.params.index == 0*/}
            {/*  &&*/}

            {/*  <View>*/}
            {/*    <Text style={styles.logoStyle}>{this.props.route.params.title}</Text>*/}
            {/*    <Text style={styles.typeStyle}>Hello</Text>*/}
            {/*  </View>*/}
            {/*}*/}
            {/*{*/}
            {/*  this.props.route.params.index == 1*/}
            {/*  &&*/}
            {/*  <Text style={styles.typeStyle}>Hello</Text>*/}
            {/*}*/}
            {/*</ScrollView>*/}
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
    // justifyContent: this.state.toShow == 3 && 'center',
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
    fontSize: width * 0.08,
    // marginBottom: ,
    fontWeight: '600',
    color: '#F38F17',
    // position: 'absolute',
    // zIndex: 1003,
    fontFamily: 'JosefinSans-Bold',
    marginTop: 30,
  },
  typeStyle: {
    fontSize: 18,
    // marginBottom: ,
    fontWeight: '600',
    color: '#F38F17',
    // position: 'absolute',
    // zIndex: 1003,
    fontFamily: 'JosefinSans-Bold',
    marginTop: 5,
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
