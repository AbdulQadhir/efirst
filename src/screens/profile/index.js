import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, ScrollView} from 'react-native';
import UserDetail from './userdetails';
import ContactDetail from './contactdetails';
import PersonalDetail from './personaldetails';
import OfficeDetail from './officedetails';
import Loader from '../../styled/loader';
import AlertView from '../../styled/alert-view';
import {
  userConatctDetailCreate,
  userOfficeAddressCreate,
  userPersonalDetailCreate,
  userProfileCreate,
  profileData,
} from './action';
import {
  ButtonSlim,
  Underline,
  HeaderBtnMenu,
  HeaderBtnProfile,
  HeaderBtnBack,
} from '../../pages/uicomponents/components';
import {calcHeight, calcWidth} from '../../config';
class Container1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Manage Profile',
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

  componentDidUpdate(prevProps, prevState) {
    const {
      usercontactdetail,
      userofficeadress,
      userpersonaldetail,
      userprofile,
    } = this.props;

    const contsuccess = usercontactdetail.success;
    const contprevSuccess = prevProps.usercontactdetail.success;

    const offsuccess = userofficeadress.success;
    const offprevSuccess = prevProps.userofficeadress.success;

    const perssuccess = userpersonaldetail.success;
    const persprevSuccess = prevProps.userpersonaldetail.success;

    const profsuccess = userprofile.success;
    const profprevSuccess = prevProps.userprofile.success;

    if (
      (contsuccess && contsuccess != contprevSuccess) ||
      (offsuccess && offsuccess != offprevSuccess) ||
      (perssuccess && perssuccess != persprevSuccess) ||
      (profsuccess && profsuccess != profprevSuccess)
    ) {
      this.setState({success: true});
      this.props.profileData(this.props.token.token);
    }
  }
  render = () => {
    const {
      profile,
      usercontactdetail,
      userofficeadress,
      userpersonaldetail,
      userprofile,
    } = this.props;

    const loading =
      usercontactdetail.loading ||
      userofficeadress.loading ||
      userpersonaldetail.loading ||
      userprofile.loading ||
      profile.loading;

    const error =
      usercontactdetail.error ||
      userofficeadress.error ||
      userpersonaldetail.error ||
      userprofile.error ||
      profile.error;

    const success =
      usercontactdetail.success ||
      userofficeadress.success ||
      userpersonaldetail.success ||
      userprofile.success;

    const {
      userConatctDetailCreate,
      userOfficeAddressCreate,
      userPersonalDetailCreate,
      userProfileCreate,
      dashboard,
    } = this.props;
    console.log('Success==>', success);
    return (
      <View style={styles.body}>
        <View>
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always">
            <Loader loading={loading} />
            <UserDetail
              userdetail={this.props.userdetail}
              token={this.props.token}
              userProfileCreate={userProfileCreate}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: calcHeight(3),
              }}>
              <ButtonSlim
                label={`Open Services: ${
                  dashboard.data
                    ? dashboard.data.Tiles.InReviewNewUpdateCount +
                      dashboard.data.Tiles.InReviewTotalUpdateCount
                    : 0
                }`}
                style={{backgroundColor: '#47489f'}}
              />
              <ButtonSlim
                label={`Completed Services: ${
                  dashboard.data
                    ? dashboard.data.Tiles.CompletedNewUpdateCount +
                      dashboard.data.Tiles.CompletedTotalUpdateCount
                    : 0
                }`}
                style={{backgroundColor: '#008837'}}
              />
              <ButtonSlim
                label={`Rejected Services: ${
                  dashboard.data
                    ? dashboard.data.Tiles.RejectedNewUpdateCount +
                      dashboard.data.Tiles.RejectedTotalUpdateCount
                    : 0
                }`}
                style={{backgroundColor: '#ff0000'}}
              />
            </View>
            <Underline />
            <PersonalDetail
              personaldetail={this.props.personaldetail}
              token={this.props.token}
              userPersonalDetailCreate={userPersonalDetailCreate}
            />
            <ContactDetail
              contactdetail={this.props.contactdetail}
              token={this.props.token}
              userConatctDetailCreate={userConatctDetailCreate}
            />
            <OfficeDetail
              officedetail={this.props.officedetail}
              token={this.props.token}
              userOfficeAddressCreate={userOfficeAddressCreate}
            />
          </ScrollView>
        </View>
        {error && <AlertView type="error" />}
        {success && this.state.success && (
          <AlertView
            type="success"
            clearAlert={() => this.setState({success: false})}
          />
        )}
      </View>
    );
  };
}
const mapDispatchToProps = dispatch => ({
  profileData: payload => dispatch(profileData(payload)),
  userConatctDetailCreate: payload =>
    dispatch(userConatctDetailCreate(payload)),
  userOfficeAddressCreate: payload =>
    dispatch(userOfficeAddressCreate(payload)),
  userPersonalDetailCreate: payload =>
    dispatch(userPersonalDetailCreate(payload)),
  userProfileCreate: payload => dispatch(userProfileCreate(payload)),
});
const mapStateToProps = ({
  token,
  profile: {
    data: {userdetail, personaldetail, contactdetail, officedetail},
    ...profile
  },
  usercontactdetail,
  userofficeadress,
  userpersonaldetail,
  userprofile,
  dashboard,
}) => ({
  token,
  profile,
  userdetail,
  personaldetail,
  contactdetail,
  officedetail,
  usercontactdetail,
  userofficeadress,
  userpersonaldetail,
  userprofile,
  dashboard,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container1);

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    padding: calcWidth(3),

    backgroundColor: '#f8f9fc',
    justifyContent: 'center',
  },
});
