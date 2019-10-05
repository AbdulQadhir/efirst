import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {getUserInfo, setExtToken} from '../action';
import Loader from '../../../styled/loader';
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
  }
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('headerTitle', 'www.facebook.com'),
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnBack onPress={() => navigation.navigate('Login')} />
      </View>
    ),
  });
  componentDidMount = () => {};
  showAndHideLoader = val => {
    console.log('On Load===>', val);
    this.setState({loading: val});
  };
  componentDidUpdate(prevProps) {
    console.log('this.props.token====>', this.props.token);
    if (this.props.token) {
      this.props.navigation.navigate('Home');
      return;
    }
    if (this.props.extUserInfo.success && !prevProps.extUserInfo.success) {
      if (!this.props.extUserInfo.data.HasRegistered)
        this.props.navigation.navigate('RegisterExternal', {
          token: this.state.token,
        });
      else {
        const {token} = this.state;
        const {Email} = this.props.extUserInfo.data;
        if (this.props.token) {
          this.props.navigation.navigate('Home');
          return;
        } else {
          this.props.setExtToken({access_token: token, username: Email});
        }
      }
    }
  }

  _onNavigationStateChange = webViewState => {
    console.log(webViewState.url);
    var str = webViewState.url;
    var n = str.search('access_token');
    if (n < 0) return;
    var m = str.substring(n + 13, str.length);
    var eToken = m.split('&')[0];
    console.log('Token : ' + eToken);
    this.setState({token: eToken});
    this.props.getUserInfo(eToken);
  };

  render = () => {
    return (
      <View style={{flex: 1}}>
        <Loader loading={this.state.loading} />
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

const mapStateToProps = ({extUserInfo, token}) => ({
  extUserInfo,
  token,
});
const mapDispatchToProps = dispatch => ({
  getUserInfo: eToken => dispatch(getUserInfo(eToken)),
  setExtToken: data => dispatch(setExtToken(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
