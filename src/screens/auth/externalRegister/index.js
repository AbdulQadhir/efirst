import React, {Component} from 'react';
import RegistrationScreen from './screen';
import {connect} from 'react-redux';
import {extRegisterUser, getUserInfo, setExtToken} from '../action';
import {View} from 'react-native';
import Loader from '../../../styled/loader';
import AlertView from '../../../styled/alert-view';

class Container extends Component {
  componentDidMount = () => {
    const {token} = this.props.navigation.state.params;
    console.log('token1==>', token.trim());
    //if (this.props.user) this.props.navigation.navigate('Profile');
  };
  constructor(props) {
    super(props);
    this.state = {
      extRegRequested: false,
      userInfoChecked: false,
    };
  }
  requestExtRegistration = () => {
    this.setState({extRegRequested: true});
  };
  componentDidUpdate = prevProps => {
    if (
      this.props.extRegistration.success &&
      !prevProps.extRegistration.success
    ) {
      this.setState({extRegRequested: false, userInfoChecked: true});
      const {token, uri, headerTitle} = this.props.navigation.state.params;
      this.props.navigation.navigate('ExternalLogin', {
        uri,
        headerTitle,
      });
    }

    if (this.props.extUserInfo.success && !prevProps.extUserInfo.success) {
      if (this.props.extUserInfo.data.HasRegistered) {
        const {token} = this.props.navigation.state.params;
        const {Email} = this.props.extUserInfo.data;
        if (this.props.token) {
          this.props.navigation.navigate('MainMenu');
          return;
        } else {
          this.props.setExtToken({access_token: token, username: Email});
        }
      }
    }
  };
  render = () => {
    const {loading, error, success} = this.props.extRegistration;
    return (
      <View style={{flex: 1}}>
        <Loader loading={loading} />
        <RegistrationScreen
          {...this.props}
          requestExtRegistration={this.requestExtRegistration}
        />
        {error && (
          <AlertView
            type="error"
            message="Already registered with this mail id"
          />
        )}
      </View>
    );
  };
}

const mapStateToProps = ({extRegistration, token, extUserInfo}) => ({
  extRegistration,
  token,
  extUserInfo,
});
const mapDispatchToProps = dispatch => ({
  extRegisterUser: data => dispatch(extRegisterUser(data)),
  getUserInfo: extToken => dispatch(getUserInfo(extToken)),
  setExtToken: data => dispatch(setExtToken(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
