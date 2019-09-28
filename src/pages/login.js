import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import {Input, LabelInput, LabelHeader, Button, ButtonLabel, ButtonExtLogin, LoginFooter } from "./uicomponents/components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  render() {
  return (
    <>
          <View style={styles.body} >
            <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false} >
            <LabelHeader label={"Login"} />

            <LabelInput label={"Username"} />
            <Input  />
            <LabelInput label={"Password"} />
            <Input  />
            <Button label="Login" onPress={()=>this.props.navigation.navigate("MainMenu")} />
            <ButtonLabel label={"Don't have an account ? Sign up"} />
            <ButtonExtLogin />
            </ScrollView >
            </View>
            <LoginFooter />
          </View>
    </>
  );
}
};

const styles = EStyleSheet.create({
  body : {
    height: "100%"
  },
  container : {
    padding: "30 rem",
    backgroundColor: "#f8f9fc",
    height: "80%"
  }
});

export default App;
