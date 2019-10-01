import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {TouchableOpacity, Text, View, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';
import {calcHeight, calcWidth} from '../../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {DashboardData} from '../../screens/dashboard/action';
import {profileData} from '../../screens/profile/action';
import {
  servicesData,
  countries,
  getcertificateType,
  getdoclanguage,
  documentationTypes,
  serviceRequestData,
} from '../../screens/service/action';
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
  getServiceData() {
    const {token} = this.props.token;
    const statusId = null;
    this.props.servicesData({statusId, token});

    this.props.navigation.navigate('MyRequests', {
      headerTitle: 'My Requests',
      noDataLabel: 'No recent service request',
    });
  }
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
          onPress={() => this.getServiceData()}>
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

const mapStateToProps = ({services, token}) => ({
  services,
  token,
});
const mapDispatchToProps = dispatch => ({
  servicesData: payload => dispatch(servicesData(payload)),
  DashboardData: payload => dispatch(DashboardData(payload)),
  profileData: payload => dispatch(profileData(payload)),
  FAQCategoryData: payload => dispatch(FAQCategoryData(payload)),
  ClearFaq: () => dispatch(clearFaq()),
  countries: payload => dispatch(countries(payload)),
  getcertificateType: payload => dispatch(getcertificateType(payload)),
  getdoclanguage: payload => dispatch(getdoclanguage(payload)),
  documentationTypes: payload => dispatch(documentationTypes(payload)),
  serviceRequestData: payload => dispatch(serviceRequestData(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BottomBar);

BottomBar.propTypes = {
  navigation: PropTypes.object,
};

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
