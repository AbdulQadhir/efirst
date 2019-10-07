import React, {Component} from 'react';
import VisaServicePersonalScreen from './screen';
import {connect} from 'react-redux';
import {visaServiceCreate} from '../../action';
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

  componentDidUpdate(prevProps) {
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

    if (this.props.paymentdetail.success && !prevProps.paymentdetail.success) {
      const {UserId} = this.props.profile.data.userdetail;
      var {Id} = this.props.paymentdetail.data;
      var {SRID} = this.props.visaservice.data.Result;
      this.props.navigation.navigate('Foloosi', {
        Id,
        userid: UserId,
        srid: SRID,
      });
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
}) => ({
  docSRAmUpdation,
  profile,
  token,
  visaservice,
  paymentdetail,
});
const mapDispatchToProps = dispatch => ({
  visaServiceCreate: payload => dispatch(visaServiceCreate(payload)),
  getPaymentDetail: payload => dispatch(getPaymentDetail(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
