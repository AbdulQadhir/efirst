import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, BackHandler} from 'react-native';

import {ServiceHomeItem} from './uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  HeaderBtnProfile,
  ServiceHomeText,
  HeaderBtnMenu,
  HeaderBtnBack,
} from './uicomponents/components';

import {calcHeight, calcWidth} from '../config';
import {ScrollView} from 'react-native-gesture-handler';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Request a Service',
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

  _didFocusSubscription;
  _willBlurSubscription;
  constructor(props) {
    super(props);
    this._didFocusSubscription = props.navigation.addListener(
      'didFocus',
      payload =>
        BackHandler.addEventListener(
          'hardwareBackPress',
          this.onBackButtonPressAndroid,
        ),
    );
  }
  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      payload =>
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.onBackButtonPressAndroid,
        ),
    );
  }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  onBackButtonPressAndroid = () => {
    this.props.navigation.navigate('Dashboard');
    return true;
  };
  render() {
    return (
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'column',
              flex: 1,
              marginTop: calcHeight(2.5),
              //justifyContent: 'space-around',
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <ServiceHomeItem
                title="Visa Services"
                desc="Apply for New VISA, renewals and cancellations"
                type={3}
                onPress={() => this.props.navigation.navigate('VisaStack')}
              />
              <ServiceHomeItem
                title="Attestation Services"
                desc="Get your certificates attested as legally required"
                type={1}
                onPress={() =>
                  this.props.navigation.navigate('DocumentAttestation')
                }
              />
              <ServiceHomeItem
                title="Translation Services"
                desc="Get your documents translated as legally required"
                type={2}
                onPress={() =>
                  this.props.navigation.navigate('LanguageTranslation')
                }
              />
              
              <ServiceHomeText
                text={``}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#f8f9fc',
    paddingRight: calcWidth(7.5),
    paddingLeft: calcWidth(7.5),
  },
});

export default App;
