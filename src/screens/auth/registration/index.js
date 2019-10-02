import React, {Component} from 'react';
import RegistrationScreen from './screen';
import {connect} from 'react-redux';
import {registerUser} from '../action';
import {View} from 'react-native';
import Loader from '../../../styled/loader';
import AlertView from '../../../styled/alert-view';
class Container extends Component {
  state = {
    error: false,
  };
  componentDidMount = () => {
    //if (this.props.user) this.props.navigation.navigate('Profile');
  };
  componentDidUpdate = prevProps => {
    if (this.props.registration.success && !prevProps.registration.success) {
      this.props.navigation.navigate('ConfirmEmail', {
        redirectFrom: 'Register',
      });
    }

    if (this.props.registration.error && !prevProps.registration.error) {
      this.setState({error: true});
    }
  };
  render = () => {
    const {loading, error, success} = this.props.registration;
    return (
      <View style={{flex: 1}}>
        <Loader loading={loading} />
        <RegistrationScreen {...this.props} />
        {error && this.state.error && (
          <AlertView
            clearAlert={() => this.setState({error: false})}
            type="error"
            message="Email already exist."
          />
        )}
      </View>
    );
  };
}
const mapStateToProps = ({registration}) => ({
  registration,
});
const mapDispatchToProps = dispatch => ({
  registerUser: data => dispatch(registerUser(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
