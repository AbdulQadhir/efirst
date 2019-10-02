import React, {Component} from 'react';
import ChangePassword from './screen';
import {connect} from 'react-redux';
import {registerUser} from '../action';
import {View} from 'react-native';
import Loader from '../../../styled/loader';
import AlertView from '../../../styled/alert-view';
import {forgetChangePassword} from '../action';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: false,
      error: false,
      success: false,
    };
  }
  componentDidMount = () => {
    //if (this.props.user) this.props.navigation.navigate('Profile');
  };
  updateState = value => this.setState({updated: value});
  componentDidUpdate = prevProps => {
    if (
      this.props.forgetchangepassword.success &&
      !prevProps.forgetchangepassword.success
    ) {
      {
        this.setState({success: true});
        this.props.navigation.navigate('Login');
      }
    }

    if (
      this.props.forgetchangepassword.error &&
      !prevProps.forgetchangepassword.error
    ) {
      this.setState({error: true});
    }
  };
  render = () => {
    const {loading, error, success} = this.props.forgetchangepassword;
    const {Email} = this.props.navigation.state.params;
    return (
      <View style={{flex: 1}}>
        <Loader loading={loading} />
        <ChangePassword
          {...this.props}
          Email={Email}
          updateState={this.updateState}
        />
        {error && this.state.error && (
          <AlertView
            clearAlert={() => this.setState({error: false})}
            type="error"
          />
        )}
        {success && this.state.success && (
          <AlertView
            clearAlert={() => this.setState({success: false})}
            type="success"
          />
        )}
        <AlertView
          Timeout={true}
          defaultType={true}
          type="success"
          message="Please check your email for verification code"
        />
      </View>
    );
  };
}
const mapStateToProps = ({forgetchangepassword}) => ({
  forgetchangepassword,
});
const mapDispatchToProps = dispatch => ({
  registerUser: data => dispatch(registerUser(data)),
  changePassword: data => dispatch(forgetChangePassword(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
