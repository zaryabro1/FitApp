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
  };

  componentDidMount = async () => {
    await this.updateData();
    this.unsubscribe = this.props.navigation.addListener('focus', async e => {
      this.setState({data: []});
      await this.updateData()
    });
  };

  componentWillUnmount(): void {
    this.unsubscribe();
  }

  updateData =  async () => {
    const data = await GetFitnessByTypeAndChallenge(
      this.props.route.params.title,
      this.props.route.params.level,
    );
    this.setState({data});
    console.log(data);
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
          source={require('../../assets/imageFourteen.jpg')}
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
            <FlatList
              extraData={(item, index) => `${index}`}
              data={this.state.data}
              style={{width: width, marginTop: 20}}
              contentContainerStyle={{alignItems: 'center'}}
              numColumns={5}
              renderItem={({item, index}) => {
                const isDisabled = index !== 0 && !this.state.data[index - 1].done;
                console.log(item)
                return (
                  <Button
                    buttonText={index + 1}
                    style={{
                      height: width * 0.14,
                      width: width * 0.14,
                      opacity: isDisabled ? 0.3 : 1,
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
                      borderRadius: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginVertical: 20,
                      // marginTop: 10,
                      margin: 10,
                    }}
                    disabled={isDisabled}
                    onPress={() => {
                      if(!isDisabled){
                        this.props.navigation.navigate('StartWorkout', {
                          title: this.props.route.params.title,
                          level: this.props.route.params.level,
                          day: index,
                          index: index,
                          itemName: item.exercises,
                          beforeGoBack: this.updateData
                        });
                      }
                    }}
                  />
                );
              }}
            />
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
