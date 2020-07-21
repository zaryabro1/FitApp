import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
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
let _onFinishedPlayingSubscription = null
let _onFinishedLoadingSubscription = null
let _onFinishedLoadingFileSubscription = null
let  _onFinishedLoadingURLSubscription = null

export default class StartWorkout extends Component {


  componentDidMount(): void {
    console.warn(this.props.route.params.itemName);
    //
    // _onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
    //   console.log('finished playing', success)
    // })
    // _onFinishedLoadingSubscription = SoundPlayer.addEventListener('FinishedLoading', ({ success }) => {
    //   console.log('finished loading', success)
    // })
    // _onFinishedLoadingFileSubscription = SoundPlayer.addEventListener('FinishedLoadingFile', ({ success, name, type }) => {
    //   console.log('finished loading file', success, name, type)
    // })
    // _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener('FinishedLoadingURL', ({ success, url }) => {
    //   console.log('finished loading url', success, url)
    // })
  }

  // componentWillUnmount() {
  //   _onFinishedPlayingSubscription.remove()
  //   _onFinishedLoadingSubscription.remove()
  //   _onFinishedLoadingURLSubscription.remove()
  //   _onFinishedLoadingFileSubscription.remove()
  // }


  state = {
    workoutIndex: 0,
    toShow: 2,
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
        <Image
          source={require('../../assets/imageSixteen.jpg')}
          style={styles.splashImage}
        />
        <LinearGradieant
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']}
          style={styles.mainView}>
          <View style={styles.logo}>
            {
              (this.state.toShow == 1) && (
              this.state.workoutIndex <
              this.props.route.params.itemName.length && (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.logoStyle}>
                    {
                      this.props.route.params.itemName[this.state.workoutIndex]
                        .title
                    }
                  </Text>
                  <Image
                    source={
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Jumping Jack' &&
                        require('../../assets/gifs/jumpingjack.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Crunches' &&
                        require('../../assets/gifs/crunches.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Lunges' &&
                        require('../../assets/gifs/lunges.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Bird Dog' &&
                        require('../../assets/gifs/bird-dog.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Mountain Climbing' &&
                        require('../../assets/gifs/mountain-climbing.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Push Up' &&
                        require('../../assets/gifs/push-ups.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Squats' &&
                        require('../../assets/gifs/squats.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Planks' &&
                        require('../../assets/gifs/plank_f_rgb.jpg')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Stepup Onto Chair' &&
                        require('../../assets/gifs/step-up-onto-chair.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Butt Bridge' &&
                        require('../../assets/gifs/butt--brigde.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Reverse Crunches' &&
                        require('../../assets/gifs/reverse-crunches.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Scissors' &&
                        require('../../assets/gifs/scissors.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Triceps Dips' &&
                        require('../../assets/gifs/tricep-dips.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Abdominal Crunches' &&
                        require('../../assets/gifs/abs/abdominal-crunches.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Sit Ups' &&
                        require('../../assets/gifs/abs/sit-ups.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Leg Raises' &&
                        require('../../assets/gifs/abs/leg-raises.gif')) ||
                      (this.props.route.params.itemName[this.state.workoutIndex].title == 'Plank' &&
                        require('../../assets/gifs/abs/plank_f_rgb.jpg'))
                    }
                    style={{
                      width: width * 0.7,
                      marginTop: 20,
                      height: width * 0.4,
                      resizeMode: 'contain',

                    }}
                  />
                  <Text style={styles.logoStyle}>
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
                        height: width * 0.14,
                        width: width * 0.9,
                        backgroundColor:
                          (this.props.route.params.level ===
                            CHALLENGE_LEVEL.beginner1 &&
                            'rgba(41, 241, 195, 0.3)') ||
                          (this.props.route.params.level ===
                            CHALLENGE_LEVEL.beginner2 &&
                            'rgba(41, 241, 195, 0.3)') ||
                          (this.props.route.params.level ===
                            CHALLENGE_LEVEL.intermediate1 &&
                            'rgba(236,255,85, 0.3)') ||
                          (this.props.route.params.level ===
                            CHALLENGE_LEVEL.intermediate2 &&
                            'rgba(236,255,85, 0.3)') ||
                          (this.props.route.params.level ===
                            CHALLENGE_LEVEL.professional1 &&
                            'rgba(255,75,114, 0.3)') ||
                          (this.props.route.params.level ===
                            CHALLENGE_LEVEL.professional2 &&
                            'rgba(255,75,114, 0.3)'),
                        borderColor:
                          (this.props.route.params.level ===
                            CHALLENGE_LEVEL.beginner1 &&
                            'rgba(41, 241, 195, 0.7)') ||
                          (this.props.route.params.level ===
                            CHALLENGE_LEVEL.beginner2 &&
                            'rgba(41, 241, 195, 0.7)') ||
                          (this.props.route.params.level ===
                            CHALLENGE_LEVEL.intermediate1 &&
                            'rgba(236,255,85,0.7)') ||
                          (this.props.route.params.level ===
                            CHALLENGE_LEVEL.intermediate2 &&
                            'rgba(236,255,85,0.7)') ||
                          (this.props.route.params.level ===
                            CHALLENGE_LEVEL.professional1 &&
                            'rgba(255,75,114,0.7)') ||
                          (this.props.route.params.level ===
                            CHALLENGE_LEVEL.professional2 &&
                            'rgba(255,75,114,0.7)'),
                        borderWidth: 1,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 10,
                        marginTop: 40,
                      }}
                      onPress={async () => {
                        // title, level
                        await SetFitnessStatusTrue(
                          this.props.route.params.title,
                          this.props.route.params.level,
                          this.props.route.params.day,
                        );
                        this.setState(
                          {workoutIndex: this.state.workoutIndex + 1},
                          async () => {
                            if (
                              this.state.workoutIndex ===
                              this.props.route.params.itemName.length
                            ) {
                              // await this.props.route.params.beforeGoBack();
                              this.props.navigation.goBack();
                            }
                          },
                        );
                      }}
                    />
                  </TouchableOpacity>
                </View>
              ))
            ||
            (this.state.toShow == 2) && (
              <View style={{width: width, alignItems: 'center', justifyContent: 'center', paddingTop: width*0.15}}>
                <Text style={{
                  fontSize: 40,
                  // marginBottom: ,
                  fontWeight: '600',
                  color: '#F3D302',
                  // position: 'absolute',
                  // zIndex: 1003,
                  fontFamily: 'JosefinSans-Bold',
                }}>
                 Get Ready!
                </Text>
                <FlatList data={this.props.route.params.itemName} keyExtractor={(item, index) => {
                  index.toString();
                }} renderItem={({item, index}) => {
                  // console.warn(item);
                  // console.warn(index);.
                  // console.warn("FlatList entered");
                  return (
                    <View style={{
                      width: width,
                      alignItems: 'center',
                      height: width * 0.25,
                      flexDirection: 'row',
                      paddingTop: width*0.15,
                      paddingLeft: width*0.03

                    }}>
                      <Image style={{width: width*0.15, height: width*0.15}} source={
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
                          require('../../assets/gifs/abs/plank_f_rgb.jpg'))
                      }/>

                      <Text style={{fontSize: 30, fontFamily: 'JosefinSans-Bold', color: 'rgba(255, 255, 255, 0.8)', marginLeft: width*0.05}}>{item.title}</Text>
                    </View>
                  );
                }}/>

                <Button
                  buttonText={'START'}
                  style={{
                    height: width * 0.14,
                    width: width * 0.9,
                    backgroundColor:
                      (this.props.route.params.level ===
                        CHALLENGE_LEVEL.beginner1 &&
                        'rgba(41, 241, 195, 0.3)') ||
                      (this.props.route.params.level ===
                        CHALLENGE_LEVEL.beginner2 &&
                        'rgba(41, 241, 195, 0.3)') ||
                      (this.props.route.params.level ===
                        CHALLENGE_LEVEL.intermediate1 &&
                        'rgba(236,255,85, 0.3)') ||
                      (this.props.route.params.level ===
                        CHALLENGE_LEVEL.intermediate2 &&
                        'rgba(236,255,85, 0.3)') ||
                      (this.props.route.params.level ===
                        CHALLENGE_LEVEL.professional1 &&
                        'rgba(255,75,114, 0.3)') ||
                      (this.props.route.params.level ===
                        CHALLENGE_LEVEL.professional2 &&
                        'rgba(255,75,114, 0.3)'),
                    borderColor:
                      (this.props.route.params.level ===
                        CHALLENGE_LEVEL.beginner1 &&
                        'rgba(41, 241, 195, 0.7)') ||
                      (this.props.route.params.level ===
                        CHALLENGE_LEVEL.beginner2 &&
                        'rgba(41, 241, 195, 0.7)') ||
                      (this.props.route.params.level ===
                        CHALLENGE_LEVEL.intermediate1 &&
                        'rgba(236,255,85,0.7)') ||
                      (this.props.route.params.level ===
                        CHALLENGE_LEVEL.intermediate2 &&
                        'rgba(236,255,85,0.7)') ||
                      (this.props.route.params.level ===
                        CHALLENGE_LEVEL.professional1 &&
                        'rgba(255,75,114,0.7)') ||
                      (this.props.route.params.level ===
                        CHALLENGE_LEVEL.professional2 &&
                        'rgba(255,75,114,0.7)'),
                    borderWidth: 1,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: width*0.07,
                    marginTop: width*0.03
                  }}
                  onPress={async () => {
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
            )}

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
    marginTop: 30,
  },
  typeStyle: {
    fontSize: 18,
    // marginBottom: ,
    fontWeight: '600',
    color: '#F3D302',
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
