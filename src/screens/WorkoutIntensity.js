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
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import LinearGradieant from 'react-native-linear-gradient';
import {CHALLENGE_LEVEL} from '../system/FitnessSystem';
import {
  setFullBodyLevel,
  setAbsLevel,
  setButtLevel,
  setArmLevel,
  setLegLevel,} from '../global/Functions';

const {width, height} = Dimensions.get('window');
// const { title } = route.params;
export default class WorkoutIntensity extends Component {
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

            <View style={{
              width: width,
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
              <View style={{marginTop: 17}}>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.goBack();
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
                {this.props.route.params.title}
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

            <ScrollView style={{paddingTop: 10}}>
              <Button
                buttonText={CHALLENGE_LEVEL.beginner1}
                style={{
                  height: width * 0.14,
                  width: width * 0.9,
                   backgroundColor: 'rgba(255,255,255,0.3)',
                  borderColor: '#F38F17',
                  borderWidth: width*0.025,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 10,
                }}
                onPress={() => {
                  if (this.props.route.params.title == 'FULL BODY WORKOUT'){
                    setFullBodyLevel('Beginner 1');
                  } else if (this.props.route.params.title == 'ABS WORKOUT'){
                    setAbsLevel('Beginner 1');
                  } else if (this.props.route.params.title == 'BUTT WORKOUT') {
                    setButtLevel('Beginner 1');
                  } else if (this.props.route.params.title == 'ARM WORKOUT') {
                    setArmLevel('Beginner 1');
                  } else if (this.props.route.params.title == 'LEG WORKOUT') {
                    setLegLevel('Beginner 1');
                  }

                  this.props.navigation.navigate('ExerciseScreen', {
                    title: this.props.route.params.title,
                    level: CHALLENGE_LEVEL.beginner1,
                  });
                }}
              />

              <Button
                buttonText={CHALLENGE_LEVEL.beginner2}
                style={{
                  height: width * 0.14,
                  width: width * 0.9,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderColor: '#F38F17',
                  borderWidth: width*0.025,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 10,
                }}
                onPress={() => {
                  if (this.props.route.params.title == 'FULL BODY WORKOUT'){
                    setFullBodyLevel('Beginner 2');
                  } else if (this.props.route.params.title == 'ABS WORKOUT'){
                    setAbsLevel('Beginner 2');
                  } else if (this.props.route.params.title == 'BUTT WORKOUT') {
                    setButtLevel('Beginner 2');
                  } else if (this.props.route.params.title == 'ARM WORKOUT') {
                    setArmLevel('Beginner 2');
                  } else if (this.props.route.params.title == 'LEG WORKOUT') {
                    setLegLevel('Beginner 2');
                  }

                  this.props.navigation.navigate('ExerciseScreen', {
                    title: this.props.route.params.title,
                    level: CHALLENGE_LEVEL.beginner2,
                  });
                }}
              />

              <Button
                buttonText={CHALLENGE_LEVEL.intermediate1}
                style={{
                  height: width * 0.14,
                  width: width * 0.9,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderColor: '#F38F17',
                  borderWidth: width*0.025,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: width*0.065,
                }}
                onPress={() => {
                  if (this.props.route.params.title == 'FULL BODY WORKOUT'){
                    setFullBodyLevel('Intermediate 1');
                  } else if (this.props.route.params.title == 'ABS WORKOUT'){
                    setAbsLevel('Intermediate 1');
                  } else if (this.props.route.params.title == 'BUTT WORKOUT') {
                    setButtLevel('Intermediate 1');
                  } else if (this.props.route.params.title == 'ARM WORKOUT') {
                    setArmLevel('Intermediate 1');
                  } else if (this.props.route.params.title == 'LEG WORKOUT') {
                    setLegLevel('Intermediate 1');
                  }

                  // setFullBodyLevel('Intermediate 1');
                  this.props.navigation.navigate('ExerciseScreen', {
                    title: this.props.route.params.title,
                    level: CHALLENGE_LEVEL.intermediate1,
                  });
                }}
              />

              <Button
                buttonText={CHALLENGE_LEVEL.intermediate2}
                style={{
                  height: width * 0.14,
                  width: width * 0.9,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderColor: '#F38F17',
                  borderWidth: width*0.025,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 10,
                }}
                onPress={() => {
                  if (this.props.route.params.title == 'FULL BODY WORKOUT'){
                    setFullBodyLevel('Intermediate 2');
                  } else if (this.props.route.params.title == 'ABS WORKOUT'){
                    setAbsLevel('Intermediate 2');
                  } else if (this.props.route.params.title == 'BUTT WORKOUT') {
                    setButtLevel('Intermediate 2');
                  } else if (this.props.route.params.title == 'ARM WORKOUT') {
                    setArmLevel('Intermediate 2');
                  } else if (this.props.route.params.title == 'LEG WORKOUT') {
                    setLegLevel('Intermediate 2');
                  }

                  // setFullBodyLevel('Intermediate 2');
                  this.props.navigation.navigate('ExerciseScreen', {
                    title: this.props.route.params.title,
                    level: CHALLENGE_LEVEL.intermediate2,
                  });
                }}
              />

              <Button
                buttonText={CHALLENGE_LEVEL.professional1}
                style={{
                  height: width * 0.14,
                  width: width * 0.9,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderColor: '#F38F17',
                  borderWidth: width*0.025,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: width*0.065,
                }}
                onPress={() => {
                  if (this.props.route.params.title == 'FULL BODY WORKOUT'){
                    setFullBodyLevel('Professional 1');
                  } else if (this.props.route.params.title == 'ABS WORKOUT'){
                    setAbsLevel('Professional 1');
                  } else if (this.props.route.params.title == 'BUTT WORKOUT') {
                    setButtLevel('Professional 1');
                  } else if (this.props.route.params.title == 'ARM WORKOUT') {
                    setArmLevel('Professional 1');
                  } else if (this.props.route.params.title == 'LEG WORKOUT') {
                    setLegLevel('Professional 1');
                  }

                  // setFullBodyLevel('Professional 1');
                  this.props.navigation.navigate('ExerciseScreen', {
                    title: this.props.route.params.title,
                    level: CHALLENGE_LEVEL.professional1,
                  });
                }}
              />

              <Button
                buttonText={CHALLENGE_LEVEL.professional2}
                style={{
                  height: width * 0.14,
                  width: width * 0.9,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderColor: '#F38F17',
                  borderWidth: width*0.025,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 10,
                }}
                onPress={() => {
                  if (this.props.route.params.title == 'FULL BODY WORKOUT'){
                    setFullBodyLevel('Professional 2');
                  } else if (this.props.route.params.title == 'ABS WORKOUT'){
                    setAbsLevel('Professional 2');
                  } else if (this.props.route.params.title == 'BUTT WORKOUT') {
                    setButtLevel('Professional 2');
                  } else if (this.props.route.params.title == 'ARM WORKOUT') {
                    setArmLevel('Professional 2');
                  } else if (this.props.route.params.title == 'LEG WORKOUT') {
                    setLegLevel('Professional 2');
                  }

                  // setFullBodyLevel('Professional 2');
                  this.props.navigation.navigate('ExerciseScreen', {
                    title: this.props.route.params.title,
                    level: CHALLENGE_LEVEL.professional2,
                  });
                }}
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
    top: width*0.05,
    left: 0,
    right: 0,
    bottom: 0,
  },
  input: {
    flex: 1,
  },
  logoStyle: {
    fontSize: width*0.05,
    // marginBottom: ,
    fontWeight: '600',
    color: '#F38F17',
    // position: 'absolute',
    // zIndex: 1003,
    fontFamily: 'JosefinSans-Bold',
    marginTop: width*0.07,
    marginBottom: width*0.05
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
