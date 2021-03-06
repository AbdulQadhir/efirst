import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage';
import {DashboardData} from '../../dashboard/action';
import {getUserInfo, setExtToken} from '../action';
import {registerOnesignal} from '../../onesignal/action';
import Loader from '../../../styled/loader';
import {profileData} from '../../profile/action';
import {
  ButtonSlim,
  Underline,
  HeaderBtnMenu,
  HeaderBtnProfile,
  HeaderBtnBack,
} from '../../../pages/uicomponents/components';
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {token: '', loading: true};
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('headerTitle', 'www.facebook.com'),
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnBack onPress={() => navigation.navigate('Login')} />
      </View>
    ),
  });

  showAndHideLoader = val => {
    this.setState({loading: val});
  };
  async componentDidUpdate(prevProps) {
    if (this.props.token) {
      if (!this.props.profile.success && !this.props.profile.loading) {
        const token = this.props.token.token;

        this.props.profileData(token);
      }
    }
    if (this.props.extUserInfo.success && !prevProps.extUserInfo.success) {
      if (!this.props.extUserInfo.data.HasRegistered) {
        this.props.navigation.navigate('RegisterExternal', {
          token: this.state.token,
          uri: this.props.navigation.state.params.uri,
          headerTitle: this.props.navigation.state.params.headerTitle,
        });
      } else {
        const {token} = this.state;
        const {Email} = this.props.extUserInfo.data;
        if (this.props.token) {
          this.props.navigation.navigate('MainMenu');
          return;
        } else {
          this.props.setExtToken({access_token: token, username: Email});
        }
      }
    }
    if (this.props.profile.success && !prevProps.profile.success) {
      const {UserId} = this.props.profile.data.userdetail;
      const PlayerId = await AsyncStorage.getItem('playerid');

      const data = {UserId, PlayerId};
      const token = this.props.token.token;
      this.props.registerOnesignal({data, token});
      this.props.DashboardData(token);
    }
    if (this.props.dashboard.success && !prevProps.dashboard.success) {
      const {data} = this.props.dashboard;
      const {
        ActionRequiredNewUpdateCount,
        ActionRequiredTotalUpdateCount,
        CompletedNewUpdateCount,
        CompletedTotalUpdateCount,
        InReviewNewUpdateCount,
        InReviewTotalUpdateCount,
        RejectedNewUpdateCount,
        RejectedTotalUpdateCount,
      } = data.Tiles;

      const total =
        ActionRequiredNewUpdateCount +
        ActionRequiredTotalUpdateCount +
        CompletedNewUpdateCount +
        CompletedTotalUpdateCount +
        InReviewNewUpdateCount +
        InReviewTotalUpdateCount +
        RejectedNewUpdateCount +
        RejectedTotalUpdateCount;
      if (total > 0) this.props.navigation.navigate('MainMenu');
      else this.props.navigation.navigate('ServiceHome');
    }
  }
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
    this.props.navigation.navigate('Login');
    return true;
  }
  _onNavigationStateChange = webViewState => {
    var str = webViewState.url;
    var n = str.search('access_token');
    if (n < 0) return;
    var m = str.substring(n + 13, str.length);
    var eToken = m.split('&')[0];

    this.setState({token: eToken});
    this.props.getUserInfo(eToken);
  };

  render = () => {
    return (
      <View style={{flex: 1}}>
        <Loader
          loading={
            this.state.loading ||
            this.props.dashboard.loading ||
            this.props.profile.loading
          }
        />
        <WebView
          source={{uri: this.props.navigation.state.params.uri}}
          userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
          style={{marginTop: 20}}
          onNavigationStateChange={this._onNavigationStateChange.bind(this)}
          onLoadStart={() => this.showAndHideLoader(true)}
          onLoadEnd={() => this.showAndHideLoader(false)}
        />
      </View>
    );
  };
}

const mapStateToProps = ({extUserInfo, token, dashboard, profile}) => ({
  extUserInfo,
  token,
  dashboard,
  profile,
});
const mapDispatchToProps = dispatch => ({
  getUserInfo: eToken => dispatch(getUserInfo(eToken)),
  setExtToken: data => dispatch(setExtToken(data)),
  registerOnesignal: data => dispatch(registerOnesignal(data)),
  DashboardData: payload => dispatch(DashboardData(payload)),
  profileData: payload => dispatch(profileData(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
