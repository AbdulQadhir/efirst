import React, {Component} from 'react';
import {calcHeight, calcWidth} from '../../config';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  TouchableOpacity,
  View,
  Modal,
  PickerIOS,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  IOSPickerText: {
    textAlign: 'left',
    width: '100%',
    fontSize: RFValue(14),
    fontFamily: 'Montserrat-Light',
    color: '#8d847d',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: calcHeight(2),
    backgroundColor: '#f5fcff',
  },

  overlay: {
    flex: 1,
    width: width,
  },
  pickerWrapper: {
    width: width,
  },
  submitText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: RFValue(15),
  },

  pickerButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingLeft: 5,
  },
});

class ApplePicker extends Component {
  state = {
    modalVisible: false,
    selectedValue: '',
    selectedIndex: 0,
  };

  componentDidMount = () =>
    this.setState({selectedValue: this.props.selectedValue});

  onPressCancel = () => this.hide();

  onPressSubmit = () => {
    console.log(this.state.selectedIndex);

    this.props.onSubmit(this.state.selectedValue, this.state.selectedIndex);
    this.hide();
  };

  onOverlayDismiss = () => this.hide();

  onValueChange = (value, index) => {
    this.setState({
      selectedValue: value,
      selectedIndex: index,
    });
  };

  show = () =>
    this.setState({
      modalVisible: true,
    });

  hide = () =>
    this.setState({
      modalVisible: false,
    });

  render() {
    const {modalVisible, selectedValue} = this.state;
    const {children} = this.props;

    return (
      <Modal
        animationType={'slide'}
        transparent
        visible={modalVisible}
        onRequestClose={() => null}>
        <View style={styles.wrapper}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={this.onPressSubmit}
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.submitText}>Done</Text>
            </TouchableOpacity>
            <View>
              <PickerIOS
                ref={'picker'}
                style={{width}}
                itemStyle={{
                  fontSize: RFValue(15),
                  paddingHorizontal: calcWidth(1.5),
                  paddingVertical: calcHeight(0.8),

                  fontFamily: 'Montserrat-Light',
                }}
                selectedValue={selectedValue}
                onValueChange={this.onValueChange}>
                {children}
              </PickerIOS>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default class IOSPicker extends Component {
  render = () => {
    const {children} = this.props;
    return (
      <View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
          onPress={() => this.refs.picker.show()}>
          <View style={styles.pickerButtonContainer}>
            <View
              style={{
                flexDirection: 'row',
                position: 'relative',
                width: '100%',
              }}>
              <Text style={styles.IOSPickerText}>
                {this.props.selectedLabel}
              </Text>
              <Icon
                name="chevron-down"
                style={{position: 'absolute', right: 5, bottom: -5}}
                size={Platform.isPad ? 24 : 18}
              />
            </View>
          </View>
        </TouchableOpacity>
        <ApplePicker
          ref="picker"
          children={children}
          onSubmit={(value, index) => this.props.onSubmit(value, index)}
        />
      </View>
    );
  };
}
