import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import LinearGradieant from 'react-native-linear-gradient';
import Store from '../store';
import {GetFitnessByTypeAndChallenge, WORKOUT_TYPE} from '../system/FitnessSystem';
import AsyncStorage from '@react-native-community/async-storage';


const {width, height} = Dimensions.get('window');

export default class Challenges extends Component {

  state = {
    fullBodyData: [],
    absData: [],
    buttData: [],
    armData: [],
    legData: [],
    fullBodyLevel: '',
    absLevel: '',
    buttLevel: '',
    armLevel: '',
    legLevel: '',
    percentageFullBodyDone: 0,
    percentageAbsDone: 0,
    percentageButtDone: 0,
    percentageArmDone: 0,
    percentageLegDone: 0,
  };

  // componentDidMount(): void {


  componentDidMount = async () => {


    console.warn(WORKOUT_TYPE.arms);

    console.warn(this.state.fullBodyLevel);
    console.warn(this.state.absLevel);
    console.warn(this.state.buttLevel);
    console.warn(this.state.armLevel);
    console.warn(this.state.legLevel);

    let {orderStore} = Store;
    try {
      const value = await AsyncStorage.getItem('fullBodyLevel');
      if (value !== null) {
        this.setState({fullBodyLevel: value});
        console.warn(value);
      }
    } catch (e) {
      console.warn(e);
    }

    try {
      const value = await AsyncStorage.getItem('absLevel');
      if (value !== null) {
        this.setState({absLevel: value});
        console.warn(value);
      }
    } catch (e) {
      console.warn(e);
    }

    try {
      const value = await AsyncStorage.getItem('buttLevel');
      if (value !== null) {
        this.setState({buttLevel: value});
        console.warn(value);
      }
    } catch (e) {
      console.warn(e);
    }

    try {
      const value = await AsyncStorage.getItem('armLevel');
      if (value !== null) {
        this.setState({armLevel: value});
        console.warn(value);
      }
    } catch (e) {
      console.warn(e);
    }

    try {
      const value = await AsyncStorage.getItem('legLevel');
      if (value !== null) {
        this.setState({legLevel: value});
        console.warn(value);
      }
    } catch (e) {
      console.warn(e);
    }

    // await this.updateData();
    this.unsubscribe = this.props.navigation.addListener('focus', async (e) => {
      await this.updateFullBodyData();
      await this.updateAbsData();
      await this.updateButtData();
      await this.updateArmData();
      await this.updateLegData();
      await this.calculateFullBodyPercentage();
      await this.calculateAbsPercentage();
      await this.calculateButtPercentage();
      await this.calculateArmPercentage();
      await this.calculateLegPercentage();
    });

    await this.updateFullBodyData();
    await this.updateAbsData();
    await this.updateButtData();
    await this.updateArmData();
    await this.updateLegData();
    await this.calculateFullBodyPercentage();
    await this.calculateAbsPercentage();
    await this.calculateButtPercentage();
    await this.calculateArmPercentage();
    await this.calculateLegPercentage();

  };

  componentWillUnmount(): void {
    this.unsubscribe();
  }

  updateFullBodyData = async () => {
    const data = await GetFitnessByTypeAndChallenge(
      'FULL BODY WORKOUT',
      this.state.fullBodyLevel,
    );

    console.log('length => ', data.length);
    this.setState({fullBodyData: data}, this.calculatePercentage);
  };
  updateAbsData = async () => {
    const data = await GetFitnessByTypeAndChallenge(
      'ABS WORKOUT',
      this.state.absLevel,
    );
    this.setState({absData: data}, () => {
      console.log(`console log for abs data ${this.state.absData}`)
    });
  };
  updateButtData = async () => {
    const data = await GetFitnessByTypeAndChallenge(
      'BUTT WORKOUT',
      this.state.buttLevel,
    );
    this.setState({buttData: data}, this.calculatePercentage);
  };
  updateArmData = async () => {
    const data = await GetFitnessByTypeAndChallenge(
      'ARM WORKOUT',
      this.state.armLevel,
    );
    this.setState({armData: data}, this.calculatePercentage);
  };
  updateLegData = async () => {
    const data = await GetFitnessByTypeAndChallenge(
      'LEG WORKOUT',
      this.state.legLevel,
    );
    this.setState({legData: data}, this.calculatePercentage);
  };

  calculateFullBodyPercentage = () => {
    let doneCount = 0;
    const data = this.state.fullBodyData;
    console.log(`this is data body ${this.state.fullBodyData}`);
    for (let i = 0; i < data.length; i++) {
      // console.warn(data);
      if (data[i].done) {
        doneCount++;
      } else {
        break;
      }
    }

    console.warn(doneCount);
    // this.setState({doneCount: doneCount})
    // this.setState({doneCount: doneCount});
    // console.warn(`${(this.state.doneCount*100)/30}% is done`);
    this.setState({percentageFullBodyDone: (doneCount * 100) / 30}, () => {
      console.log(`this is doneCount ${doneCount}`);
      console.warn(this.state.percentageFullBodyDone);
      console.log(`hello percentage done ${this.state.percentageFullBodyDone}`);
    });


  };

  calculateAbsPercentage = () => {
    let doneCount = 0;
    const data = this.state.absData;
    console.log(`this is abs data ${data}`)
    for (let i = 0; i < data.length; i++) {
      // console.warn(data);
      if (data[i].done) {
        doneCount++;
      } else {
        break;
      }
    }

    console.warn(doneCount);
    // this.setState({doneCount: doneCount})
    // this.setState({doneCount: doneCount});
    // console.warn(`${(this.state.doneCount*100)/30}% is done`);
    this.setState({percentageAbsDone: (doneCount * 100) / 30}, () => {
      console.warn(this.state.percentageAbsDone);
      console.log(`hello abd done ${this.state.percentageAbsDone}`);
    });

  };

  calculateButtPercentage = () => {
    let doneCount = 0;
    const data = this.state.buttData;
    for (let i = 0; i < data.length; i++) {
      // console.warn(data);
      if (data[i].done) {
        doneCount++;
      } else {
        break;
      }
    }

    console.warn(doneCount);
    // this.setState({doneCount: doneCount})
    // this.setState({doneCount: doneCount});
    // console.warn(`${(this.state.doneCount*100)/30}% is done`);
    this.setState({percentageButtDone: (doneCount * 100) / 30}, () => {
      console.warn(this.state.percentageButtDone);
    });
  };

  calculateArmPercentage = () => {
    let doneCount = 0;
    const data = this.state.armData;
    for (let i = 0; i < data.length; i++) {
      // console.warn(data);
      if (data[i].done) {
        doneCount++;
      } else {
        break;
      }
    }

    console.warn(doneCount);
    // this.setState({doneCount: doneCount})
    // this.setState({doneCount: doneCount});
    // console.warn(`${(this.state.doneCount*100)/30}% is done`);
    this.setState({percentageArmDone: (doneCount * 100) / 30}, () => {
      console.warn(this.state.percentageArmDone);
    });
  };

  calculateLegPercentage = () => {
    let doneCount = 0;
    const data = this.state.legData;
    for (let i = 0; i < data.length; i++) {
      // console.warn(data);
      if (data[i].done) {
        doneCount++;
      } else {
        break;
      }
    }

    console.warn(doneCount);
    // this.setState({doneCount: doneCount})
    // this.setState({doneCount: doneCount});
    // console.warn(`${(this.state.doneCount*100)/30}% is done`);
    this.setState({percentageLegDone: (doneCount * 100) / 30}, () => {
      console.warn(this.state.percentageLegDone);
    });
  };

  // }

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
                marginVertical: width * 0.02,
                marginTop: width * 0.07,
              }} onPress={() => {
                this.props.navigation.navigate('WorkoutIntensity', {
                  title: WORKOUT_TYPE.fullBody,
                });
              }}>
                <ImageBackground source={require('../../assets/background/fullbody.png')}
                                 style={{
                                   resizeMode: 'cover',
                                   height: width * 0.3,
                                   width: width * 0.9,
                                 }}
                                 imageStyle={{
                                   borderRadius: 10,
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
                    paddingLeft: width * 0.07,
                    // marginTop: 10,
                    backgroundColor: this.state.percentageFullBodyDone != 0 ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
                  }}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'JosefinSans-Regular',
                      fontSize: width * 0.06,
                      // textAlign: 'center'
                    }}>{WORKOUT_TYPE.fullBody}</Text>
                    {this.state.percentageFullBodyDone != 0 && (
                      <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        // alignItems: 'center',
                        marginTop: width * 0.04,
                      }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            height: width * 0.02,
                            width: width * 0.6,
                          }}>
                          <View
                            style={{
                              width: `${this.state.percentageFullBodyDone}%`,
                              height: '100%',
                              backgroundColor: 'rgba(243, 143, 23, 1)',
                              borderTopLeftRadius: width * 0.2,
                            }}
                          />
                          <View
                            style={{
                              width: `${100 - this.state.percentageFullBodyDone}%`,
                              height: '100%',
                              backgroundColor: 'rgba(243, 143, 23, 0.4)',
                              borderBottomRightRadius: width * 0.2,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={{
                            color: '#rgba(243, 143, 23, 1)',
                            fontFamily: 'JosefinSans-Regular',
                            fontSize: width * 0.04,
                            fontWeight: '700',
                            // textAlign: 'center'
                          }}>{this.state.fullBodyLevel} - ({parseFloat(this.state.percentageFullBodyDone.toFixed(1))}%)</Text>
                        </View>
                      </View>
                    )}
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
                marginVertical: width * 0.02,
              }} onPress={() => {
                this.props.navigation.navigate('WorkoutIntensity', {
                  title: WORKOUT_TYPE.abs,
                });
              }}>
                <ImageBackground source={require('../../assets/background/abs.png')}
                                 style={{
                                   resizeMode: 'cover',
                                   height: width * 0.3,
                                   width: width * 0.9,
                                 }}
                                 imageStyle={{
                                   borderRadius: 10,
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
                    paddingLeft: width * 0.07,
                    // marginTop: 10,
                    backgroundColor: this.state.percentageAbsDone != 0 ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
                  }}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'JosefinSans-Regular',
                      fontSize: width * 0.06,
                      // textAlign: 'center'
                    }}>{WORKOUT_TYPE.abs}</Text>

                    {this.state.percentageAbsDone != 0 && (
                      <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        // alignItems: 'center',
                        marginTop: width * 0.04,
                      }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            height: width * 0.02,
                            width: width * 0.6,
                          }}>
                          <View
                            style={{
                              width: `${this.state.percentageAbsDone}%`,
                              height: '100%',
                              backgroundColor: 'rgba(243, 143, 23, 1)',
                              borderTopLeftRadius: width * 0.2,
                            }}
                          />
                          <View
                            style={{
                              width: `${100 - this.state.percentageAbsDone}%`,
                              height: '100%',
                              backgroundColor: 'rgba(243, 143, 23, 0.4)',
                              borderBottomRightRadius: width * 0.2,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={{
                            color: '#rgba(243, 143, 23, 1)',
                            fontFamily: 'JosefinSans-Regular',
                            fontSize: width * 0.04,
                            fontWeight: '700',
                            // textAlign: 'center'
                          }}>{this.state.absLevel} - ({parseFloat(this.state.percentageAbsDone.toFixed(1))}%)</Text>
                        </View>
                      </View>
                    )}
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
                marginVertical: width * 0.02,
              }} onPress={() => {
                this.props.navigation.navigate('WorkoutIntensity', {
                  title: WORKOUT_TYPE.butt,
                });
              }}>
                <ImageBackground source={require('../../assets/background/butt.png')}
                                 style={{
                                   resizeMode: 'cover',
                                   height: width * 0.3,
                                   width: width * 0.9,
                                 }}
                                 imageStyle={{
                                   borderRadius: 10,
                                 }}>
                  <View style={{
                    height: '100%',
                    width: '100%',
                    // backgroundColor: 'red',
                    borderColor: 'rgba(255,255,255,0.7)',
                    borderWidth: 1,
                    borderRadius: 10,
                    justifyContent: 'center',
                    paddingLeft: width * 0.07,
                    // alignItems: 'center',
                    // marginVertical: 10,
                    // marginTop: 10,
                    backgroundColor: this.state.percentageButtDone != 0 ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
                  }}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'JosefinSans-Regular',
                      fontSize: width * 0.06,
                      // textAlign: 'center'
                    }}>{WORKOUT_TYPE.butt}</Text>

                    {this.state.percentageButtDone != 0 && (
                      <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        // alignItems: 'center',
                        marginTop: width * 0.04,
                      }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            height: width * 0.02,
                            width: width * 0.6,
                          }}>
                          <View
                            style={{
                              width: `${this.state.percentageButtDone}%`,
                              height: '100%',
                              backgroundColor: 'rgba(243, 143, 23, 1)',
                              borderTopLeftRadius: width * 0.2,
                            }}
                          />
                          <View
                            style={{
                              width: `${100 - this.state.percentageButtDone}%`,
                              height: '100%',
                              backgroundColor: 'rgba(243, 143, 23, 0.4)',
                              borderBottomRightRadius: width * 0.2,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={{
                            color: '#rgba(243, 143, 23, 1)',
                            fontFamily: 'JosefinSans-Regular',
                            fontSize: width * 0.04,
                            fontWeight: '700',
                            // textAlign: 'center'
                          }}>{this.state.buttLevel} - ({parseFloat(this.state.percentageButtDone.toFixed(1))}%)</Text>
                        </View>
                      </View>
                    )}
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
                marginVertical: width * 0.02,
              }} onPress={() => {
                this.props.navigation.navigate('WorkoutIntensity', {
                  title: WORKOUT_TYPE.arms,
                });
              }}>
                <ImageBackground source={require('../../assets/background/arms.png')}
                                 style={{
                                   resizeMode: 'cover',
                                   height: width * 0.3,
                                   width: width * 0.9,
                                 }}
                                 imageStyle={{
                                   borderRadius: 10,
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
                    paddingLeft: width * 0.07,
                    // marginTop: 10,
                    backgroundColor: this.state.percentageArmDone != 0 ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
                  }}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'JosefinSans-Regular',
                      fontSize: width * 0.06,
                      // textA/lign: 'center'
                    }}>{WORKOUT_TYPE.arms}</Text>

                    {this.state.percentageArmDone != 0 && (
                      <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        // alignItems: 'center',
                        marginTop: width * 0.04,
                      }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            height: width * 0.02,
                            width: width * 0.6,
                          }}>
                          <View
                            style={{
                              width: `${this.state.percentageArmDone}%`,
                              height: '100%',
                              backgroundColor: 'rgba(243, 143, 23, 1)',
                              borderTopLeftRadius: width * 0.2,
                            }}
                          />
                          <View
                            style={{
                              width: `${100 - this.state.percentageArmDone}%`,
                              height: '100%',
                              backgroundColor: 'rgba(243, 143, 23, 0.4)',
                              borderBottomRightRadius: width * 0.2,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={{
                            color: '#rgba(243, 143, 23, 1)',
                            fontFamily: 'JosefinSans-Regular',
                            fontSize: width * 0.04,
                            fontWeight: '700',
                            // textAlign: 'center'
                          }}>{this.state.armLevel} - ({parseFloat(this.state.percentageArmDone.toFixed(1))}%)</Text>
                        </View>
                      </View>
                    )}

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
                marginVertical: width * 0.02,
              }} onPress={() => {
                this.props.navigation.navigate('WorkoutIntensity', {
                  title: WORKOUT_TYPE.legs,
                });
              }}>
                <ImageBackground source={require('../../assets/background/legs.png')}
                                 style={{
                                   resizeMode: 'cover',
                                   height: width * 0.3,
                                   width: width * 0.9,
                                 }}
                                 imageStyle={{
                                   borderRadius: 10,
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
                    paddingLeft: width * 0.07,
                    // marginTop: 10,
                    backgroundColor: this.state.percentageLegDone != 0 ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
                  }}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'JosefinSans-Regular',
                      fontSize: width * 0.06,
                      // textAlign: 'center'
                    }}>{WORKOUT_TYPE.legs}</Text>

                    {this.state.percentageLegDone != 0 && (
                      <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        // alignItems: 'center',
                        marginTop: width * 0.04,
                      }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            height: width * 0.02,
                            width: width * 0.6,
                          }}>
                          <View
                            style={{
                              width: `${this.state.percentageLegDone}%`,
                              height: '100%',
                              backgroundColor: 'rgba(243, 143, 23, 1)',
                              borderTopLeftRadius: width * 0.2,
                            }}
                          />
                          <View
                            style={{
                              width: `${100 - this.state.percentageLegDone}%`,
                              height: '100%',
                              backgroundColor: 'rgba(243, 143, 23, 0.4)',
                              borderBottomRightRadius: width * 0.2,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={{
                            color: '#rgba(243, 143, 23, 1)',
                            fontFamily: 'JosefinSans-Regular',
                            fontSize: width * 0.04,
                            fontWeight: '700',
                            // textAlign: 'center'
                          }}>{this.state.legLevel} - ({parseFloat(this.state.percentageLegDone.toFixed(1))}%)</Text>
                        </View>
                      </View>
                    )}
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
    backgroundColor: '#000000',
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
    color: '#F38F17',
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
