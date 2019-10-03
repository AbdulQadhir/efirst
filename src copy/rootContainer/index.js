import React, {Fragment, Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import Navigator from '../navigator/root';
import {StatusBar, View, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
//import {setOneSignalDeviceInfo} from '../components/onesignal/action';
import {connect} from 'react-redux';
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;
import OneSignal from 'react-native-onesignal';

class RootContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    OneSignal.addEventListener('received', this.onReceived);

    OneSignal.addEventListener('ids', this.onIds);

    OneSignal.configure(); // <-- add this line
    console.log('OneSignal==');
  }
  onReceived(notification) {
    //console.log("Notification received: ", notification);
  }

  onIds(device) {
    const playerid = device.userId;

    if (typeof playerid === 'string') {
      AsyncStorage.setItem('playerid', playerid);
    }
  }
  render = () => (
    <SafeAreaView
      style={{flex: 1}}
      forceInset={{bottom: 'never', top: 'never'}}>
      {/* ))} */}
      <StatusBar backgroundColor="#f8f9fc" barStyle="dark-content" />
      <Fragment>
        <Navigator />
      </Fragment>
    </SafeAreaView>
  );
}

export default connect(
  null,
  null,
)(RootContainer);
