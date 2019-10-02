import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions, } from 'react-native';

import {
  Input,
  Button,
  ErrorLabel,
  Pick
} from './uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../config';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  static navigationOptions = {
    title: 'Attestation Service',
  };

  state = {
    state : ""
  }
  render() {
    return (
      <View style={styles.body}>
        <View>
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always">

            <Input placeholder="Name*" />
            <ErrorLabel label="Required" />
            
            <Input placeholder="Email*" />
            <ErrorLabel label="Required" />
            
            <Input placeholder="Mobile*" />
            <ErrorLabel label="Required" />
            
            <Input placeholder="Land Phone*" />
            <ErrorLabel label="Required" />
            
            <Input placeholder="Address Line 1*" />
            <ErrorLabel label="Required" />
            
            <Input placeholder="Street Address*" />
            <ErrorLabel label="Required" />

            <Pick
              selectedValue={this.state.state}
              style={{ }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({state: itemValue})
              }>
              <Pick.Item label="Java" value="java" />
              <Pick.Item label="JavaScript" value="js" />
            </Pick>
            
            <View  style={{flexDirection:"row"}} >
            <Input placeholder="City*" />
            
            <Input placeholder="PO Box" />
            </View>

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
    paddingLeft: calcWidth(1),
    paddingRight: calcWidth(1),
    backgroundColor: '#f8f9fc',
    justifyContent: 'center',
  },
});

export default App;
