import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Button from '../components/Button';
import LinearGradieant from 'react-native-linear-gradient';

import {CHALLENGE_LEVEL, SetFitnessStatusTrue} from '../system/FitnessSystem';

const {width, height} = Dimensions.get('window');

let i = 4;

// const hello = function () {
//   this.props.navigation.goBack();
// }

// const { title } = route.params;
export default class StartWorkout extends Component {
  state = {
    workoutIndex: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          translucent={true}
          backgroundColor={'transparent'}
        />
        <Image
          source={require('../../assets/imageFour.jpg')}
          style={styles.splashImage}
        />
        <LinearGradieant
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']}
          style={styles.mainView}>
          <View style={styles.logo}>
            {this.state.workoutIndex <
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
                    (this.props.route.params.itemName[this.state.workoutIndex]
                      .title == 'Jumping jack' &&
                      require('../../assets/jumpingjack.gif')) ||
                    (this.props.route.params.itemName[this.state.workoutIndex]
                      .title == 'Push Up' &&
                      require('../../assets/push-ups.gif')) ||
                    (this.props.route.params.itemName[this.state.workoutIndex]
                      .title == 'Squat' &&
                      require('../../assets/squats.gif')) ||
                    (this.props.route.params.itemName[this.state.workoutIndex]
                      .title == 'Lunges' &&
                      require('../../assets/bird-dog.gif'))
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
