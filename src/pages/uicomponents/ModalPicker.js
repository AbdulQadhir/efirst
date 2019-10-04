import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {InputNoBorder, ModalPickerItem} from './components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {calcWidth, calcHeight} from '../../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {ScrollView} from 'react-native-gesture-handler';

export default class ModalPicker extends Component {
  state = {
    state: '',
    selectedValue: null,
    selectedText: null,
    modalVisible: false,
  };

  onModalPickerClose = () => {
    this.setState({modalVisible: false});
  };

  componentDidMount = () => {};

  onSelect(text, value) {
    this.setState({
      selectedValue: value,
      selectedText: text,
      modalVisible: false,
    });
    this.props.onChange(value);
  }

  render() {
    // const renderList = this.props.data.map(datum => {
    //   return (
    //     <ModalPickerItem
    //       onPress={() => this.onSelect(datum)}
    //       label={datum.label}
    //     />
    //   );
    // });
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => this.setState({modalVisible: true})}>
          <View
            style={{
              marginHorizontal: calcWidth(2.1),
              marginVertical: calcHeight(0.8),
              alignItems: 'center',
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: '#999999',
            }}>
            <Text
              style={{
                fontSize: RFPercentage(2),
                paddingVertical: calcHeight(1),
                color: '#8d847d',
                marginLeft: calcHeight(0.8),
                fontFamily: 'Montserrat-Light',
                flex: 1,
              }}>
              {this.state.selectedText
                ? this.state.selectedText
                : this.props.placeholder}
            </Text>
            <Ionicons
              name="ios-arrow-down"
              size={RFValue(15)}
              style={{paddingHorizontal: 5}}
              color="#8d847d"
            />
          </View>
        </TouchableWithoutFeedback>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this.onModalPickerClose}>
          <ScrollView>
            <View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                  marginHorizontal: calcWidth(5),
                  height: calcHeight(8),
                  marginTop: calcHeight(2),
                }}>
                <TouchableOpacity onPress={this.onModalPickerClose}>
                  <Ionicons
                    name="ios-close"
                    color="#8d847d"
                    size={RFValue(35)}
                  />
                </TouchableOpacity>
              </View>
              <View style={{paddingLeft: 5}}>{this.props.children}</View>
            </View>
          </ScrollView>
        </Modal>
      </View>
    );
  }
}
