import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';

import {
  Input2,
  ErrorLabel,
  RadioButton,
  TxtSubHead,
  PriceDetailItem,
  TxtTotalAmount,
  TxtAgreement,
  ButtonNormal,
  SelectFile,
  ModalPickerItem,
} from './uicomponents/components';

import EStyleSheet from 'react-native-extended-stylesheet';

import ModalPicker from './uicomponents/ModalPicker';
import {calcHeight, calcWidth} from '../config';
import PhoneInput from '../styled/react-native-phone-input/lib';
import CountryPicker from '../styled/react-native-country-picker-modal/src/CountryPicker';
import closeImgLight from '../Assets/close-btn.png';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const DARK_COLOR = '#18171C';
const LIGHT_COLOR = '#FFF';

const darkTheme = StyleSheet.create({
  modalContainer: {
    backgroundColor: DARK_COLOR,
  },
  contentContainer: {
    backgroundColor: DARK_COLOR,
  },
  header: {
    backgroundColor: DARK_COLOR,
  },
  itemCountryName: {
    borderBottomWidth: 0,
  },
  countryName: {
    color: LIGHT_COLOR,
  },
  letterText: {
    color: LIGHT_COLOR,
  },
  input: {
    color: LIGHT_COLOR,
    borderBottomWidth: 1,
    borderColor: LIGHT_COLOR,
  },
});

class App extends React.Component {
  static navigationOptions = {
    title: 'Attestation Service',
  };

  state = {
    state: '',
    selectedItem: {},
    ModalVisible: false,
    data: [
      {label: 'label1', value: 'value1'},
      {label: 'label2', value: 'value2'},
      {label: 'label3', value: 'value3'},
      {label: 'label4', value: 'value4'},
    ],
  };

  selected(selected) {
    this.setState({
      selectedItem: {},
    });
  }

  onModalPickerClose = () => {
    this.setState({ModalVisible: false});
  };
  onPressFlag = () => {
    this.countryPicker.openModal();
  };

  onSelect = (text, value) => {
    this.statePicker.onSelect(text, value);
  };
  render() {
    return (
      <View style={styles.body}>
        <View>
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always">
            <Input2 placeholder="Name*" />
            {/* <ErrorLabel label="Required" /> */}

            <Input2 placeholder="Email*" />
            {/* <ErrorLabel label="Required" /> */}

            {/* <Input2 placeholder="Mobile*" /> */}
            <CountryPicker
              ref={ref => {
                this.countryPicker = ref;
              }}
              onChange={value => this.selectCountry(value)}
              translation="eng"
              // cca2={values.cca2}
              styles={darkTheme}
              hideAlphabetFilter={true}
              closeButtonImage={closeImgLight}
              closeable={true}>
              <View />
            </CountryPicker>
            <PhoneInput
              ref={ref => {
                this.phone = ref;
              }}
              style={{
                marginHorizontal: calcHeight(1),
                marginVertical: calcHeight(1.3),
              }}
              textStyle={{
                fontSize: RFPercentage(2),
                paddingVertical: calcHeight(1),
                paddingHorizontal: calcWidth(2),
                color: '#8d847d',
                paddingHorizontal: calcHeight(1),
                fontFamily: 'Montserrat-Light',
              }}
              // textComponent={Input}
              onPressFlag={this.onPressFlag}
              placeholder="Mobile *"
              name="PersonalPhone"
              label="Mobile *"
              keyboardType="numeric"

              // value={values.PersonalPhone}
            />
            {/* <ErrorLabel label="Required" /> */}

            <Input2 placeholder="Land Phone*" />
            {/* <ErrorLabel label="Required" /> */}

            <Input2 placeholder="Address Line 1*" />
            {/* <ErrorLabel label="Required" /> */}

            <Input2 placeholder="Street Address*" />
            {/* <ErrorLabel label="Required" /> */}

            <ModalPicker
              placeholder="State*"
              ref={ref => {
                this.statePicker = ref;
              }}
              data={this.state.data}
              onChange={value => alert(value)}>
              {states.map((state, index) => (
                <ModalPickerItem
                  onPress={() => this.onSelect(state.name, state.name)}
                  label={state.name}
                />
              ))}
            </ModalPicker>

            {/* <ModalPicker
              placeholder="Certificate Issued Country*"
              data={this.state.data}
              onChange={value => alert(value.value)}
            />

            <ModalPicker
              placeholder="Certificate Type*"
              data={this.state.data}
              onChange={value => alert(value.value)}
            /> */}

            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                marginVertical: calcHeight(0.7),
                marginHorizontal: calcWidth(1.5),
                borderColor: '#999999',
              }}>
              <View style={{flex: 1, marginBottom: -calcHeight(0.8)}}>
                <Input2 placeholder="City*" noBorder={true} />
              </View>
              <View style={{flex: 1, marginBottom: -calcHeight(0.8)}}>
                <Input2 placeholder="PO Box" noBorder={true} />
              </View>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#999999',
                flexDirection: 'row',
                paddingBottom: calcHeight(0.7),
                marginVertical: calcHeight(2),
                marginHorizontal: calcWidth(1.5),
              }}>
              <RadioButton
                isSelected={true}
                onPress={() => alert('')}
                text="Direct Delivery"
              />
              <RadioButton
                isSelected={false}
                onPress={() => alert('')}
                text="Through Courier"
              />
            </View>
            <SelectFile
              title="Upload File"
              onLeftPress={() => alert('left')}
              onRightPress={() => alert('right')}
            />
            <TxtSubHead title="Your Bill Amount" />

            <PriceDetailItem label="Attestation Charge" amount="254" />
            <PriceDetailItem label="Attestation Charge" amount="254" />

            <TxtTotalAmount amount="750" />

            <TxtAgreement
              onClick={() => alert('Chk')}
              onTermsClick={() => alert('Terms')}
              isChecked={true}
            />

            <ButtonNormal label="Pay Now" onPress={() => alert('')} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    padding: calcWidth(5),

    backgroundColor: '#f8f9fc',
    justifyContent: 'center',
  },
});

export default App;
const states = [
  {name: 'Ajman'},
  {name: 'Abu Dhabi'},
  {name: 'Al Fujairah'},
  {name: 'Dubai'},
  {name: 'Sharjah'},
  {name: 'Ras Al Khaima'},
  {name: 'Umm Al Qwain'},
];
