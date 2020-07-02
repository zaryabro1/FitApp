import React, { Component } from 'react';
import {  Text, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default class Textfield extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 5}}>
          <Image source={this.props.source} style={styles.imageHolder}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>

          <TextInput placeholder={this.props.placeholder}
                     maxLength={this.props.maxLength}
                     style={{color: '#FFFFFF'}}
                     placeholderTextColor={'#FFFFFF'}
                     autoCorrect={false}
                     clearButtonMode={'always'}
                     secureTextEntry={this.props.secureTextEntry} />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    height: width*0.15,
    width: width*0.8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    // opacity: 0.3,
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 10
  },
  imageHolder: {
    width: width*0.04,
    height: width*0.04,
    resizeMode: 'contain',
    paddingTop: 10,
    paddingHorizontal: 20
  }
}
