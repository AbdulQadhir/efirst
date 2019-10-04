import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';

import {
  Input,
  LabelInput,
  LabelHeader,
  Button,
  ButtonLabel,
  ButtonExtLogin,
  ErrorLabel,
  LoginFooter,
} from './uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../config';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <View>
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always">
            <LabelHeader label={'Login'} />

            <LabelInput label={'Username/Email'} />
            <Input />
            <ErrorLabel label="Required" />
            <LabelInput label={'Password'} />
            <Input />
            <ErrorLabel label="Required" />
            <ButtonLabel
              wrapperStyle={{alignSelf: 'flex-end'}}
              textStyle={{fontFamily: 'Montserrat-LightItalic'}}
              label={'Forget Password?'}
            />
            <Button
              label="Login"
              onPress={() => this.props.navigation.navigate('MainMenu')}
            />
            <ButtonLabel label={"Don't have an account ? Sign up"} />
            <ButtonExtLogin />
          </ScrollView>
        </View>
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
    height: calcHeight(75),
    justifyContent: 'center',
  },
});

export default App;
