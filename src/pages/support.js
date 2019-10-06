import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';

import {
  InputSupport,
  ButtonNormal,
  SupportDetail,
} from './uicomponents/components';

import {
  HeaderBtnProfile,
  HeaderBtnMenu,
  HeaderBtnBack,
} from './uicomponents/components';
import {calcHeight, calcWidth} from '../config';

import EStyleSheet from 'react-native-extended-stylesheet';
import Ionicons from 'react-native-vector-icons/AntDesign';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const assetsPath = '../../Assets/';
const img = 'require(`../../Assets/Menubar/dash.png`)';
class App extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Support',
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnMenu onPress={() => navigation.openDrawer()} />
        <HeaderBtnBack onPress={() => navigation.navigate('Dashboard')} />
      </View>
    ),
    headerRight: (
      <HeaderBtnProfile onPress={() => navigation.navigate('Profile')} />
    ),
  });

  render() {
    return (
      <>
        <View style={styles.body}>
          <View style={styles.box}>
            <InputSupport placeholder="Name" />
            <InputSupport placeholder="Email" />
            <InputSupport placeholder="Mobile" />
            <InputSupport
              placeholder="Message"
              multiline={true}
              style={{height: calcHeight(15)}}
            />
          </View>
          <ButtonNormal label="Submit" onPress={() => alert('')} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.box}>
              <SupportDetail title="Phone" data="+9182656781" />
              <SupportDetail title="Email" data="michelle1991@gmail.com" />
              <SupportDetail
                title="Address"
                data="jhgjksad lksdflskfn lskdfns skdfnlskf sdkjfslkf djskfsdkf"
              />
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = EStyleSheet.create({
  body: {
    flex: 1,
    //height: '100%',
    padding: calcHeight(2.5),
    backgroundColor: '#f8f9fc',
  },
  box: {
    marginTop: calcHeight(2),
  },
});

export default App;
