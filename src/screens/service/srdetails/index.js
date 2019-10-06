import {serviceRequestData, sendOrReplyMessage} from '../action';
import PostMessage from './postmessage';
import {connect} from 'react-redux';
import Loader from '../../../styled/loader';
import AlertView from '../../../styled/alert-view';

import {StyleSheet, View, BackHandler, Dimensions} from 'react-native';

import {
  SRDetailsHdr,
  ButtonSlim,
  SRDtDate,
  SRTimeline,
} from '../../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';
import React, {Component} from 'react';
import Details from './details';
import Documents from './documents';
import Info from './info';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

import {calcHeight, calcWidth} from '../../../config';

import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
} from '../../../pages/uicomponents/components';

class ServiceDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SRID: 0,
      NoteID: 0,
      Title: null,
      IsVisible: false,
      MessageRequested: false,
      success: false,
      selectedTab: 1,
    };
    this.hideModal = this.hideModal.bind(this);
    this.MessageModal = this.MessageModal.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Service Details',
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnMenu onPress={() => navigation.openDrawer()} />
        <HeaderBtnBack onPress={() => navigation.navigate('MyRequests')} />
      </View>
    ),
    headerRight: (
      <HeaderBtnProfile onPress={() => navigation.navigate('Profile')} />
    ),
  });
  changeRequestMessageState = state => this.setState({MessageRequested: state});
  MessageModal = (SRID, NoteID, Title: any) => {
    this.setState({
      SRID,
      NoteID,
      Title,
      IsVisible: true,
    });
  };
  hideModal() {
    this.setState({
      IsVisible: false,
    });
  }
  componentDidUpdate(prevProps) {
    const {error, success, loading} = this.props.message;
    const {MessageRequested} = this.state;
    if (!error && !loading && success && MessageRequested) {
      this.changeRequestMessageState(false);
      const {srDetail, token} = this.props;
      const SRID = srDetail ? srDetail.SRID : 0;

      this.props.serviceRequestData({serviceId: SRID, token: token.token});
    }
    if (success && !prevProps.message.success) {
      this.setState({success: true});
    }
  }
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  setTab = tab => {
    this.setState({selectedTab: tab});
  };

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick() {
    this.props.navigation.navigate('MyRequests');
    return true;
  }
  render() {
    const {srDetail, loading, error, message, profile} = this.props;
    const dtError = error || message.error;
    const success = message.success;
    const SRID = srDetail ? srDetail.SRID : 0;

    return (
      <View style={styles.body}>
        <Loader loading={loading} />
        <PostMessage
          changeRequestMessageState={this.changeRequestMessageState}
          token={this.props.token}
          handle={this.hideModal}
          action={this.state}
          SendMessage={this.props.sendOrReplyMessage}
          profile={profile}
        />
        <View style={{flexDirection: 'column', padding: 20, flex: 1}}>
          <SRDetailsHdr label={srDetail ? srDetail.SRTitle : ''} />
          <SRDtDate
            label={srDetail ? srDetail.CreatedDate : ''}
            onRefresh={() => {
              const {token} = this.props;
              this.props.serviceRequestData({
                serviceId: SRID,
                token: token.token,
              });
            }}
            onChatPress={() => this.MessageModal(SRID, 0)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: calcWidth(1),
            }}>
            <ButtonSlim
              onPress={() => this.setTab(1)}
              label="Details"
              style={{
                backgroundColor:
                  this.state.selectedTab == 1 ? '#47489f' : '#f84563',
              }}
            />
            <ButtonSlim
              onPress={() => this.setTab(2)}
              label="Documents"
              style={{
                backgroundColor:
                  this.state.selectedTab == 2 ? '#47489f' : '#f84563',
              }}
            />
            <ButtonSlim
              onPress={() => this.setTab(3)}
              label="SR Details"
              style={{
                backgroundColor:
                  this.state.selectedTab == 3 ? '#47489f' : '#f84563',
              }}
            />
          </View>
          <View style={{flex: 1}}>
            {this.state.selectedTab == 1 ? (
              <Details MessageModal={this.MessageModal} />
            ) : (
              <View />
            )}
            {this.state.selectedTab == 2 ? <Documents /> : <View />}
            {this.state.selectedTab == 3 ? <Info /> : <View />}
          </View>
        </View>
        {dtError && (
          <AlertView
            type="error"
            message="Sorry! An error has occured, Try again"
          />
        )}
        {this.state.success && (
          <AlertView
            type="success"
            message="Message has been submitted successfully"
          />
        )}
      </View>
    );
  }
}

const styles = {
  body: {
    flex: 1,
    backgroundColor: '#f8f9fc',
  },
};

const mapStateToProps = ({
  servicerequest: {srDetail, loading, error},
  token,
  message,
  profile,
}) => ({
  srDetail,
  profile,
  loading,
  error,
  token,
  message,
});
const mapDispatchToProps = dispatch => ({
  serviceRequestData: payload => dispatch(serviceRequestData(payload)),
  sendOrReplyMessage: payload => dispatch(sendOrReplyMessage(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceDetails);
