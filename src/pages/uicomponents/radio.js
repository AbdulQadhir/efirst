import React, {Component} from 'react';
import {View, TextInput, Button, Text, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {calcHeight, calcWidth} from '../../config';
const {height, width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';
const entireScreenWidth = width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default class Radio extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          {this.props.isSelected ? (
            <MaterialIcons
              name="radio-button-checked"
              style={eStyles.radioStyle}
            />
          ) : (
            <MaterialIcons
              name="radio-button-unchecked"
              style={eStyles.radioStyle}
            />
          )}
          <Text style={this.props.style}>{this.props.label}</Text>
        </View>
      </View>
    );
  }
}

const eStyles = EStyleSheet.create({
  align: {
    padding: '10 rem',
  },
  alignHorizontal: {
    paddingHorizontal: '20 rem',
  },
  radioStyle: {
    fontSize: RFValue(25),
    color: '#f84563',
  },
});
