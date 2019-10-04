import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeScreen from './screen';
import {DashboardData} from './action';
import {View, Text} from 'react-native';
import {serviceRequestData} from '../service/action';
import {profileData} from '../profile/action';
import {
  servicesData,
  countries,
  getcertificateType,
  getdoclanguage,
  documentationTypes,
} from '../service/action';
import {FAQCategoryData, clearFaq} from '../faq/action';
import AlertView from '../../styled/alert-view';
import Loader from '../../styled/loader';
import OneSignal from 'react-native-onesignal';
import {HeaderBtnMenu, HeaderBtnProfile} from '../../pages/uicomponents/components';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Refreshing: false,
      error: false,
    };
    this.onOpened = this.onOpened.bind(this);
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Dashboard',
    headerLeft: (
      <View style={{flexDirection: "row"}} >
        <HeaderBtnMenu onPress={() => alert("")} />
      </View>
    ),
    headerRight: <HeaderBtnProfile onPress={() => navigation.navigate('Profile')} />
  });

  onOpened(openResult) {
    const data = openResult.notification.payload.additionalData;
    if (data) {
      const {srid} = data;
      const {token} = this.props.token;
      if (srid) {
        this.props.serviceRequestData({serviceId: srid, token});
        this.props.navigation.navigate('ServiceDetail');
      }
    }
  }

  componentDidMount = () => {
    OneSignal.addEventListener('opened', this.onOpened);
    const {token} = this.props.token;
    this.props.DashboardData(token);
    this.props.profileData(token);
    this.props.ClearFaq();
    this.props.FAQCategoryData(token);
    this.props.countries(token);
    this.props.getcertificateType(token);
    this.props.getdoclanguage(token);
    this.props.documentationTypes(token);
  };

  componentDidUpdate = prevProps => {
    const {success, error} = this.props.dashboard;
    if (success && !prevProps.dashboard.success) {
      this.setState({Refreshing: false});
    }
    if (error && !prevProps.dashboard.error) {
      this.setState({error: true});
    }
  };

  _onRefresh = () => {
    this.setState({Refreshing: true});
    const {token} = this.props.token;
    this.props.DashboardData(token);
  };

  render = () => {
    const {dashboard} = this.props;
    const {loading, error} = dashboard;
    return (
      <View style={{flex: 1}}>
        <Loader loading={loading} />
        <HomeScreen
          {...this.props}
          _onRefresh={this._onRefresh}
          state={this.state}
        />
        {error && this.state.error && (
          <AlertView
            clearAlert={() => this.setState({error: false})}
            type="error"
          />
        )}
      </View>
    );
  };
}

const mapStateToProps = ({dashboard, token}) => ({
  dashboard,
  token,
});
const mapDispatchToProps = dispatch => ({
  DashboardData: payload => dispatch(DashboardData(payload)),
  profileData: payload => dispatch(profileData(payload)),
  FAQCategoryData: payload => dispatch(FAQCategoryData(payload)),
  ClearFaq: () => dispatch(clearFaq()),
  servicesData: payload => dispatch(servicesData(payload)),
  countries: payload => dispatch(countries(payload)),
  getcertificateType: payload => dispatch(getcertificateType(payload)),
  getdoclanguage: payload => dispatch(getdoclanguage(payload)),
  documentationTypes: payload => dispatch(documentationTypes(payload)),
  serviceRequestData: payload => dispatch(serviceRequestData(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
