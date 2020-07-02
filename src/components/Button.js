import React, { Component } from 'react';
import {  Text, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default class Button extends Component {
  render() {
    return(
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
        <Text style={{color: "#FFFFFF", fontFamily: 'JosefinSans-Regular', fontSize: 20}}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    )
  }
}

