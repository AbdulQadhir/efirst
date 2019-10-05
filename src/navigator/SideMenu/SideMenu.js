
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import {SideMenuItem, SideMenuDivider, SideMenuHeader} from "../../pages/uicomponents/components"

const assetsPath = '../../Assets/';

class SideMenu extends Component {

  render () {
    const navigateToScreen = (route) => () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigateAction);
    }
    return (
      <View style={styles.container}>
        <ScrollView>
            <SideMenuHeader name="Michelle" desig="VP Human Resources" />
            <SideMenuDivider />
            <SideMenuItem onPress={navigateToScreen("Dashboard")} label="Dashboard" img={require(`${assetsPath}Menubar/dash.png`)} />
            <SideMenuItem onPress={navigateToScreen("ServiceHome")} label="Request a Service" img={require(`${assetsPath}Menubar/req.png`)} />
            <SideMenuItem onPress={navigateToScreen("MyRequests")} label="My Requests" img={require(`${assetsPath}Menubar/req.png`)}  />
            <SideMenuItem onPress={navigateToScreen("Profile")} label="Profile" img={require(`${assetsPath}Menubar/profile.png`)}  />
            <SideMenuItem label="Documents" img={require(`${assetsPath}Menubar/doc.png`)}  />
            <SideMenuDivider />
            <SideMenuItem label="FAQ" img={require(`${assetsPath}Menubar/dash.png`)}  />
            <SideMenuItem label="Support" img={require(`${assetsPath}Menubar/support.png`)}  />
            <SideMenuItem label="Settings" img={require(`${assetsPath}Menubar/dash.png`)}  />
            <SideMenuItem label="Log Out" img={require(`${assetsPath}Menubar/dash.png`)}  />
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;