import React, {Component} from 'react';
import {View, Linking, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LoginScreen from './screen';
import {connect} from 'react-redux';
import {DashboardData} from '../../dashboard/action';
import {loginUser, getExtLoginUrls} from '../action';
import {profileData} from '../../profile/action';
import {registerOnesignal} from '../../onesignal/action';
import AlertView from '../../../styled/alert-view';
import MiniOfflineSign from '../../../styled/OfflineNotice';
import Loader from '../../../styled/loader';

class Container extends Component {
  state = {
    success: false,
    error: false,
    loading: false,
  };
  componentDidMount = async () => {

    const showSuccess = this.props.navigation.getParam('showSuccess', null);
    if (showSuccess) {
      this.setState({success: true});
    }
    if (this.props.token) {
      // this.props.navigation.navigate('MainMenu');
      const token = this.props.token.token;
      this.props.DashboardData(token);
    }
    this.props.getExtLoginUrls('0');
  };

  async componentDidUpdate(prevProps) {
    if (this.props.login.error && !prevProps.login.error) {
      this.setState({error: true});
    }

    if (this.props.login.success && !prevProps.login.success) {
      if (this.props.token) {
        this.setState({loading: true});
        this.props.profileData(this.props.token.token);
      }
    }
    if (this.props.profile.success && !prevProps.profile.success) {
      const {UserId} = this.props.profile.data.userdetail;
      const PlayerId = await AsyncStorage.getItem('playerid');
      const data = {UserId, PlayerId};
      const token = this.props.token.token;
      this.setState({loading: false});
      this.props.registerOnesignal({data, token});
      this.props.DashboardData(token);
      //this.props.navigation.navigate('MainMenu');
    }
    if (this.props.dashboard.success && !prevProps.dashboard.success) {
      const {data} = this.props.dashboard;
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
      if (total > 0) this.props.navigation.navigate('MainMenu');
      else this.props.navigation.navigate('ServiceHome');
    }
  }
  state = {
    isConnected: true,
  };
  changeInternetStatus = isConnected => {
    this.setState({isConnected});
  };
  render = () => (
    <View style={{flex: 1}}>
      <Loader
        loading={
          this.props.login.loading ||
          this.props.profile.loading ||
          this.props.dashboard.loading
        }
      />

      {!this.props.token && (
        <LoginScreen
          {...this.props}
          changeInternetStatus={this.changeInternetStatus}
        />
      )}
      {this.props.confirmemail.success && this.state.success && (
        <AlertView
          clearAlert={() => this.setState({success: false})}
          type="success"
          message="Verification completed successfully. Pls Login.."
        />
      )}
      {this.props.login.error && this.state.error && (
        <AlertView
          clearAlert={() => this.setState({error: false})}
          type="error"
          message="Entered username or password is incorrect"
        />
      )}
      {!this.state.isConnected && (
        <MiniOfflineSign
          changeInternetStatus={this.changeInternetStatus}
          isConnected={this.state.isConnected}
        />
      )}
    </View>
  );
}
const mapStateToProps = ({
  token,
  login,
  confirmemail,
  extLoginUrls,
  onesignalInfo,
  profile,
  applicationState,
  dashboard,
}) => ({
  token,
  login,
  confirmemail,
  extLoginUrls,
  onesignalInfo,
  profile,
  applicationState,
  dashboard,
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data)),
  getExtLoginUrls: data => dispatch(getExtLoginUrls(data)),
  registerOnesignal: data => dispatch(registerOnesignal(data)),
  profileData: payload => dispatch(profileData(payload)),
  DashboardData: payload => dispatch(DashboardData(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
