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
          source={require('../../assets/imageFour.jpg')}
          style={styles.splashImage}
        />
        <LinearGradieant
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']}
          style={styles.mainView}>
          <View style={styles.logo}>
            <Text style={styles.logoStyle}>
              {this.props.route.params.title}
            </Text>
            <ScrollView>
              <Button
                buttonText={CHALLENGE_LEVEL.beginner1}
                style={{
                  height: width * 0.14,
                  width: width * 0.9,
                  backgroundColor: 'rgba(41, 241, 195, 0.3)',
                  borderColor: 'rgba(41, 241, 195, 0.7)',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 10,
                }}
                onPress={() => {
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
                  backgroundColor: 'rgba(41, 241, 195, 0.3)',
                  borderColor: 'rgba(41, 241, 195, 0.7)',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 10,
                }}
                onPress={() => {
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
                  backgroundColor: 'rgba(236,255,85, 0.3)', //rgb(236,255,85)
                  borderColor: 'rgba(236,255,85,0.7)',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 40,
                }}
                onPress={() => {
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
                  backgroundColor: 'rgba(236,255,85, 0.3)', //rgb(236,255,85)
                  borderColor: 'rgba(236,255,85,0.7)',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 10,
                }}
                onPress={() => {
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
                  backgroundColor: 'rgba(255,75,114, 0.3)',
                  borderColor: 'rgba(255,75,114,0.7)',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 40,
                }}
                onPress={() => {
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
                  backgroundColor: 'rgba(255,75,114, 0.3)',
                  borderColor: 'rgba(255,75,114,0.7)',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 10,
                }}
                onPress={() => {
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  input: {
    flex: 1,
  },
  logoStyle: {
    fontSize: 25,
    // marginBottom: ,
    fontWeight: '600',
    color: '#F3D302',
    // position: 'absolute',
    // zIndex: 1003,
    fontFamily: 'JosefinSans-Bold',
    marginTop: 30,
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
