import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Linking,
  Clipboard,
  Text,
} from 'react-native';

import {connect} from 'react-redux';
// import VisaServiceDt from './visaservicedt';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ClipboardIcon from 'react-native-vector-icons/MaterialIcons';

import {Input2} from '../../../pages/uicomponents/components';
import Ionicons from 'react-native-vector-icons/AntDesign';

import {calcHeight, calcWidth} from '../../../config';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

class SRInfo extends Component {
  certtificateTypeName = SelectedCertificateType => {
    console.log('certificateParams =>', SelectedCertificateType);
    const {certificatetype} = this.props;
    const selectCertType = certificatetype.data.filter(
      cert => cert.CertificateTypeID == SelectedCertificateType,
    );
    if (selectCertType.length > 0) {
      return selectCertType[0].CertificateTypeName;
    } else {
      return '';
    }
  };

  countryName = SelectedCountryId => {
    const {countries} = this.props;
    const selectCountry = countries.data.filter(
      country => country.CountryID == SelectedCountryId,
    );
    if (selectCountry.length > 0) {
      return selectCountry[0].CountryName;
    } else {
      return '';
    }
  };

  documentTypesName = documentTypeId => {
    const {documenttypes} = this.props;
    const selectDocumentType = documenttypes.data.filter(
      doc => doc.DocumentTypeId == documentTypeId,
    );
    if (selectDocumentType.length > 0) {
      return selectDocumentType[0].DocumentTypeName;
    } else {
      return '';
    }
  };

  languageName = languageId => {
    const {documentlanguage} = this.props;
    const selectedLanguage = documentlanguage.data.filter(
      lang => lang.LanguageID == languageId,
    );
    if (selectedLanguage.length > 0) {
      return selectedLanguage[0].LanguageName;
    } else {
      return '';
    }
  };
  writeToClipboard = async text => {
    await Clipboard.setString(text.toString());
    alert('Copied to Clipboard!');
  };
  render() {
    const {
      srInfo: {
        CustomerName,
        Email,
        PersonalPhone,
        OfficePhone,
        Address,
        TotalRate,
        SelectedCountryId,
        SelectedCertificateType,
        SelectedDocumentTypeId,
        SelectedFromDocumentLanguageId,
        SelectedToDocumentLanguageId,
      },
      srDetail: {TrackingNo},
    } = this.props;

    const pageData = this.props.srInfo.PageData || null;
    const ServiceName = this.props.srInfo.Service
      ? this.props.srInfo.Service.ServiceName
      : this.props.srDetail.ServiceName;
    const legalStamp = this.props.srInfo.LegalStamp
      ? this.props.srInfo.LegalStamp
      : false;
    const PickUpandDropOption = this.props.srInfo.PickUpandDropOption
      ? this.props.srInfo.PickUpandDropOption
      : '';
    const {ThruCourier} = this.props.srDetail;
    console.log('PICKUP==>', PickUpandDropOption);
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <>
          <View style={styles.body}>
            <View style={{flexDirection: 'column', padding: calcWidth(3)}}>
              <Input2 editable={false} value={`Name: ${CustomerName}`} />
              <Input2
                editable={false}
                value={`Email: ${Email}`}
                style={{borderColor: '#8d847d'}}
                multiline={true}
                scrollEnabled={false}
              />

              <Input2
                editable={false}
                value={`Phone: ${PersonalPhone}`}
                style={{borderColor: '#8d847d'}}
                multiline={true}
                scrollEnabled={false}
              />
              <Input2
                editable={false}
                value={`Office: ${OfficePhone}`}
                style={{borderColor: '#8d847d'}}
                multiline={true}
                scrollEnabled={false}
              />

              <Input2
                editable={false}
                value={`Address: ${Address}`}
                style={{borderColor: '#8d847d'}}
                multiline={true}
                scrollEnabled={false}
              />

              {ServiceName === 'ATTESTATION SERVICE' && (
                <Input2
                  editable={false}
                  value={`Country: ${
                    this.props.countries.data
                      ? this.countryName(SelectedCountryId)
                      : ''
                  }`}
                  style={{borderColor: '#8d847d'}}
                  multiline={true}
                  scrollEnabled={false}
                />
              )}
              {ServiceName === 'ATTESTATION SERVICE' && (
                <Input2
                  editable={false}
                  value={`Certificate Type: ${
                    this.props.certificatetype.data
                      ? this.certtificateTypeName(SelectedCertificateType)
                      : ''
                  }`}
                  style={{borderColor: '#8d847d'}}
                  multiline={true}
                  scrollEnabled={false}
                />
              )}

              {(ServiceName === 'TRANSLATION SERVICE' ||
                ServiceName == 'TRANSLATION') && (
                <Input2
                  editable={false}
                  value={`Document Type: ${
                    this.props.certificatetype.data
                      ? this.documentTypesName(SelectedDocumentTypeId)
                      : ''
                  }`}
                  style={{borderColor: '#8d847d'}}
                  multiline={true}
                  scrollEnabled={false}
                />
              )}

              {(ServiceName === 'TRANSLATION SERVICE' ||
                ServiceName == 'TRANSLATION') && (
                <Input2
                  editable={false}
                  value={`Document Language: ${
                    this.props.certificatetype.data
                      ? this.languageName(SelectedFromDocumentLanguageId)
                      : ''
                  }`}
                  style={{borderColor: '#8d847d'}}
                  multiline={true}
                  scrollEnabled={false}
                />
              )}

              {(ServiceName === 'TRANSLATION SERVICE' ||
                ServiceName == 'TRANSLATION') && (
                <Input2
                  editable={false}
                  value={`Document to be Translated: ${
                    this.props.certificatetype.data
                      ? this.languageName(SelectedToDocumentLanguageId)
                      : ''
                  }`}
                  style={{borderColor: '#8d847d'}}
                  multiline={true}
                  scrollEnabled={false}
                />
              )}
              {ServiceName === 'ATTESTATION SERVICE' && (
                <Input2
                  editable={false}
                  value={`Pick Up & Drop Option: ${PickUpandDropOption}`}
                  style={{borderColor: '#8d847d'}}
                  multiline={true}
                  scrollEnabled={false}
                />
              )}

              {(ServiceName === 'TRANSLATION SERVICE' ||
                ServiceName == 'TRANSLATION') &&
                legalStamp == true && (
                  <Input2
                    editable={false}
                    value={`Legal Stamp: ${legalStamp == true ? 'Yes' : 'No'}`}
                    style={{borderColor: '#8d847d'}}
                    multiline={true}
                    scrollEnabled={false}
                  />
                )}

              {(ServiceName === 'TRANSLATION SERVICE' ||
                ServiceName == 'TRANSLATION') && (
                <Input2
                  editable={false}
                  value={`Pick Up & Drop Option: ${PickUpandDropOption}`}
                  style={{borderColor: '#8d847d'}}
                  multiline={true}
                  scrollEnabled={false}
                />
              )}

              {ServiceName === 'ATTESTATION SERVICE' &&
                PickUpandDropOption == 'Through Courier' && (
                  <View
                    style={{
                      flexDirection: 'row',

                      borderBottomWidth: 1,
                      borderColor: '#999999',
                      marginHorizontal: calcWidth(2),
                      paddingHorizontal: calcWidth(1),
                      marginTop: calcHeight(2),
                      marginBottom: calcHeight(0.5),
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Light',
                        fontSize: RFPercentage(2),
                        color: '#8d847d',
                      }}>
                      Shipment Tracking No :{' '}
                      <Text
                        onPress={() =>
                          Linking.openURL(
                            'https://track.easypick.me/track-shipment',
                          )
                        }
                        style={{
                          fontFamily: 'Montserrat-Light',
                          fontSize: RFPercentage(2),
                          color: '#337ab7',
                          //  textDecorationLine: 'underline',
                        }}>
                        {TrackingNo}
                      </Text>
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: calcWidth(30),
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                      }}
                      onPress={() => this.writeToClipboard(TrackingNo)}>
                      <ClipboardIcon
                        name="content-copy"
                        size={23}
                        color="#8d847d"
                        style={{marginRight: 2}}
                      />
                    </TouchableOpacity>
                  </View>
                )}

              {ServiceName === 'VISA SERVICE' && ThruCourier && (
                <View
                  style={{
                    flexDirection: 'row',

                    borderBottomWidth: 1,
                    borderColor: '#999999',
                    marginHorizontal: calcWidth(2),
                    paddingHorizontal: calcWidth(1),
                    marginTop: calcHeight(2),
                    marginBottom: calcHeight(0.5),
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Light',
                      fontSize: RFPercentage(2),
                      color: '#8d847d',
                    }}>
                    Shipment Tracking No :{' '}
                    <Text
                      onPress={() =>
                        Linking.openURL(
                          'https://track.easypick.me/track-shipment',
                        )
                      }
                      style={{
                        fontFamily: 'Montserrat-Light',
                        fontSize: RFPercentage(2),
                        color: '#337ab7',
                        //  textDecorationLine: 'underline',
                      }}>
                      {TrackingNo}
                    </Text>
                  </Text>

                  <TouchableOpacity
                    style={{
                      width: calcWidth(30),
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                    }}
                    onPress={() => this.writeToClipboard(TrackingNo)}>
                    <ClipboardIcon
                      name="content-copy"
                      size={23}
                      color="#8d847d"
                      style={{marginRight: 2}}
                    />
                  </TouchableOpacity>
                </View>
              )}
              {ServiceName != 'VISA SERVICE' && (
                <Input2
                  editable={false}
                  value={`Bill Amount: ${TotalRate}AED`}
                  style={{borderColor: '#8d847d'}}
                  multiline={true}
                  scrollEnabled={false}
                />
              )}
            </View>
          </View>
        </>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

const mapStateToProps = ({
  servicerequest: {srInfo, srDetail},
  certificatetype,
  countries,
  documenttypes,
  documentlanguage,
}) => ({
  srInfo,
  srDetail,
  certificatetype,
  countries,
  documenttypes,
  documentlanguage,
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SRInfo);
