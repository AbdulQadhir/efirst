import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';

import {
  SRDetailsHdr,
  ButtonSlim,
  SRDtDate,
  SRTimeline,
} from '../uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import Details from './details';
import SRDetails from './srdetails';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

import {calcHeight, calcWidth} from '../../config';

import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
} from '../uicomponents/components';

class App extends React.Component {
  state = {
    selectedTab: 1,
  };

  setTab = tab => {
    this.setState({selectedTab: tab});
  };

  static navigationOptions = ({navigation}) => ({
    title: 'Service Details',
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnMenu onPress={() => navigation.openDrawer()} />
        <HeaderBtnBack onPress={() => navigation.goBack()} />
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
          <View style={{flexDirection: 'column', padding: 20, flex: 1}}>
            <SRDetailsHdr label={'Attestation Services-SR2228'} />
            <SRDtDate
              label="Sep 18, 2019, 9.43 am"
              onRefresh={() => alert('Refresh')}
              onChatPress={() => alert('Chat')}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: calcWidth(1),
              }}>
              <ButtonSlim
                onPress={() => this.setTab(1)}
                label="Details"
                style={{
                  backgroundColor:
                    this.state.selectedTab == 1 ? '#47489f' : '#f84563',
                }}
              />
              <ButtonSlim
                onPress={() => this.setTab(2)}
                label="Documents"
                style={{
                  backgroundColor:
                    this.state.selectedTab == 2 ? '#47489f' : '#f84563',
                }}
              />
              <ButtonSlim
                onPress={() => this.setTab(3)}
                label="SR Details"
                style={{
                  backgroundColor:
                    this.state.selectedTab == 3 ? '#47489f' : '#f84563',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              {this.state.selectedTab == 1 ? <Details /> : <View />}
              {this.state.selectedTab == 3 ? <SRDetails /> : <View />}
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = EStyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f8f9fc',
  },
});

export default App;
