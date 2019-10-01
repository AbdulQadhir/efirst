import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

import {ServiceHomeItem} from './uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';
import {HeaderTitle, ServiceHomeText} from './uicomponents/components';

import {calcHeight, calcWidth} from '../config';
import { ScrollView } from 'react-native-gesture-handler';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends Component {
  
  static navigationOptions = {
    headerTitle: <HeaderTitle title="Request a Service" />
  };

  render() {
  return (
    <View style={styles.body}>
      <ScrollView showsVerticalScrollIndicator={false} >
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          //justifyContent: 'space-around',
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
            <ServiceHomeItem title="Attestation Services" desc="Get your certificates attested as legally required" />
            <ServiceHomeItem title="Translation Services" desc="Get your documents translated as legally required" />
            <ServiceHomeItem title="Visa Services" desc="Apply for New VISA, renewals and cancellations" />
            <ServiceHomeItem title="Tax/Vat Services" desc="Get your TAX/VAT as legally required" />
            <ServiceHomeText text={`Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 

Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum`}
            />
        </View>
      </View>
      </ScrollView >
    </View>
  );
}
};


const styles = EStyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#f8f9fc',
    paddingRight: calcWidth(7.5),
    paddingLeft: calcWidth(7.5),
  },
});

export default App;
