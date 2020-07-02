import React, {Component} from 'react';
import {View, StatusBar, Image, Text, Dimensions} from 'react-native';
import {observer} from 'mobx-react';
import LinearGradieant from 'react-native-linear-gradient';
import Store from '../store';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('window');

// const { title } = route.params;
@observer
class AboutMe extends Component {
  componentDidMount = async () => {
    let {orderStore} = Store;
    try {
      const value = await AsyncStorage.getItem('sex');
      if (value !== null) {
        this.setState({sex: value});
        console.warn(value);
      }
    } catch (e) {
      console.warn(e);
    }
    try {
      const weight_value = await AsyncStorage.getItem('weight');
      if (weight_value !== null) {
        this.setState({weight: weight_value});
        console.warn(weight_value);
        console.warn(weight_value);
      }
    } catch (e) {
      console.warn(e);
    }

    try {
      const weight_type = await AsyncStorage.getItem('weightType');
      if (weight_type !== null) {
        this.setState({weightType: weight_type});
        console.warn(weight_type);
        console.warn(weight_type);
      }
    } catch (e) {
      console.warn(e);
    }
    // this.setState ({
    //   // numberText: orderStore.school.details.numberText,
    //   // sex: orderStore.aboutMe.identity.sex,
    //   weight: orderStore.aboutMe.identity.weight,
    //   weightType: orderStore.aboutMe.identity.weightType
    // });
  };

  constructor(props) {
    super(props);
    this.state = {
      sex: '',
      weight: '',
      weightType: '',
    };
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
          source={require('../../assets/imageFour.jpg')}
          style={styles.splashImage}
        />
        <LinearGradieant
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']}
          style={styles.mainView}>
          <View style={styles.logo}>
            <Text style={styles.logoStyle}>About Me</Text>
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <View style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                justifyContent: 'center',
                alignItems: 'center',
                // paddingHorizontal: width * 0.08,
                paddingVertical: width * 0.04,
                borderWidth: 1,
                borderColor: '#FFFFFF',
                borderRadius: width * 0.02,
                width: width * 0.55,
              }}>
                <Text style={styles.typeStyle}>Sex: {this.state.sex}</Text>
                <Text style={styles.typeStyle}>
                  Weight: {this.state.weight} {this.state.weightType}{' '}
                </Text>
              </View>
            </View>
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
    // justifyContent: 'center',
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

export default AboutMe;
