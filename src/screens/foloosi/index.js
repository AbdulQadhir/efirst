import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {servicesData} from '../service/action';
import {PAYMENT_WEB_URL} from '../../constants';
//import success from './success';
import Loader from '../../styled/loader';
import {HeaderBtnBack} from '../../pages/uicomponents/components';
import { OFFER_CHK_URL, OFFER_ADD_URL } from "../../constants";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      Requested: false,
      showWeb: true,
      type: 'success',
      loading: false,
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Make a Payment',
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnBack onPress={() => navigation.goBack()} />
      </View>
    ),
  });
  async componentDidUpdate() {
    const {srid} = this.props.navigation.state.params;

    if (this.state.Requested) {
      if (this.state.type == 'success') {
        
        const {token} = this.props.token;
        const statusId = null;
        this.props.servicesData({statusId, token});

        this.props.navigation.navigate('MyRequests', {
          headerTitle: 'My Requests',
          noDataLabel: 'No recent service request',
          statusId: null,
        });
      } else {
        this.props.navigation.navigate('ServiceHome');
      }
    }
  }
  showAndHideLoader = val => {
    this.setState({loading: val});
  };
  _onNavigationStateChange = webViewState => {
    var str = webViewState.url;

    var s = str.indexOf('Success');
    var e = str.indexOf('Error');
    if (s >= 0) {
      this.WebView.stopLoading();
      this.setState({
        Requested: true,
        showWeb: false,
        type: 'success',
        loading: false,
      });
    }
    if (e >= 0) {
      this.WebView.stopLoading();
      this.setState({
        Requested: true,
        showWeb: false,
        type: 'error',
        loading: false,
      });
    }
  };

  render = () => {
    const {Id} = this.props.navigation.state.params;

    return (
      <View style={{flex: 1}}>
        <Loader loading={this.state.loading} />
        {this.state.showWeb && (
          <WebView
            source={{
              uri: `${PAYMENT_WEB_URL}${Id}`,
            }}
            userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
            style={{marginTop: 20}}
            onNavigationStateChange={this._onNavigationStateChange.bind(this)}
            ref={c => {
              this.WebView = c;
            }}
            onLoadStart={() => this.showAndHideLoader(true)}
            onLoadEnd={() => this.showAndHideLoader(false)}
          />
        )}
      </View>
    );
  };
}

const mapStateToProps = ({extUserInfo, token}) => ({
  extUserInfo,
  token,
});
const mapDispatchToProps = dispatch => ({
  servicesData: payload => dispatch(servicesData(payload)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
