import React, {Component} from 'react';
import ForgetPasswordScreen from './screen';
import {connect} from 'react-redux';
import {resetPasswordUser} from '../action';
import Loader from '../../../styled/loader';
import AlertView from '../../../styled/alert-view';
import {View} from 'react-native';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      error: false,
    };
  }
  componentDidMount = () => {
    //if (this.props.user) this.props.navigation.navigate('Profile');
  };
  setStateEmail = email => {
    this.setState({Email: email});
  };
  componentDidUpdate(prevProps) {
    if (
      this.props.forgetpassword.success &&
      !prevProps.forgetpassword.success
    ) {
      this.props.navigation.navigate('ChangePassword', {
        Email: this.state.Email,
      });
    }

    if (this.props.forgetpassword.error && !prevProps.forgetpassword.error) {
      this.setState({error: true});
    }
  }
  render() {
    const {loading, error} = this.props.forgetpassword;
    const {applicationState} = this.props;
    return (
      <View style={{flex: 1}}>
        <Loader loading={loading} />
        <ForgetPasswordScreen
          {...this.props}
          setStateEmail={this.setStateEmail}
        />
        {error && this.state.error && (
          <AlertView
            clearAlert={() => this.setState({error: false})}
            type={error}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = ({forgetpassword, applicationState}) => ({
  forgetpassword,
  applicationState,
  //
});
const mapDispatchToProps = dispatch => ({
  resetPasswordUser: email => dispatch(resetPasswordUser(email)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
