import React, {Component} from 'react';
import ConfirmEmail from './screen';
import {connect} from 'react-redux';
import {confirmEmail} from '../action';
import {View} from 'react-native';
import AlertView from '../../../styled/alert-view';
import Loader from '../../../styled/loader';
class Container extends Component {
  componentDidMount = () => {
    //if (this.props.user) this.props.navigation.navigate('Profile');
  };
  componentDidUpdate(prevProps) {
    if (this.props.confirmemail.success && !prevProps.confirmemail.success) {
      alert('Registration Success');
      this.props.navigation.navigate('Auth');
    }
  }
  render = () => {
    const {error, loading} = this.props.confirmemail;
    const redirectFrom = this.props.navigation.getParam('redirectFrom', null);
    return (
      <View style={{flex: 1}}>
        <Loader loading={loading} />
        <ConfirmEmail {...this.props} redirectFrom={redirectFrom} />
        {error ? <AlertView type="error" message="Invalid code" /> : null}
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

const mapStateToProps = ({registration, confirmemail}) => ({
  registration,
  confirmemail,
  //
});
const mapDispatchToProps = dispatch => ({
  confirmEmail: payload => dispatch(confirmEmail(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
