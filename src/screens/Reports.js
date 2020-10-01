import React, {Component} from 'react';
import {View, StatusBar, Image, Text, Dimensions, TouchableOpacity, ScrollView, Picker} from 'react-native';
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import LinearGradieant from 'react-native-linear-gradient';
// import { LineChart, XAxis } from 'react-native-line-chart'
import {LineChart, XAxis, Grid} from 'react-native-svg-charts';
import {LocaleConfig, Calendar} from 'react-native-calendars';


const {width, height} = Dimensions.get('window');

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed', 'Thr', 'Fri', 'Sat.'],
  today: 'Aujourd\'hui',
};
LocaleConfig.defaultLocale = 'fr';

export default class Reports extends Component {

  calculateBMI = () => {
    if (this.state.height == 4 && this.state.heightInches == 10) {
      if (this.state.weight >= 41 && this.state.weight <= 53) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 53 && this.state.weight <= 64) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 64 && this.state.weight <= 84) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 4 && this.state.heightInches == 11) {
      if (this.state.weight >= 42 && this.state.weight <= 55) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 56 && this.state.weight <= 66) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 67 && this.state.weight <= 87) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 0) {
      if (this.state.weight >= 43 && this.state.weight <= 5) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 58 && this.state.weight <= 68) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 69 && this.state.weight <= 90) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 1) {
      if (this.state.weight >= 45 && this.state.weight <= 59) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 59 && this.state.weight <= 71) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 71 && this.state.weight <= 93) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 2) {
      if (this.state.weight >= 47 && this.state.weight <= 61) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 61 && this.state.weight <= 73) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 74 && this.state.weight <= 96) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 3) {
      if (this.state.weight >= 48 && this.state.weight <= 63) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 63 && this.state.weight <= 76) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 76 && this.state.weight <= 99) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 4) {
      if (this.state.weight >= 49 && this.state.weight <= 65) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 65 && this.state.weight <= 78) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 78 && this.state.weight <= 102) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 5) {
      if (this.state.weight >= 51 && this.state.weight <= 67) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 68 && this.state.weight <= 81) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 81 && this.state.weight <= 106) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 6) {
      if (this.state.weight >= 53 && this.state.weight <= 69) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 70 && this.state.weight <= 83) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 84 && this.state.weight <= 109) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 7) {
      if (this.state.weight >= 54 && this.state.weight <= 71) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 72 && this.state.weight <= 86) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 86 && this.state.weight <= 112) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 8) {
      if (this.state.weight >= 56 && this.state.weight <= 73) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 74 && this.state.weight <= 88) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 89 && this.state.weight <= 116) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 9) {
      if (this.state.weight >= 58 && this.state.weight <= 76) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 76 && this.state.weight <= 91) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 92 && this.state.weight <= 119) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 10) {
      if (this.state.weight >= 59 && this.state.weight <= 78) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 78 && this.state.weight <= 94) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 94 && this.state.weight <= 122) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 11) {
      if (this.state.weight >= 61 && this.state.weight <= 80) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 81 && this.state.weight <= 97) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 97 && this.state.weight <= 126) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 5 && this.state.heightInches == 12) {
      if (this.state.weight >= 63 && this.state.weight <= 83) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 83 && this.state.weight <= 99) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 100 && this.state.weight <= 130) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 6 && this.state.heightInches == 0) {
      if (this.state.weight >= 65 && this.state.weight <= 85) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 85 && this.state.weight <= 102) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 102 && this.state.weight <= 133) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 6 && this.state.heightInches == 1) {
      if (this.state.weight >= 67 && this.state.weight <= 87) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 87 && this.state.weight <= 105) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 105 && this.state.weight <= 137) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 6 && this.state.heightInches == 2) {
      if (this.state.weight >= 68 && this.state.weight <= 90) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 90 && this.state.weight <= 108) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 108 && this.state.weight <= 141) {
        this.setState({bmi: 'Obese'});
      }
    } else if (this.state.height == 6 && this.state.heightInches == 3) {
      if (this.state.weight >= 70 && this.state.weight <= 92) {
        this.setState({bmi: 'Normal'});
      } else if (this.state.weight >= 92 && this.state.weight <= 111) {
        this.setState({bmi: 'Overweight'});
      } else if (this.state.weight >= 111 && this.state.weight <= 145) {
        this.setState({bmi: 'Obese'});
      }
    }
  };

  state = {
    weight: 0,
    pickerShow: true,
    height: 0,
    heightInches: 0,
    bmi: '',
  };

  render() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24];
    const weightData = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130];
    ;
    const heightData = [4, 5, 6, 7, 8];
    const heightDataInches = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} translucent={true} backgroundColor={'transparent'}/>
        <Image
          source={require('../../assets/background/background.png')}
          style={styles.splashImage}/>
        <LinearGradieant colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']} style={styles.mainView}>
          <View style={styles.logo}>
            <Text style={styles.logoStyle}>Reports</Text>
            {/*<LineChart*/}
            {/*  data={{*/}
            {/*    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],*/}
            {/*    datasets: [{*/}
            {/*      data: [*/}
            {/*        Math.random() * 100,*/}
            {/*        Math.random() * 100,*/}
            {/*        Math.random() * 100,*/}
            {/*        Math.random() * 100,*/}
            {/*        Math.random() * 100,*/}
            {/*        Math.random() * 100,*/}
            {/*        Math.random() * 100,*/}
            {/*        Math.random() * 100,*/}
            {/*        Math.random() * 100,*/}
            {/*        Math.random() * 100,*/}
            {/*        Math.random() * 100,*/}
            {/*        Math.random() * 100,*/}
            {/*      ]*/}
            {/*    }]*/}
            {/*  }}*/}
            {/*  width={Dimensions.get('window').width*0.95} // from react-native*/}
            {/*  height={220}*/}
            {/*  chartConfig={{*/}
            {/*    backgroundColor: '#grey',*/}
            {/*    backgroundGradientFrom: 'grey',*/}
            {/*    backgroundGradientTo: 'grey',*/}
            {/*    decimalPlaces: 2, // optional, defaults to 2dp*/}
            {/*    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,*/}
            {/*    style: {*/}
            {/*      borderRadius: 16*/}
            {/*    }*/}
            {/*  }}*/}
            {/*  bezier*/}
            {/*  style={{*/}
            {/*    marginVertical: 8,*/}
            {/*    borderRadius: 16,*/}
            {/*  }}*/}
            {/*  renderHorizontalLines = {{*/}
            {/*    // width of your chart*/}
            {/*    width: 200,*/}
            {/*    // height of your chart*/}
            {/*    height: 30,*/}
            {/*    // how many lines to render*/}
            {/*    count: 30,*/}
            {/*    // top padding from the chart top edge*/}
            {/*    paddingTop: 40*/}
            {/*  }}*/}
            {/*/>*/}
            {/*<XAxis*/}
            {/*  style={{ marginHorizontal: -10 }}*/}
            {/*  data={data}*/}
            {/*  formatLabel={(value, index) => index}*/}
            {/*  contentInset={{ left: 10, right: 10 }}*/}
            {/*  svg={{ fontSize: 10, fill: 'black' }}*/}
            {/*/>*/}
            <ScrollView
              style={{
                backgroundColor: 'transparent',
              }}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              scrollEnabled={this.state.pickerShow == true ? false : true}
            >
              <View style={{
                flexDirection: 'row',
                width: width,
                paddingHorizontal: width * 0.03,
                justifyContent: 'space-between',
                alignItems: 'center',

              }}>
                <Text style={{
                  fontSize: width * 0.05,
                  fontWeight: '600',
                  color: 'rgba(243, 143, 23, 1)',
                  fontFamily: 'JosefinSans-Bold',
                }}>Calendar</Text>
                <TouchableOpacity>
                  <Text style={{
                    fontSize: width * 0.05,
                    fontWeight: '600',
                    color: 'rgba(243, 143, 23, 1)',
                    fontFamily: 'JosefinSans-Bold',
                  }}>Add+</Text>
                </TouchableOpacity>
              </View>
              <Calendar

                // Specify style for calendar container element. Default = {}
                style={{
                  borderWidth: 1,
                  // borderColor: 'red',
                  // height: 350,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: width * 0.05,
                  marginTop: width * 0.05,
                  marginBottom: width * 0.1,
                }}
                // Specify theme properties to override specific styles for calendar parts. Default = {}
                theme={{
                  // 'stylesheet.calendar.header': {
                  //   week: {
                  //     marginTop: 40,
                  //     flexDirection: 'row',
                  //     justifyContent: 'space-between',
                  //     opacity: 0.5
                  //   }
                  // },
                  backgroundColor: '#00000',
                  textColor: 'green',
                  calendarBackground: 'transparent',
                  textSectionTitleColor: '#b6c1cd',
                  textSectionTitleDisabledColor: '#d9e1e8',
                  selectedDayBackgroundColor: '#00adf5',
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: '#00adf5',
                  dayTextColor: '#2d4150',
                  textDisabledColor: '#d9e1e8',
                  dotColor: '#00adf5',
                  selectedDotColor: '#ffffff',
                  arrowColor: 'orange',
                  disabledArrowColor: 'green',
                  monthTextColor: '#ffffff',
                  indicatorColor: 'blue',
                  textDayFontFamily: 'JosefinSans',
                  textMonthFontFamily: 'JosefinSans',
                  textDayHeaderFontFamily: 'JosefinSans',
                  textDayFontWeight: '300',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '300',
                  textDayFontSize: 16,
                  textMonthFontSize: 16,
                  textDayHeaderFontSize: 16,

                }}
                backgroundColor={'red'}
                // Initially visible month. Default = Date()
                current={Date.now()}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2012-05-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2012-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {
                  console.log('selected day', day);
                }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {
                  console.log('selected day', day);
                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => {
                  console.log('month changed', month);
                }}
                // Hide month navigation arrows. Default = false
                hideArrows={true}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                renderArrow={(direction) => (<Arrow/>)}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={false}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={false}
                // Show week numbers to the left. Default = false
                showWeekNumbers={true}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={subtractMonth => subtractMonth()}
                // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                // Disable left arrow. Default = false
                disableArrowLeft={true}
                // Disable right arrow. Default = false
                disableArrowRight={true}
                // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                disableAllTouchEventsForDisabledDays={true}
                // Replace default month and year title with custom one. the function receive a date as parameter.
                renderHeader={(date) => {/*Return JSX*/
                  console.warn(`hello this is the current month ${date.toISOString().slice(0, 4)}`);
                  console.warn(date.getMonth());
                  // console.warn(date.getYear());
                  let month = date.getMonth();
                  let monthChar = '';
                  if (month == 1) {
                    monthChar = 'Jan';
                  } else if (month == 2) {
                    monthChar = 'Feb';
                  } else if (month == 3) {
                    monthChar = 'Mar';
                  } else if (month == 4) {
                    monthChar = 'April';
                  } else if (month == 5) {
                    monthChar = 'May';
                  } else if (month == 6) {
                    monthChar = 'June';
                  } else if (month == 7) {
                    monthChar = 'July';
                  } else if (month == 8) {
                    monthChar = 'Aug';
                  } else if (month == 9) {
                    monthChar = 'Sep';
                  } else if (month == 10) {
                    monthChar = 'Oct';
                  } else if (month == 11) {
                    monthChar = 'Nov';
                  } else if (month == 0) {
                    monthChar = 'Dec';
                  }
                  return (
                    <View>
                      <Text style={{
                        color: 'rgba(243, 143, 23, 1)',
                        fontFamily: 'JosefinSans-Bold',
                      }}>{monthChar} {date.toISOString().slice(0, 4)}</Text>
                    </View>
                  );
                }}
                // Enable the option to swipe between months. Default = false
                enableSwipeMonths={true}
              />
              <View style={{
                flexDirection: 'row',
                width: width,
                paddingHorizontal: width * 0.03,
                justifyContent: 'space-between',
              }}>
                <Text style={{
                  fontSize: width * 0.05,
                  fontWeight: '600',
                  color: 'rgba(243, 143, 23, 1)',
                  fontFamily: 'JosefinSans-Bold',
                }}>Chart</Text>
                <TouchableOpacity>
                  <Text style={{
                    fontSize: width * 0.05,
                    fontWeight: '600',
                    color: 'rgba(243, 143, 23, 1)',
                    fontFamily: 'JosefinSans-Bold',
                  }}>Add+</Text>
                </TouchableOpacity>
              </View>
              <View style={{
                height: 200,
                width: width,
                padding: 20,
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                borderRadius: width * 0.05,
                marginTop: width * 0.05,
              }}>

                <LineChart
                  style={{flex: 1}}
                  data={data}
                  gridMin={0}
                  contentInset={{top: 10, bottom: 10}}
                  svg={{stroke: 'rgba(255,51,51,1)'}}
                >
                  <Grid/>
                </LineChart>
                <XAxis
                  style={{marginHorizontal: -10, backgroundColor: 'transparent'}}
                  data={data}
                  formatLabel={(value, index) => index}
                  contentInset={{left: 10, right: 10}}
                  svg={{fontSize: 10, fill: 'black'}}
                />
              </View>
              <View style={{
                flexDirection: 'row',
                width: width,
                paddingHorizontal: width * 0.03,
                justifyContent: 'space-between',
                marginTop: width * 0.1,
              }}>
                <Text style={{
                  fontSize: width * 0.05,
                  fontWeight: '600',
                  color: 'rgba(243, 143, 23, 1)',
                  fontFamily: 'JosefinSans-Bold',
                }}>BMI</Text>
                <TouchableOpacity onPress={() => {
                  this.setState({pickerShow: true});
                }}>
                  <Text style={{
                    fontSize: width * 0.05,
                    fontWeight: '600',
                    color: 'rgba(243, 143, 23, 1)',
                    fontFamily: 'JosefinSans-Bold',
                  }}>Edit</Text>
                </TouchableOpacity>
              </View>
              {(this.state.bmi != '') && (
                <View style={{
                  backgroundColor: 'green',
                  width: width,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{
                    color: '#FFFFFF',
                  }}>{this.state.bmi}</Text>
                </View>
              )}
              <View style={{
                height: width * 0.1,
                flexDirection: 'row',
                width: width * 0.9,
                // padding: 20,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderRadius: width * 0.05,
                marginVertical: width * 0.05,
              }}>
                <View style={{
                  width: '33%',
                  backgroundColor: this.state.bmi == 'Normal' ? 'rgba(4, 179, 117, 1)' : 'rgba(4, 179, 117, 0.3)',
                  height: '100%',
                  borderBottomLeftRadius: width * 0.05,
                  borderTopLeftRadius: width * 0.05,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{color: '#FFFFFF'}}>Normal</Text>
                </View>
                <View style={{
                  width: '33%',
                  backgroundColor: this.state.bmi == 'Overweight' ? 'rgba(81, 173, 212, 1)' : 'rgba(81, 173, 212, 0.3)',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{color: '#FFFFFF'}}>Overweight</Text>
                </View>
                <View style={{
                  width: '33%',
                  backgroundColor: this.state.bmi == 'Obese' ? 'rgba(227, 29, 40, 1)' : 'rgba(227, 29, 40, 0.3)',
                  height: '100%',
                  borderBottomRightRadius: width * 0.05,
                  borderTopRightRadius: width * 0.05,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{color: '#FFFFFF'}}>Obese</Text>
                </View>
              </View>
              {(this.state.pickerShow) && (
                <View style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  flex: 1,
                  width: width,
                  height: height,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  zIndex: 1010,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0
                }}
                >
                  <View style={{
                    backgroundColor: '#444444',
                    width: width * 0.6,
                    height: width * 0.8,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingTop: width * 0.04,
                    borderRadius: width * 0.03,
                  }}>
                    <Text style={{
                      fontSize: width * 0.05,
                      fontWeight: '600',
                      color: 'rgba(243, 143, 23, 1)',
                      fontFamily: 'JosefinSans-Bold',
                    }}>Select Weight</Text>
                    <Picker
                      selectedValue={this.state.weight}
                      style={{width: width * 0.4, backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
                      onValueChange={(weight) => this.setState({weight: weight})}>
                      {weightData.map((index) => {
                        return (<Picker.Item label={`${index}`} value={index}/>);
                      })}
                    </Picker>

                    <Text style={{
                      fontSize: width * 0.05,
                      fontWeight: '600',
                      color: 'rgba(243, 143, 23, 1)',
                      fontFamily: 'JosefinSans-Bold',
                    }}>Select Height</Text>
                    <Picker
                      selectedValue={this.state.height}
                      style={{width: width * 0.4, backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
                      onValueChange={(height) => this.setState({height: height})}>
                      {heightData.map((index) => {
                        return (<Picker.Item label={`${index}'`} value={index}/>);
                      })}
                    </Picker>
                    <Picker
                      selectedValue={this.state.heightInches}
                      style={{width: width * 0.4, backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
                      onValueChange={(heightInInches) => {
                        this.setState({heightInches: heightInInches});
                      }}>
                      {heightDataInches.map((index) => {
                        return (<Picker.Item label={`${index}"`} value={index}/>);
                      })}
                    </Picker>
                    <Button
                      buttonText={'Done'}
                      style={{
                        height: width * 0.11,
                        width: width * 0.4,
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        borderColor: '#F38F17',
                        borderWidth: width * 0.01,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: width * 0.04,
                      }}
                      onPress={() => {
                        this.calculateBMI();
                        this.setState({pickerShow: false});
                        // console.log(this.state.goal);

                      }}
                    />

                  </View>
                </View>
              )}

            </ScrollView>
          </View>
        </LinearGradieant>
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
    fontWeight: '600',
    color: 'rgba(243, 143, 23, 1)',
    fontFamily: 'JosefinSans-Bold',
    marginTop: width * 0.07,
    marginBottom: width * 0.05,
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
