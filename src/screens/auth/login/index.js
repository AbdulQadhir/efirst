import React, {Component} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LoginScreen from './screen';
import {connect} from 'react-redux';
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
    if (this.props.token) {
      this.props.navigation.navigate('MainMenu');
    }
    this.props.getExtLoginUrls('0');
  };

  async componentDidUpdate(prevProps) {
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
      this.props.navigation.navigate('MainMenu');
    }
  }
  state = {
    isConnected: true,
  };
  changeInternetStatus = isConnected => {
    console.log('isConnected,isConnected', isConnected);
    this.setState({isConnected});
  };
  render = () => (
    <View style={{flex: 1}}>
      <Loader loading={this.props.login.loading || this.state.loading} />

      <LoginScreen
        {...this.props}
        changeInternetStatus={this.changeInternetStatus}
      />
      {this.props.confirmemail.success &&
        this.props.applicationState.success && (
          <AlertView
            type="success"
            message="Verification completed successfully. Pls Login.."
          />
        )}
      {this.props.login.error && this.props.applicationState.error && (
        <AlertView
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
}) => ({
  token,
  login,
  confirmemail,
  extLoginUrls,
  onesignalInfo,
  profile,
  applicationState,
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data)),
  getExtLoginUrls: data => dispatch(getExtLoginUrls(data)),
  registerOnesignal: data => dispatch(registerOnesignal(data)),
  profileData: payload => dispatch(profileData(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
