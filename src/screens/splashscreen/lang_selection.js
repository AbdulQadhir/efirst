import React, {Component} from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {DASHBOARD_DATA_URL} from '../../constants';
import {NavigationActions} from 'react-navigation';
import {setStatusBar} from './action';
import {Text, View, Image, Dimensions} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import {calcHeight, calcWidth} from '../../config';
import {RFValue} from 'react-native-responsive-fontsize';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: '',
      showText: true,
      getStartedText: '',
    };

    setInterval(() => {
      this.setState(previousState => {
        return {showText: !previousState.showText};
      });
    }, 600);
  }
  navigateTo = page => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: page})],
    });
    this.props.navigation.dispatch(resetAction);
  };

  async getIn() {
    const {token} = this.props.token;
    const result = await fetch(DASHBOARD_DATA_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).catch(error => {
      this.setState({error});
      this.setState({loading: false});
    });
    if (!result) return;
    const data = await result.json();
    const {
      ActionRequiredNewUpdateCount,
      ActionRequiredTotalUpdateCount,
      CompletedNewUpdateCount,
      CompletedTotalUpdateCount,
      InReviewNewUpdateCount,
      InReviewTotalUpdateCount,
      RejectedNewUpdateCount,
      RejectedTotalUpdateCount,
    } = data.Tiles;

    const total =
      ActionRequiredNewUpdateCount +
      ActionRequiredTotalUpdateCount +
      CompletedNewUpdateCount +
      CompletedTotalUpdateCount +
      InReviewNewUpdateCount +
      InReviewTotalUpdateCount +
      RejectedNewUpdateCount +
      RejectedTotalUpdateCount;

    if (total > 0) {
      this.props.setStatusBar(true);
      this.props.navigation.navigate('Dashboard');
    } else {
      this.props.setStatusBar(true);
      this.props.navigation.navigate('Services');
    }
  }

  async componentDidMount() {
    try {
      this.props.setStatusBar(false);
      const value = await AsyncStorage.getItem('InitialLogin');
      if (value !== null) {
        this.setState({getStartedText: 'Get Started...!'});
        setTimeout(() => {
          this.props.setStatusBar(true);
          this.props.navigation.navigate('Auth');
        }, 3000);
      } else {
        AsyncStorage.setItem('InitialLogin', '1');
        this.setState({loading: false});
        this.setState({getStartedText: 'Get Started...!'});
        setTimeout(() => {
          this.props.navigation.navigate('SplashSlider');
        }, 3000);
      }
    } catch (error) {
      this.setState({loading: false});
    }
  }

  render = () => {
    let getStartedText = this.state.showText ? this.state.getStartedText : ' ';
    return (
      <View style={styles.body}>
        <View style={{height: '88%', justifyContent: 'center'}}>
          <View style={{alignSelf: 'center'}}>
            <Image
              style={styles.logo_img}
              source={require('../../Assets/logo.png')}
            />
            <Text style={styles.txtgetstarted}>{getStartedText}</Text>
          </View>
        </View>
        <View
          style={{
            height: '12%',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={styles.footertxt}>C 2019. All Right Reserved</Text>
          <View
            style={{
              backgroundColor: '#e2eae7',
              height: 5,
              width: '30%',
            }}></View>
        </View>
      </View>
    );
  };
}

const mapStateToProps = ({token}) => ({token});
const mapDispatchToProps = dispatch => ({
  setStatusBar: payload => dispatch(setStatusBar(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);

const styles = EStyleSheet.create({
  txtgetstarted: {
    fontSize: RFValue(18),
    color: '#4d4d4d',
    textAlign: 'center',
    paddingVertical: calcHeight(3),
    fontFamily: 'Montserrat-Light',
  },
  footertxt: {
    fontSize: RFValue(15),
    color: '#8d847d',
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
  },
  body: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  logo_img: {
    height: calcHeight(18),
    resizeMode: 'contain',
  },
});
