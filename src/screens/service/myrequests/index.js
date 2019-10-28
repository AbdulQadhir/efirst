import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserActions from './screen';
import {BackHandler} from 'react-native';
import {servicesData, serviceRequestData} from '../action';
import {View, StyleSheet, Text} from 'react-native';
import Loader from '../../../styled/loader';
import AlertView from '../../../styled/alert-view';
import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
} from '../../../pages/uicomponents/components';

class Container extends Component {
  _didFocusSubscription;
  _willBlurSubscription;
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: '',
      noDataLabel: '',
      searchText: '',
      Refreshing: false,
      error: false,
    };

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('headerTitle', 'My Requests'),
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
  componentDidUpdate = prevProps => {
    const {success, error} = this.props.services;

    if (success && !prevProps.services.success) {
      this.setState({Refreshing: false});
    }

    if (error && !prevProps.services.error) {
      this.setState({error: true});
    }
  };

  _onRefresh = () => {
    this.setState({Refreshing: true});
    const {token} = this.props.token;
    const statusId = this.props.navigation.getParam('statusId', null);
    this.props.servicesData({statusId: statusId, token});
  };

  setSearchText = searchText => {
    this.setState({searchText});
  };

  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick() {
    this.props.navigation.navigate('Dashboard');
    return true;
  }
  render = () => {
    const {
      services: {error, loading},
    } = this.props;

    const success =
      this.props.documentattestation.success ||
      this.props.langtranslation.success;
    return (
      <View style={styles.container}>
        <Loader loading={loading} />
        <UserActions
          _onRefresh={this._onRefresh}
          {...this.props}
          state={this.state}
          {...this.props.navigation.state.params}
          setSearchText={this.setSearchText}
        />
        {error && this.state.error && (
          <AlertView
            clearAlert={() => this.setState({error: false})}
            type="error"
          />
        )}
        {/* {success && <AlertView type="success" />} */}
      </View>
    );
  };
}

const mapStateToProps = ({
  services,
  token,
  langtranslation,
  documentattestation,
}) => ({
  services,
  token,
  documentattestation,
  langtranslation,
});
const mapDispatchToProps = dispatch => ({
  servicesData: payload => dispatch(servicesData(payload)),
  serviceRequestData: payload => dispatch(serviceRequestData(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
