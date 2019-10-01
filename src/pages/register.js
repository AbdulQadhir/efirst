import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';

import {
  Input,
  LabelInput,
  LabelHeader,
  Button,
  ButtonLabel,
  ButtonExtLogin,
  LoginFooter,
  ErrorLabel,
} from './uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../config';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={true}>
          <LabelHeader label={'Sign Up'} />

          <LabelInput label={'Name'} />
          <Input />
          <ErrorLabel label="Required" />
          <LabelInput label={'Email'} />
          <Input />
          <ErrorLabel label="Required" />
          <LabelInput label={'Mobile'} />
          <Input />
          <ErrorLabel label="Required" />
          <LabelInput label={'Password'} />
          <Input />
          <ErrorLabel label="Required" />
          <LabelInput label={'Confirm Password'} />
          <Input />
          <ErrorLabel label="Required" />
          <Button
            label="Sign Up"
            onPress={() => this.props.navigation.navigate('MainMenu')}
          />
          <ButtonLabel
            label={'Have an Account? Login'}
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </ScrollView>

        <LoginFooter />
      </View>
    );
  }
}
const styles = EStyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    paddingLeft: calcWidth(5),
    paddingRight: calcWidth(5),
    backgroundColor: '#f8f9fc',
    justifyContent: 'center',
  },
});

export default App;
