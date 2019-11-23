import React, {Component} from 'react';
import VisaServicePersonalScreen from './screen';
import {connect} from 'react-redux';
import {visaServiceCreate, activateSR, servicesData} from '../../action';
import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
} from '../../../../pages/uicomponents/components';
import {getPaymentDetail} from '../../../foloosi/action';
import Loader from '../../../../styled/loader';
import Toast, {DURATION} from 'react-native-easy-toast';
import {View} from 'react-native';
import AlertView from '../../../../styled/alert-view';
import { OFFER_CHK_URL, OFFER_ADD_URL } from "../../../../constants";
import DeviceInfo from 'react-native-device-info';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
      Requested: false,
      UpdatedSRAmount: false,
      SRAmount: '0',
      ShowTerms: false,
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Visa Service',
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnMenu onPress={() => navigation.openDrawer()} />
        <HeaderBtnBack onPress={() => navigation.goBack()} />
      </View>
    ),
    headerRight: (
      <HeaderBtnProfile onPress={() => navigation.navigate('Profile')} />
    ),
  });
  updateTotalAmount = totalBillAmt =>
    this.setState({totalBillAmt, Requested: true});
  setShowTerms = state => {
    this.setState({ShowTerms: state});
  };
  componentDidMount = () => {};

  async componentDidUpdate(prevProps) {
    if (this.props.visaservice.success && !prevProps.visaservice.success) {
      this.setState({Requested: false, UpdatedSRAmount: true});

      var SrId = this.props.visaservice.data.Result.SRID;
      const {UserId} = this.props.profile.data.userdetail;
      this.props.getPaymentDetail({
        token: this.props.token.token,
        SrId,
        Amount: this.state.totalBillAmt,
        UserId,
      });
    }

    if(this.props.srActivation.success && !prevProps.srActivation.success)
    {
      const uniqueID = DeviceInfo.getUniqueId();
        let response = await fetch(
          `${OFFER_ADD_URL}?email=${this.props.profile.data.contactdetail.Email}&device_id=${uniqueID}`,
        );


        const {token} = this.props.token;
        const statusId = null;
        this.props.servicesData({statusId, token});
        
        this.props.navigation.navigate('MyRequests', {
          headerTitle: 'My Requests',
          noDataLabel: 'No recent service request',
          statusId: null,
        });
    }

    if (this.props.paymentdetail.success && !prevProps.paymentdetail.success) {
      const {UserId} = this.props.profile.data.userdetail;
      var {Id} = this.props.paymentdetail.data;
      var {SRID} = this.props.visaservice.data.Result;
      if(this.state.totalBillAmt == 0)
      {
        this.props.activateSR({ token: this.props.token.token , SRID });
      }
      else
      {
        this.props.navigation.navigate('Foloosi', {
          Id,
          userid: UserId,
          srid: SRID,
        });
      }
    }
  }

  render = () => {
    const loading = this.props.visaservice.loading;
    const error = this.props.visaservice.error;

    return (
      <View style={{flex: 1}}>
        <Loader loading={loading} />
        <VisaServicePersonalScreen
          updateTotalAmount={this.updateTotalAmount}
          setRequestedValue={this.setRequestedValue}
          {...this.props}
          state={this.state}
          setShowTerms={this.setShowTerms}
        />
        {error && <AlertView type="error" />}
        {/* {success && <AlertView type="success" />} */}
      </View>
    );
  };
}
const mapStateToProps = ({
  docSRAmUpdation,
  profile,
  token,
  visaservice,
  paymentdetail,
  srActivation,
}) => ({
  docSRAmUpdation,
  profile,
  token,
  visaservice,
  paymentdetail,
  srActivation,
});
const mapDispatchToProps = dispatch => ({
  visaServiceCreate: payload => dispatch(visaServiceCreate(payload)),
  getPaymentDetail: payload => dispatch(getPaymentDetail(payload)),
  activateSR: payload => dispatch(activateSR(payload)),
  servicesData: payload => dispatch(servicesData(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
