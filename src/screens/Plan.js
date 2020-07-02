import React, {Component} from 'react';
import {View, StatusBar, Image, Text, Dimensions, TouchableOpacity} from 'react-native';
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import LinearGradieant from 'react-native-linear-gradient';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import Store from '../store'
import { setSex } from '../global/Functions';

let {orderStore} = Store;
const {width, height} = Dimensions.get('window');

@observer
 class Plan extends Component {


  // componentDidMount(): void {
  //   if (this.state.view == 6) {
  //     setTimeout(()=>{this.setState({view:7})}, 4000)
  //
  //   }
  //
  // }

  state = {
    view: 1,
    sex: '',
    goal: '',
    exerciseRate: '',
    climbingFloors: '',
    pushUps: '',


  };


  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} translucent={true} backgroundColor={'transparent'}/>
        <Image
          source={require('../../assets/imageFour.jpg')}
          style={styles.splashImage}/>
        <LinearGradieant colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']} style={styles.mainView}>
          {
            this.state.view == 1
            &&
            <View style={styles.logo}>

              <Text style={styles.logoStyle}>WHAT'S YOUR GOAL?</Text>
              <Text style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'rgba(255,255,255,0.5)',
                // position: 'absolute',
                // zIndex: 1003,
                fontFamily: 'JosefinSans-Bold',

              }}>Achieve your goal with your personalized plan</Text>


              <Button buttonText={'LOSE WEIGHT'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 50,

              }}
                      onPress={() => {
                        this.setState({goal: 'Loose Weight'});
                        console.log(this.state.goal);
                        this.setState({view: 2});
                      }}
              />


              <Button buttonText={'GET TONED'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 50,

              }}
                      onPress={() => {
                        this.setState({goal: 'Get Toned'});
                        console.log(this.state.goal);
                        this.setState({view: 2});
                      }}/>

              <Button buttonText={'BUILD MUSCLE'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 50,

              }}
                      onPress={() => {
                        this.setState({goal: 'Build Muscle'});
                        console.log(this.state.goal);
                        this.setState({view: 2});
                      }}/>


            </View>
          }

          {
            this.state.view == 2
            &&
            <View style={styles.logo}>

              <Text style={styles.logoStyle}>ABOUT YOU</Text>
              <Text style={{
                fontSize: 17,
                fontWeight: '600',
                marginLeft: 20,
                color: 'rgba(255,255,255,0.5)',
                // position: 'absolute',
                // zIndex: 1003,
                fontFamily: 'JosefinSans-Bold',

              }}>Let us know you better to help boost your workout results</Text>


              <Button buttonText={'Male'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: this.state.sex == 'male' ? 'rgba(41, 241, 195, 0.3)' : 'rgba(255,255,255,0.3)',
                borderColor: this.state.sex == 'male' ? 'rgba(41, 241, 195, 0.7)' : 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 50,

              }}
                      onPress={() => {
                        this.setState({sex: 'male'});
                        setSex('male');
                        // console.log(this.state.sex);

                        // this.props.navigation.navigate('SetWeight')
                      }}
              />


              <Button buttonText={'Female'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: this.state.sex == 'female' ? 'rgba(41, 241, 195, 0.3)' : 'rgba(255,255,255,0.3)',
                borderColor: this.state.sex == 'female' ? 'rgba(41, 241, 195, 0.7)' : 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 50,

              }}
                      onPress={() => {
                        this.setState({sex: 'female'});
                        setSex('female');

                        // this.props.navigation.navigate('SetWeight')
                      }}
              />


              <TouchableOpacity onPress={() => {
                if (this.state.sex == ''){
                  alert('Please select Male or Female');
                  alert(JSON.stringify(this.state));
                }
                else {
                  this.setState({view: 3});
                  console.log(`Sex: ${this.state.sex}`);
                }

              }}>
                <View style={{
                  height: width * 0.1,
                  width: width * 0.3,
                  backgroundColor: 'rgba(1,1,1,0.3)',
                  borderColor: 'rgba(255,255,255,0.7)',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 50,

                }}>
                  <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    color: 'rgba(255,255,255,0.7)',
                    // position: 'absolute',
                    // zIndex: 1003,
                    fontFamily: 'JosefinSans-Bold',

                  }}>Next</Text>
                </View>
              </TouchableOpacity>


            </View>
          }

          {
            this.state.view == 3
            &&
            <View style={styles.logo}>

              <Text style={{
                fontSize: 30,
                fontWeight: '600',
                color: '#F3D302',
                marginLeft: 30,
                fontFamily: 'JosefinSans-Bold',

              }}>HOW OFTEN DO YOU EXERCISE?</Text>


              <Button buttonText={'HARDLY'} style={{
                height: width * 0.15,

                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.setState({exerciseRate: 'Hardly'});
                        this.setState({view: 4});
                      }}/>


              <Button buttonText={'SOMETIMES'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.setState({exerciseRate: 'Sometimes'});
                        this.setState({view: 4});
                      }}/>


              <Button buttonText={'2-3 TIMES A WEEK'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.setState({exerciseRate: '2-3 Times A Week'});
                        this.setState({view: 4});
                      }}/>


              <Button buttonText={'OVER 4 TIMES A WEEK'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.setState({exerciseRate: 'Over 4 Times A Week'});
                        this.setState({view: 4});
                      }}/>


            </View>
          }
          {
            this.state.view == 4
            &&
            <View style={styles.logo}>

              <Text style={{
                fontSize: 30,
                fontWeight: '600',
                color: '#F3D302',
                marginLeft: 50,
                fontFamily: 'JosefinSans-Bold',

              }}>HOW DO YOU FEEL AFTER CLIMBING 5 FLOORS?</Text>


              <Button buttonText={'SHORTNESS OF BREATH'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.setState({climbingFloors: 'Shortness of Breath'});
                        this.setState({view: 5});
                      }}/>


              <Button buttonText={'A LITTLE TIRED'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.setState({climbingFloors: 'A Little Tired'});
                        this.setState({view: 5});
                      }}/>


              <Button buttonText={'EASY'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.setState({climbingFloors: 'Easy'});
                        this.setState({view: 5});
                      }}/>


              <Button buttonText={'I CAN RUN UP THERE'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.setState({climbingFloors: 'I Can Run Up There'});
                        this.setState({view: 5});
                      }}/>


            </View>
          }

          {
            this.state.view == 5
            &&
            <View style={styles.logo}>

              <Text style={{
                fontSize: 30,
                fontWeight: '600',
                color: '#F3D302',
                marginLeft: 40,
                fontFamily: 'JosefinSans-Bold',

              }}>HOW MANY PUSH-UPS CAN YOU DO AT ONE TIME?</Text>


              <Button buttonText={'LESS THAN 10'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.setState({pushUps: 'Less Than 10'});
                        this.setState({view: 6});
                        setTimeout(() => {
                          this.setState({view: 7});
                        }, 4000);
                      }}/>


              <Button buttonText={'10-20'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.setState({pushUps: '10-20'});
                        this.setState({view: 6});
                        setTimeout(() => {
                          this.setState({view: 7});
                        }, 4000);
                      }}/>

              <Button buttonText={'21-40'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.setState({pushUps: '21-40'});
                        this.setState({view: 6});
                        setTimeout(() => {
                          this.setState({view: 7});
                        }, 4000);
                      }}/>

              <Button buttonText={'OVER 40'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.setState({pushUps: 'Over 40'});
                        alert(JSON.stringify(this.state));
                        console.log(`Goal: ${this.state.goal}`);
                        console.log(`Sex: ${this.state.sex}`);
                        console.log(`climbingFloors: ${this.state.climbingFloors}`);
                        console.log(`exerciseRate: ${this.state.exerciseRate}`);
                        console.log(`pushUps: ${this.state.pushUps}`);
                        this.setState({view: 6});
                        setTimeout(() => {
                          this.setState({view: 7});


                        }, 4000);
                      }}/>


            </View>
          }

          {
            this.state.view == 6
            &&
            <View style={styles.logo}>

              <Text style={{
                fontSize: 30,
                fontWeight: '600',
                color: '#F3D302',
                marginLeft: 60,
                fontFamily: 'JosefinSans-Bold',

              }}>CREATING A MEAL PLAN FOR YOU</Text>



            </View>
          }

          {
            this.state.view == 7
            &&
            <View style={styles.logo}>

              <Text style={{
                fontSize: 30,
                fontWeight: '600',
                color: '#F3D302',
                marginLeft: 10,
                fontFamily: 'JosefinSans-Bold',

              }}>YOUR PLAN IS READY!</Text>


              <Button buttonText={'OKAY'} style={{
                height: width * 0.15,
                width: width * 0.8,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 30,

              }}
                      onPress={() => {
                        this.props.navigation.navigate('Challenges');
                      }}
              />


            </View>
          }

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
    fontSize: 30,
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


export default Plan;
