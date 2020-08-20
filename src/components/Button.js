import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
        {(!this.props.shouldShowImage && (
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'JosefinSans-Regular',
              fontSize: width * 0.04,
              textAlign: 'center',
            }}>
            {this.props.buttonText}
          </Text>
        )) || (
          <Image
            source={require('../../assets/done.png')}
            style={{
              height: width * 0.06,
              width: width * 0.06,
              tintColor: 'white',
            }}
          />
        )}
      </TouchableOpacity>
    );
  }
}
