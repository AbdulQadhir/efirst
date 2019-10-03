import React from 'react';
import {Modal, Text, TouchableOpacity, View, ScrollView, Dimensions, } from 'react-native';

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
  SelectFile,
  InputNoBorder
} from './uicomponents/components';

import EStyleSheet from 'react-native-extended-stylesheet';

import ModalPicker from "./uicomponents/ModalPicker"

import {calcHeight, calcWidth} from '../config';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


class App extends React.Component {
  static navigationOptions = {
    title: 'Attestation Service',
  };

  state = {
    state : "",
    selectedItem: {},
    ModalVisible : false,
    data : [
        {label: "label1", value:"value1"},
        {label: "label2", value:"value2"},
        {label: "label3", value:"value3"},
        {label: "label4", value:"value4"},
    ]
  }
  
	selected(selected) {
		this.setState({
      selectedItem: {}
		})
  }

  onModalPickerClose = () => {
    this.setState({ModalVisible: false})
  }
  
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

            <ModalPicker placeholder="State*" data={this.state.data} onChange={(value)=>alert(value.value)} />

            <View  style={{flexDirection:"row", borderBottomWidth: 1, margin: 5, borderColor: "#999999"}} >
              <View style={{flex:1}}>
                <InputNoBorder placeholder="City*" />
              </View>
              <View style={{flex:1}}>
                <InputNoBorder placeholder="PO Box" />
              </View>
            </View>

            <ModalPicker placeholder="Certificate Issued Country*" data={this.state.data} onChange={(value)=>alert(value.value)} />

            <ModalPicker placeholder="Certificate Type*" data={this.state.data} onChange={(value)=>alert(value.value)} />

            <View style={{ borderBottomWidth: 1, borderColor: '#999999', margin: 5, flexDirection:"row" }} >
              <RadioButton isSelected={false} onPress={()=>alert("")} />
              <RadioButton isSelected={true} onPress={()=>alert("")}  />
            </View>
            
            <SelectFile title="Upload File" onLeftPress={()=>alert("left")} onRightPress={()=>alert("right")} />

            <TxtSubHead title="Your Bill Amount" />

            <PriceDetailItem label="Attestation Charge" amount="254" />
            <PriceDetailItem label="Attestation Charge" amount="254" />

            <TxtTotalAmount amount="750" />

            <TxtAgreement onClick={()=>alert("Chk")} onTermsClick={()=>alert("Terms")} isChecked={true} />

            <ButtonNormal label="Pay Now" onPress={()=>alert("")} />

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
    padding: calcWidth(3),
    
    backgroundColor: '#f8f9fc',
    justifyContent: 'center',
  },
});

export default App;
