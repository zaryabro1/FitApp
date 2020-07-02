import React, {Component} from 'react';
import {View, StatusBar, Image, Text, Dimensions, ToastAndroid} from 'react-native';
import {Picker} from 'react-native-wheel-pick';

import {observer} from 'mobx-react';
import {observable} from 'mobx';
import { setWeight, setWeightType } from '../global/Functions';

import LinearGradieant from 'react-native-linear-gradient';
import Button from '../components/Button';

const {width, height} = Dimensions.get('window');

@observer
 class SetWeight extends Component {
  state = {
    weightType: '',
    weight: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} translucent={true} backgroundColor={'transparent'}/>
        <Image
          source={require('../../assets/whiteBackground.jpg')}
          style={styles.splashImage}/>
        <LinearGradieant colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']} style={styles.mainView}>
          <View style={styles.logo}>
            <Text style={styles.logoStyle}>Fit App</Text>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#E4E4E4', fontSize: 20, marginBottom: 20, fontFamily: 'JosefinSans-Regular'}}>Please
                select your weight:</Text>

              <Picker
                style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', width: width * 0.778, height: width * 0.73}}
                selectedValue={50}
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
                  24,
                  25,
                  26,
                  27,
                  28,
                  29,
                  30,
                  31,
                  32,
                  33,
                  34,
                  35,
                  36,
                  37,
                  38,
                  39,
                  40,
                  41,
                  42,
                  43,
                  44,
                  45,
                  46,
                  47,
                  48,
                  49,
                  50,
                  51,
                  52,
                  53,
                  54,
                  55,
                  56,
                  57,
                  58,
                  59,
                  60,
                  61,
                  62,
                  63,
                  64,
                  65,
                  66,
                  67,
                  68,
                  69,
                  70,
                  71,
                  72,
                  73,
                  74,
                  75,
                  76,
                  77,
                  78,
                  79,
                  80,
                  81,
                  82,
                  83,
                  84,
                  85,
                  86,
                  87,
                  88,
                  89,
                  90,
                  91,
                  92,
                  93,
                  94,
                  95,
                  96,
                  97,
                  98,
                  99,
                  100,
                  101,
                  102,
                  103,
                  104,
                  105,
                  106,
                  107,
                  108,
                  109,
                  110,
                  111,
                  112,
                  113,
                  114,
                  115,
                  116,
                  117,
                  118,
                  119,
                  120,
                  121,
                  122,
                  123,
                  124,
                  125,
                  126,
                  127,
                  128,
                  129,
                  130,
                  131,
                  132,
                  133,
                  134,
                  135,
                  136,
                  137,
                  138,
                  139,
                  140,
                  141,
                  142,
                  143,
                  144,
                  145,
                  146,
                  147,
                  148,
                  149,
                  150,
                  151,
                  152,
                  153,
                  154,
                  155,
                  156,
                  157,
                  158,
                  159,
                  160,
                  161,
                  162,
                  163,
                  164,
                  165,
                  166,
                  167,
                  168,
                  169,
                  170,
                  171,
                  172,
                  173,
                  174,
                  175,
                  176,
                  177,
                  178,
                  179,
                  180,
                  181,
                  182,
                  183,
                  184,
                  185,
                  186,
                  187,
                  188,
                  189,
                  190,
                  191,
                  192,
                  193,
                  194,
                  195,
                  196,
                  197,
                  198,
                  199,
                  200]}
                onValueChange={value => {
                  this.setState({weight: value});
                  setWeight(`${value}`);
                }}
                itemSpace={30}
              />
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: width * 0.5, marginTop: 20}}>
                <Button buttonText={'KG'} style={{
                  height: width * 0.1,
                  width: width * 0.2,
                  backgroundColor: this.state.weightType == 'KG' ? 'rgba(41, 241, 195, 0.3)' : 'rgba(255,255,255,0.3)',
                  borderColor: this.state.weightType == 'KG' ? 'rgba(41, 241, 195, 0.7)' : 'rgba(255,255,255,0.7)',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 10,

                }}
                        onPress={() => {
                          this.setState({weightType: 'KG'});
                          setWeightType('KG');
                        }}
                />
                <Button buttonText={'LBS'} style={{
                  height: width * 0.1,
                  width: width * 0.2,
                  backgroundColor: this.state.weightType == 'LBS' ? 'rgba(41, 241, 195, 0.3)' : 'rgba(255,255,255,0.3)',
                  borderColor: this.state.weightType == 'LBS' ? 'rgba(41, 241, 195, 0.7)' : 'rgba(255,255,255,0.7)',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 10,

                }}
                        onPress={() => {
                          this.setState({weightType: 'LBS'});
                          setWeightType('LBS');

                        }}
                />
              </View>
            </View>

            <Button buttonText={'Next'} style={{
              height: width * 0.15,
              width: width * 0.8,
              backgroundColor: '#5663FF',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
              marginTop: 30,

            }} onPress={() => {
              this.state.weightType ?
                this.props.navigation.navigate('TabNavigation')
                :
                ToastAndroid.showWithGravity(
                  'Please select weight and weight type',
                  ToastAndroid.LONG,
                  ToastAndroid.BOTTOM,
                );
            }}/>

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
    justifyContent: 'space-around',
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
    // marginBottom: 200,
    fontWeight: '600',
    color: '#F3D302',
    // position: 'absolute',
    // zIndex: 1003,
    fontFamily: 'JosefinSans-Bold',

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


export default SetWeight;
