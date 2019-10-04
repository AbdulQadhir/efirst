import React from 'react';
import {Modal, Text, TouchableOpacity, View, ScrollView, Dimensions, } from 'react-native';

import {
  Input2,
  ErrorLabel,
  ProfilePhoto,
  ProfileName,
  ButtonSlim,
  ProfileSaveIcon
} from './uicomponents/components';

import Ionicons from "react-native-vector-icons/Ionicons";

import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../config';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


class App extends React.Component {
  static navigationOptions = {
    title: 'Attestation Service',
  };

  state = {
    state : "",
    editProfile: false
  }

  setEditProfile = (state) => 
  {
    this.setState({editProfile : state});
  }
  
  render() {
    
    return (
      <View style={styles.body}>
        <View>
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always">

            <ProfilePhoto img={require(`../Assets/Profile/profile.jpg`)} />
            {!this.state.editProfile ?
            (
              <ProfileName name="Michelle" designation="VP Human Resources" onEditPress={()=>this.setEditProfile(true)}  />
            ) : 
            (
              <View>
                <ProfileSaveIcon onPress={()=>this.setEditProfile(false)}  />
                <Input2 placeholder="Name*" />
                <Input2 placeholder="Designation*" />
              </View>
            )}
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
