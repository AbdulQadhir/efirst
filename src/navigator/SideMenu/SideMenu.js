import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';

import {
  SideMenuItem,
  SideMenuDivider,
  SideMenuHeader,
} from '../../pages/uicomponents/components';

const assetsPath = '../../Assets/';

import {NavigationActions, DrawerActions} from 'react-navigation';
import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import {Logout, clearLogoutState} from '../../screens/auth/action';
import {unregisterOnesignal} from '../../screens/onesignal/action';
import Loader from '../../styled/loader';
import {DashboardData} from '../../screens/dashboard/action';
import {servicesData} from '../../screens/service/action';

class SideMenu extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.logout.success && !prevProps.logout.success) {
      this.props.navigation.navigate('Auth');
      this.props.clearLogoutState();
    }
  }

  onLogout = async () => {
    const {UserId} = this.props.userdetail;
    const PlayerId = await AsyncStorage.getItem('playerid');
    const data = {UserId, PlayerId};
    const token = this.props.token.token;
    this.props.unregisterOnesignal({data, token});
    setTimeout(() => this.props.Logout(token), 50);
  };

  render() {
    const navigateToScreen = route => () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route,
      });
      this.props.navigation.dispatch(navigateAction);
    };

    return (
      <View style={styles.container}>
        <Loader
          loading={this.props.logout.loading || this.props.onesignal.loading}
        />
        <ScrollView>
          <SideMenuHeader
            profilePic={this.props.userdetail.ProfilePic}
            name={this.props.userdetail.FirstName}
            desig={this.props.userdetail.Designation}
          />
          <SideMenuDivider />
          <SideMenuItem
            onPress={navigateToScreen('Dashboard')}
            label="Dashboard"
            img={require(`${assetsPath}Menubar/dash.png`)}
          />
          <SideMenuItem
            onPress={navigateToScreen('ServiceHome')}
            label="Request a Service"
            img={require(`${assetsPath}Menubar/req.png`)}
          />
          <SideMenuItem
            onPress={() => {
              const {token} = this.props.token;
              const statusId = null;
              this.props.servicesData({statusId, token});
              this.props.navigation.navigate('MyRequests', {
                headerTitle: 'My Requests',
                noDataLabel: 'No recent service request',
                statusId: null,
              });
            }}
            label="My Requests"
            img={require(`${assetsPath}Menubar/request.png`)}
          />
          <SideMenuItem
            onPress={navigateToScreen('Profile')}
            label="Profile"
            img={require(`${assetsPath}Menubar/profile.png`)}
          />

          <SideMenuDivider />
          <SideMenuItem
            onPress={navigateToScreen('FAQHome')}
            label="FAQ"
            img={require(`${assetsPath}Menubar/faq.png`)}
          />
          <SideMenuItem
            label="Support"
            img={require(`${assetsPath}Menubar/support.png`)}
          />

          <SideMenuItem
            label="Log Out"
            img={require(`${assetsPath}Menubar/logout.png`)}
            onPress={() => this.onLogout()}
          />
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object,
};

const mapStateToProps = ({
  profile: {
    data: {userdetail},
  },
  onesignal,
  token,
  logout,
}) => ({
  userdetail,
  token,
  logout,
  onesignal,
});
const mapDispatchToProps = dispatch => ({
  servicesData: payload => dispatch(servicesData(payload)),
  Logout: payload => dispatch(Logout(payload)),
  DashboardData: payload => dispatch(DashboardData(payload)),
  clearLogoutState: () => dispatch(clearLogoutState()),
  unregisterOnesignal: data => dispatch(unregisterOnesignal(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideMenu);
