import React, {Component} from 'react';
import LanguageTranslation from './screen';
import {connect} from 'react-redux';
import {
  getdoclanguage,
  documentationTypes,
  translationPrice,
  doclangTransCreate,
  servicesData,
  updAttestationSRAmt,
  activateSR
} from '../action';
import {View, BackHandler} from 'react-native';
import Loader from '../../../styled/loader';
import AlertView from '../../../styled/alert-view';
import Toast, {DURATION} from 'react-native-easy-toast';
import {getPaymentDetail} from '../../foloosi/action';
import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
} from '../../../pages/uicomponents/components';
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
    title: 'Translation Service',
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
  componentDidMount = () => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
    this.props.getdoclanguage(this.props.token.token);
    this.props.documentationTypes(this.props.token.token);
  };
  showToast = text => {
    this.refs.validationToasts.show(text, 3000);
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

  componentDidUpdate(prevProps) {
    if (
      this.props.langtranslation.success &&
      !prevProps.langtranslation.success
    ) {
      this.setState({Requested: false, UpdatedSRAmount: true});

      var SrId = this.props.langtranslation.data.SRID;
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
      this.props.navigation.navigate('MyRequests', {
        headerTitle: 'My Requests',
        noDataLabel: 'No recent service request',
        statusId: null,
      });
    }

    if (this.props.paymentdetail.success && !prevProps.paymentdetail.success) {
      const {UserId} = this.props.profile.data.userdetail;
      var {Id} = this.props.paymentdetail.data;
      var {SRID} = this.props.langtranslation.data;
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
      documentlanguage,
      translationrate,
      documenttypes,
      token,
      langtranslation,
    } = this.props;

    const loading =
      documentlanguage.loading ||
      documenttypes.loading ||
      langtranslation.loading;

    const error =
      documentlanguage.error ||
      translationrate.error ||
      documenttypes.error ||
      langtranslation.error;

    const success = langtranslation.success;
    return (
      <View style={{flex: 1}}>
        <Loader loading={loading} />
        <LanguageTranslation
          showToast={this.showToast}
          setRequestedValue={this.setRequestedValue}
          {...this.props}
          state={this.state}
          setShowTerms={this.setShowTerms}
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
  documentlanguage,
  translationrate,
  documenttypes,
  token,
  profile,
  langtranslation,
  docSRAmUpdation,
  paymentdetail,
  srActivation,
}) => ({
  documentlanguage,
  translationrate,
  documenttypes,
  token,
  profile,
  langtranslation,
  docSRAmUpdation,
  paymentdetail,
  srActivation,
});
const mapDispatchToProps = dispatch => ({
  translationPrice: payload => dispatch(translationPrice(payload)),
  getdoclanguage: payload => dispatch(getdoclanguage(payload)),
  documentationTypes: payload => dispatch(documentationTypes(payload)),
  doclangTransCreate: payload => dispatch(doclangTransCreate(payload)),
  servicesData: payload => dispatch(servicesData(payload)),
  updAttestationSRAmt: payload => dispatch(updAttestationSRAmt(payload)),
  getPaymentDetail: payload => dispatch(getPaymentDetail(payload)),
  activateSR: payload => dispatch(activateSR(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
