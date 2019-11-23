import React, {Component} from 'react';
import DocumentAttestation from './screen';
import {connect} from 'react-redux';
import {
  countries,
  getcertificateType,
  attestationPrice,     
  docAttestationCreate, 
  servicesData,
  updAttestationSRAmt,
  activateSR
} from '../action';
import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile, 
} from '../../../pages/uicomponents/components';
import {getPaymentDetail} from '../../foloosi/action';
import Loader from '../../../styled/loader';
import Toast, {DURATION} from 'react-native-easy-toast';
import {View, BackHandler} from 'react-native';
import AlertView from '../../../styled/alert-view';
import { OFFER_CHK_URL, OFFER_ADD_URL } from "../../../constants";
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
      offerUsed: false
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Attestation Service',
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
  
  setRequestedValue = amount => {
    this.setState({Requested: true, SRAmount: amount});
  };
  setShowTerms = state => {
    this.setState({ShowTerms: state});
  };
  async componentDidMount(){
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
    this.props.getCountries(this.props.token.token);
    this.props.getcertificateType(this.props.token.token);
    
    try {
      const uniqueID = DeviceInfo.getUniqueId();
      let response = await fetch(
        `${OFFER_CHK_URL}?email=${this.props.profile.data.contactdetail.Email}&device_id=${uniqueID}`,
      );
      let responseJson = await response.json();
      
      if(responseJson.result)
        this.setState({offerUsed: true})
      else
        this.setState({offerUsed: false})

    } catch (error) {
      alert(error)
    }
  };
  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick = () => {
    this.props.navigation.goBack();
    return true;
  };

  showToast = text => {
    this.refs.validationToasts.show(text, 3000);
  };
  
  async componentDidUpdate(prevProps) {
    if (
      this.props.documentattestation.success &&
      !prevProps.documentattestation.success
    ) {
      this.setState({Requested: false, UpdatedSRAmount: true});
      var SrId = this.props.documentattestation.data.SRID;
      const {UserId} = this.props.profile.data.userdetail;
      this.props.getPaymentDetail({
        token: this.props.token.token,
        SrId,
        Amount: this.state.SRAmount,
        UserId,
      });
    }

    if(this.props.srActivation.success && !prevProps.srActivation.success)
    {
      const uniqueID = DeviceInfo.getUniqueId();
      let response = await fetch(
        `${OFFER_ADD_URL}?email=${this.props.profile.data.contactdetail.Email}&device_id=${uniqueID}`,
      );

      this.props.navigation.navigate('MyRequests', {
        headerTitle: 'My Requests',
        noDataLabel: 'No recent service request',
        statusId: null,
      });
    }

    if (this.props.paymentdetail.success && !prevProps.paymentdetail.success) {
      const {UserId} = this.props.profile.data.userdetail;
      var {Id} = this.props.paymentdetail.data;
      var {SRID} = this.props.documentattestation.data;
      if(this.state.SRAmount == 0)
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
    const {
      countries,
      certificatetype,
      attestationrate,
      documentattestation,
      profile,
    } = this.props;

    const loading =
      documentattestation.loading ||
      countries.loading ||
      certificatetype.loading;
    // attestationrate.loading;

    const error =
      documentattestation.error ||
      countries.error ||
      certificatetype.error ||
      attestationrate.error;

    const success = documentattestation.success;
    return (
      <View style={{flex: 1}}>
        <Loader loading={loading} />
        <DocumentAttestation
          showToast={this.showToast}
          setRequestedValue={this.setRequestedValue}
          {...this.props}
          state={this.state}
          setShowTerms={this.setShowTerms}
          offerUsed={this.state.offerUsed}
        />
        <Toast
          ref="validationToasts"
          style={{
            backgroundColor: '#d12626',
            bottom: 25,
          }}
          position="bottom"
        />
        {error && <AlertView type="error" />}
        {/* {success && <AlertView type="success" />} */}
      </View>
    );
  };
}
const mapStateToProps = ({
  countries,
  certificatetype,
  attestationrate,
  documentattestation,
  docSRAmUpdation,
  profile,
  token,
  srActivation,
  paymentdetail
}) => ({
  countries,
  certificatetype,
  attestationrate,
  documentattestation,
  docSRAmUpdation,
  profile,
  token,
  srActivation,
  paymentdetail
});

const mapDispatchToProps = dispatch => ({
  attestationPrice: payload => dispatch(attestationPrice(payload)),
  getCountries: payload => dispatch(countries(payload)),
  getcertificateType: payload => dispatch(getcertificateType(payload)),
  docAttestationCreate: payload => dispatch(docAttestationCreate(payload)),
  servicesData: payload => dispatch(servicesData(payload)),
  updAttestationSRAmt: payload => dispatch(updAttestationSRAmt(payload)),
  getPaymentDetail: payload => dispatch(getPaymentDetail(payload)),
  activateSR: payload => dispatch(activateSR(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
