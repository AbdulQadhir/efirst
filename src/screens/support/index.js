import React, {Component} from 'react';
import {connect} from 'react-redux';
import Support from './screen';
import {supportCreate} from './action';
import Loader from '../../styled/loader';
import {View} from 'react-native';
import AlertView from '../../styled/alert-view';
import {
  HeaderBtnProfile,
  HeaderBtnMenu,
  HeaderBtnBack,
} from '../../pages/uicomponents/components';
class Container extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Support',
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnMenu onPress={() => navigation.openDrawer()} />
        <HeaderBtnBack onPress={() => navigation.navigate('Dashboard')} />
      </View>
    ),
    headerRight: (
      <HeaderBtnProfile onPress={() => navigation.navigate('Profile')} />
    ),
  });
  render() {
    const {
      support: {loading, success},
    } = this.props;
    return (
      <View style={{flex: 1}}>
        <Loader loading={loading} />
        <Support {...this.props} />
        {success && (
          <AlertView type="success" message="Your request has been submitted" />
        )}
      </View>
    );
  }
}

const mapStateToProps = ({token, support, profile}) => ({
  token,
  support,
  profile,
});

const mapDispatchToProps = dispatch => ({
  supportCreate: payload => dispatch(supportCreate(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
