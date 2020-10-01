import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Button from '../components/Button';
import LinearGradieant from 'react-native-linear-gradient';
// import {NavigationC} from '@react-navigation/native';

import {
  CHALLENGE_LEVEL,
  GetFitnessByTypeAndChallenge,
} from '../system/FitnessSystem';

const {width, height} = Dimensions.get('window');
// const { title } = route.params;
export default class ExerciseScreen extends Component {
  state = {
    data: [],
    doneCount: 0,
    percentageDone: 0,
    colNum: 6,
  };

  componentDidMount = async () => {
    await this.updateData();
    this.unsubscribe = this.props.navigation.addListener('focus', async (e) => {
      this.setState({data: []});
      await this.updateData();
      // console.warn(this.state.data);
    });
    // this.unsubscribe = this.props.navigation.addListener('focus', async (e) => {
    // });
  };

  componentWillUnmount(): void {
    this.unsubscribe();
  }

  updateData = async () => {
    const data = await GetFitnessByTypeAndChallenge(
      this.props.route.params.title,
      this.props.route.params.level,
    );
    this.setState({data}, this.calculatePercentage);
  };

  calculatePercentage = () => {
    let doneCount = 0;
    const {data} = this.state;
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
    this.setState({percentageDone: (doneCount * 100) / 30}, () => {
      console.warn(this.state.percentageDone);
      this.state.percentageDone != 0 ? this.setState({colNum: 6}) : this.setState({colNum: 5});
    });
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
          source={require('../../assets/background/background.png')}
          style={styles.splashImage}
        />
        {/*<NavigationEvents onDidFocus={() => console.log('I am triggered')} />*/}

        <LinearGradieant
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']}
          style={styles.mainView}>
          <View style={styles.logo}>
            <Text style={styles.logoStyle}>
              {this.props.route.params.title}
            </Text>
            <Text style={styles.typeStyle}>
              ({this.props.route.params.level})
            </Text>
            {/*<ScrollView>*/}
            { this.state.percentageDone != 0 ?
            <FlatList
              key={'_'}
              keyExtractor={item => "_" + item.id}
              extraData={(item, index) => `${index}`}
              data={this.state.data}
              style={{width: width, marginTop: 10}}
              contentContainerStyle={{alignItems: 'center'}}
              numColumns={6}
              renderItem={({item, index}) => {
                const isDisabled =
                  index !== 0 && !this.state.data[index - 1].done;
                const shouldShowImage = this.state.data[index].done;
                return (
                  <Button
                    buttonText={index + 1}
                    shouldShowImage={shouldShowImage}
                    style={{
                      height: width * 0.10 ,
                      width: width * 0.10 ,
                      opacity: isDisabled ? 0.3 : 1,
                      backgroundColor: 'rgba(243, 143, 23, 1)',
                      // borderColor:
                      //   (this.props.route.params.level ===
                      //     CHALLENGE_LEVEL.beginner1 &&
                      //     'rgba(41, 241, 195, 0.7)') ||
                      //   (this.props.route.params.level ===
                      //     CHALLENGE_LEVEL.beginner2 &&
                      //     'rgba(41, 241, 195, 0.7)') ||
                      //   (this.props.route.params.level ===
                      //     CHALLENGE_LEVEL.intermediate1 &&
                      //     'rgba(236,255,85,0.7)') ||
                      //   (this.props.route.params.level ===
                      //     CHALLENGE_LEVEL.intermediate2 &&
                      //     'rgba(236,255,85,0.7)') ||
                      //   (this.props.route.params.level ===
                      //     CHALLENGE_LEVEL.professional1 &&
                      //     'rgba(255,75,114,0.7)') ||
                      //   (this.props.route.params.level ===
                      //     CHALLENGE_LEVEL.professional2 &&
                      //     'rgba(255,75,114,0.7)'),
                      borderWidth: 1,
                      borderRadius: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginVertical: width*0.045 ,
                      // marginTop: 10,
                      margin:  width*0.031 ,
                    }}
                    disabled={isDisabled}
                    onPress={() => {

                      // console.log(this.props.route.params.title, this.props.route.params.level, item.exercises[0])
                      if (!isDisabled) {
                        this.props.navigation.navigate('StartWorkout', {
                          title: this.props.route.params.title,
                          level: this.props.route.params.level,
                          day: index,
                          index: index,
                          itemName: item.exercises,
                          beforeGoBack: this.updateData,
                          burning: item.burning,
                          time: item.time,
                        });
                      }
                    }}
                  />
                );
              }}
            />
            :
              <FlatList
                key={'#'}
                keyExtractor={item => "#" + item.id}
                extraData={(item, index) => `${index}`}
                data={this.state.data}
                style={{width: width, marginTop: 10}}
                contentContainerStyle={{alignItems: 'center'}}
                numColumns={5}
                renderItem={({item, index}) => {
                  const isDisabled =
                    index !== 0 && !this.state.data[index - 1].done;
                  const shouldShowImage = this.state.data[index].done;
                  return (
                    <Button
                      buttonText={index + 1}
                      shouldShowImage={shouldShowImage}
                      style={{
                        height:  width * 0.12,
                        width:   width * 0.12,
                        opacity: isDisabled ? 0.3 : 1,
                        backgroundColor: 'rgba(243, 143, 23, 1)',
                        // borderColor:
                        //   (this.props.route.params.level ===
                        //     CHALLENGE_LEVEL.beginner1 &&
                        //     'rgba(41, 241, 195, 0.7)') ||
                        //   (this.props.route.params.level ===
                        //     CHALLENGE_LEVEL.beginner2 &&
                        //     'rgba(41, 241, 195, 0.7)') ||
                        //   (this.props.route.params.level ===
                        //     CHALLENGE_LEVEL.intermediate1 &&
                        //     'rgba(236,255,85,0.7)') ||
                        //   (this.props.route.params.level ===
                        //     CHALLENGE_LEVEL.intermediate2 &&
                        //     'rgba(236,255,85,0.7)') ||
                        //   (this.props.route.params.level ===
                        //     CHALLENGE_LEVEL.professional1 &&
                        //     'rgba(255,75,114,0.7)') ||
                        //   (this.props.route.params.level ===
                        //     CHALLENGE_LEVEL.professional2 &&
                        //     'rgba(255,75,114,0.7)'),
                        borderWidth: 1,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: width*0.042,
                        // marginTop: 10,
                        margin: width*0.037,
                      }}
                      disabled={isDisabled}
                      onPress={() => {

                        // console.log(this.props.route.params.title, this.props.route.params.level, item.exercises[0])
                        if (!isDisabled) {
                          this.props.navigation.navigate('StartWorkout', {
                            title: this.props.route.params.title,
                            level: this.props.route.params.level,
                            day: index,
                            index: index,
                            itemName: item.exercises,
                            beforeGoBack: this.updateData,
                            burning: item.burning,
                            time: item.time,
                          });
                        }
                      }}
                    />
                  );
                }}
              />
            }
            {/*//TODO: Show percentage of exercise done*/}

            {this.state.percentageDone != 0 && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  paddingHorizontal: width * 0.08,
                  borderWidth: 1,
                  borderColor: 'rgba( 255, 255, 255, 0.7)',
                  paddingVertical: width * 0.04,
                  marginBottom: width * 0.04,
                  borderRadius: width * 0.03,
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
                      width: `${this.state.percentageDone}%`,
                      height: '100%',
                      backgroundColor: 'rgba(243, 143, 23, 1)',
                      borderTopLeftRadius: width * 0.2,
                    }}
                  />
                  <View
                    style={{
                      width: `${100 - this.state.percentageDone}%`,
                      height: '100%',
                      backgroundColor: 'rgba(243, 143, 23, 0.3)',
                      borderBottomRightRadius: width * 0.2,
                    }}
                  />
                </View>

                <Text
                  style={{
                    fontSize: 18,
                    // marginBottom: width * 0.07,
                    fontWeight: '600',
                    color: 'rgba(243, 143, 23, 1)',
                    // position: 'absolute',
                    // zIndex: 1003,
                    fontFamily: 'JosefinSans-Bold',
                    marginTop: width * 0.04,
                  }}>
                  Completed {parseFloat(this.state.percentageDone.toFixed(1))}%
                </Text>
              </View>
            )}
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
    fontSize: 25,
    // marginBottom: ,
    fontWeight: '600',
    color: 'rgba(243, 143, 23, 1)',
    // position: 'absolute',
    // zIndex: 1003,
    fontFamily: 'JosefinSans-Bold',
    marginTop: width * 0.1,
  },
  typeStyle: {
    fontSize: 18,
    // marginBottom: ,
    fontWeight: '600',
    color: '#B5B5B5',
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
