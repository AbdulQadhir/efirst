import React, {Component} from 'react';
import {View, TextInput, Button, Text, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {calcHeight, calcWidth} from '../../config';
const {height, width} = Dimensions.get('window');
const entireScreenWidth = width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export default class Radio extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            height: calcHeight(2.6),
            width: calcHeight(2.6),
            borderRadius: calcHeight(1.5),
            borderWidth: 1.3,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#081344 ',
          }}>
          {this.props.isSelected ? (
            <View
              style={{
                height: calcHeight(1.5),
                width: calcHeight(1.5),
                borderRadius: calcHeight(0.9),
                // borderWidth: 1.3,
                backgroundColor: '#f84563',
                // borderColor: '#081344 ',
              }}
            />
          ) : null}
        </View>
        <Text style={this.props.style}>{this.props.label}</Text>
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
});
