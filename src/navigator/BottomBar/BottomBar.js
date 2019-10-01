import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {TouchableOpacity, Text, View, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';
import {calcHeight, calcWidth} from '../../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({
  $rem: entireScreenWidth / 380,
});

class BottomBar extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.view}
          onPress={this.navigateToScreen('Dashboard')}>
          {/* <Icon name="upcircle" style={styles.icon} /> */}
          <Image
            source={require('../../Assets/bottom_bar/dashboard_white_icon.png')}
            style={styles.img}
          />
          <Text style={styles.text}>Dashboard</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity style={styles.view}>
          <Image
            source={require('../../Assets/bottom_bar/request_white_icon.png')}
            style={styles.img}
          />
          <Text style={styles.text}>Request a Service</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.view}
          onPress={this.navigateToScreen('MyRequests')}>
          <Image
            source={require('../../Assets/bottom_bar/myrequest_white_icon.png')}
            style={styles.img}
          />
          <Text style={styles.text}>My Requests</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

BottomBar.propTypes = {
  navigation: PropTypes.object,
};

export default BottomBar;

const styles = EStyleSheet.create({
  divider: {
    backgroundColor: '#FFF',
    width: calcWidth(0.32),
    flexDirection: 'row',
    marginVertical: calcHeight(0.9),
  },
  img: {
    width: calcHeight(4.5),
    height: calcHeight(4.5),
  },
  container: {
    padding: calcHeight(0.4),
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#081344',
  },
  view: {
    padding: calcHeight(0.5),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: RFValue(11),
    padding: calcHeight(0.5),
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
    color: '#FFF',
  },
});
