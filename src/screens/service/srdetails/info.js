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
  constructor(props) {
    super(props);
    this.state = {
      totalBillAmt: 0,
      courier_charge: 10,
    };
  }

  certtificateTypeName = SelectedCertificateType => {
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

  renderPageData = pageData => {
    return pageData.map(datum => {
      return (
        datum['Text'] != 'Documents and Payment Collection' && (
          <Input2
            editable={false}
            value={`${datum['Value']}`}
            style={{borderColor: '#8d847d'}}
            multiline={true}
            scrollEnabled={false}
          />
        )
      );
    });
  };

  renderDocsData = pageData => {
    const docsAndPayment = pageData[pageData.length - 1];
    return docsAndPayment.Documents.map(datum => {
      return (
        datum.Text != 'Documents and Payment Collection' && (
          <Input2
            editable={false}
            value={`${datum.Text}: ${datum.FileUploaded}`}
            style={{borderColor: '#8d847d'}}
            multiline={true}
            scrollEnabled={false}
          />
        )
      );
    });
  };

  renderPriceDts = pageData => {
    const docsAndPayment = pageData[pageData.length - 1];
    return docsAndPayment.PriceDetils.map(datum => {
      return (
        <Input2
          editable={false}
          value={`${datum.Text}: AED ${datum.Value}`}
          style={{borderColor: '#8d847d'}}
          multiline={true}
          scrollEnabled={false}
        />
      );
    });
  };

  renderTotalPrice = pageData => {
    const docsAndPayment = pageData[pageData.length - 1];
    let total = docsAndPayment.PriceDetils.reduce(
      (accumulator, item) => accumulator + parseFloat(item.Value),
      0,
    );
    if (
      docsAndPayment.OriginalDocumentSubmissionType.Value == 'Through Courier'
    )
      total += 10;
    return (
      <Input2
        editable={false}
        value={`Total: AED ${total}`}
        style={{borderColor: '#8d847d'}}
        multiline={true}
        scrollEnabled={false}
      />
    );
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
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <>
          <View style={styles.body}>
            <View
              style={{flexDirection: 'column', paddingVertical: calcHeight(1)}}>
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
                ServiceName == 'TRANSLATION') && (
                <Input2
                  editable={false}
                  value={`Legal Stamp: ${legalStamp == true ? 'Yes' : 'No'}`}
                  style={{borderColor: '#8d847d'}}
                  multiline={true}
                  scrollEnabled={false}
                />
              )}

              {(ServiceName === 'TRANSLATION SERVICE' ||
                ServiceName == 'TRANSLATION') &&
                legalStamp && (
                  <Input2
                    editable={false}
                    value={`Pick Up & Drop Option: ${PickUpandDropOption}`}
                    style={{borderColor: '#8d847d'}}
                    multiline={true}
                    scrollEnabled={false}
                  />
                )}

              {ServiceName === 'TRANSLATION SERVICE' &&
                PickUpandDropOption == 'Through Courier' &&
                legalStamp && (
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      borderBottomWidth: 1,
                      borderColor: '#999999',
                      marginHorizontal: calcWidth(2),
                      paddingLeft: calcWidth(1),
                      marginTop: calcHeight(2),
                      marginBottom: calcHeight(0.5),
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Light',
                        fontSize: RFPercentage(2),
                        color: '#081344',
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
                        }}>
                        {TrackingNo}
                      </Text>
                    </Text>
                    <View
                      style={{
                        flex: 1,
                      }}>
                      <TouchableOpacity
                        style={{
                          alignItems: 'flex-end',
                        }}
                        onPress={() => this.writeToClipboard(TrackingNo)}>
                        <ClipboardIcon
                          name="content-copy"
                          size={RFValue(22)}
                          color="#081344"
                          style={{marginRight: 2}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}

              {ServiceName === 'ATTESTATION SERVICE' &&
                PickUpandDropOption == 'Through Courier' && (
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      borderBottomWidth: 1,
                      borderColor: '#999999',
                      marginHorizontal: calcWidth(2),
                      paddingLeft: calcWidth(1),
                      marginTop: calcHeight(2),
                      marginBottom: calcHeight(0.5),
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Light',
                        fontSize: RFPercentage(2),
                        color: '#081344',
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
                        }}>
                        {TrackingNo}
                      </Text>
                    </Text>
                    <View
                      style={{
                        flex: 1,
                      }}>
                      <TouchableOpacity
                        style={{
                          alignItems: 'flex-end',
                        }}
                        onPress={() => this.writeToClipboard(TrackingNo)}>
                        <ClipboardIcon
                          name="content-copy"
                          size={RFValue(22)}
                          color="#081344"
                          style={{marginRight: 2}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}

              {ServiceName === 'VISA SERVICE' && ThruCourier && (
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    borderBottomWidth: 1,
                    borderColor: '#999999',
                    marginHorizontal: calcWidth(2),
                    paddingLeft: calcWidth(1),
                    marginTop: calcHeight(2),
                    marginBottom: calcHeight(0.5),
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Light',
                      fontSize: RFPercentage(2),
                      color: '#081344',
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
                      }}>
                      {TrackingNo}
                    </Text>
                  </Text>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <TouchableOpacity
                      style={{
                        alignItems: 'flex-end',
                      }}
                      onPress={() => this.writeToClipboard(TrackingNo)}>
                      <ClipboardIcon
                        name="content-copy"
                        size={RFValue(22)}
                        color="#081344"
                        style={{marginRight: 2}}
                      />
                    </TouchableOpacity>
                  </View>
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

              {pageData && (
                <View>
                  {this.renderPageData(pageData)}
                  {pageData[pageData.length - 1].IBANNumber &&
                    pageData[pageData.length - 1].IBANNumber.value != '' && (
                      <Input2
                        editable={false}
                        value={pageData[pageData.length - 1].IBANNumber.value}
                        style={{borderColor: '#8d847d'}}
                        multiline={true}
                        scrollEnabled={false}
                      />
                    )}
                  {pageData[pageData.length - 1].AdditionalNotes &&
                    pageData[pageData.length - 1].AdditionalNotes.value !=
                      '' && (
                      <Input2
                        editable={false}
                        value={
                          pageData[pageData.length - 1].AdditionalNotes.value
                        }
                        style={{borderColor: '#8d847d'}}
                        multiline={true}
                        scrollEnabled={false}
                      />
                    )}
                  {this.renderDocsData(pageData)}
                  {this.renderPriceDts(pageData)}
                  {pageData[pageData.length - 1].OriginalDocumentSubmissionType
                    .Value == 'Through Courier' ? (
                    <Input2
                      editable={false}
                      value={`Courier Charge: AED ${this.state.courier_charge}`}
                      style={{borderColor: '#8d847d'}}
                      multiline={true}
                      scrollEnabled={false}
                    />
                  ) : (
                    <View />
                  )}
                  {this.renderTotalPrice(pageData)}
                </View>
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
