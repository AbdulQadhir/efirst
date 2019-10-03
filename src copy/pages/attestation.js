import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  PickerIOS,
} from 'react-native';

import {
  Input2,
  Button,
  ErrorLabel,
  Pick,
  RadioButton,
  TxtSubHead,
  PriceDetailItem,
  TxtTotalAmount,
  TxtAgreement,
  ButtonNormal,
} from './uicomponents/components';

import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../config';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
import IOSPicker from '../styled/PickerIOS';
var PickerItemIOS = PickerIOS.Item;
class App extends React.Component {
  static navigationOptions = {
    title: 'Attestation Service',
  };

  state = {
    state: '',
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
            <ErrorLabel label="Required" />

            <Input2 placeholder="Email*" />
            <ErrorLabel label="Required" />

            <Input2 placeholder="Mobile*" />
            <ErrorLabel label="Required" />

            <Input2 placeholder="Land Phone*" />
            <ErrorLabel label="Required" />

            <Input2 placeholder="Address Line 1*" />
            <ErrorLabel label="Required" />

            <Input2 placeholder="Street Address*" />
            <ErrorLabel label="Required" />

            <View
              style={{borderBottomWidth: 1, borderColor: '#999999', margin: 5}}>
              <IOSPicker
                onSubmit={(value, index) => console.log(index)}
                selectedLabel="JavaScript">
                <PickerItemIOS label="Java" value="java" />
                <PickerItemIOS label="JavaScript" value="js" />
                <PickerItemIOS label="Java" value="java2" />
                <PickerItemIOS label="Java" value="java3" />
                <PickerItemIOS label="Java" value="java4" />
              </IOSPicker>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                margin: 5,
                borderColor: '#999999',
              }}>
              <View style={{flex: 1}}>
                <Input2 placeholder="City*" noBorder={true} />
              </View>
              <View style={{flex: 1}}>
                <Input2 placeholder="PO Box" noBorder={true} />
              </View>
            </View>

            <View
              style={{borderBottomWidth: 1, borderColor: '#999999', margin: 5}}>
              <Pick
                mode="dropdown"
                selectedValue={this.state.state}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({state: itemValue})
                }>
                <Pick.Item label="Java" value="java" />
                <Pick.Item label="JavaScript" value="js" />
              </Pick>
            </View>

            <View
              style={{borderBottomWidth: 1, borderColor: '#999999', margin: 5}}>
              <Pick
                selectedValue={this.state.state}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({state: itemValue})
                }>
                <Pick.Item label="Java" value="java" />
                <Pick.Item label="JavaScript" value="js" />
              </Pick>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#999999',
                // margin: 5,
                flexDirection: 'row',
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
