import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions, Text} from 'react-native';

import {
  Input2,
  ErrorLabel,
  RadioButton,
  TxtSubHead,
  PriceDetailItem,
  TxtTotalAmount,
  TxtAgreement,
  ButtonNormal,
  SelectFile,
  ModalPickerItem,
  UploadValdation,
  UploadTitle,
  CheckBoxCustom,
  styles,
} from '../../../pages/uicomponents/components';

import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationActions} from 'react-navigation';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import TermsandConditon from '../../../styled/TermsAndCondition';
// import TermsandConditon from '../../termsandcondition';

import Modal from 'react-native-modal';
import ModalPicker from '../../../pages/uicomponents/ModalPicker';
import {calcHeight, calcWidth} from '../../../config';
import PhoneInput from '../../../styled/react-native-phone-input/lib';
import CountryPicker from '../../../styled/react-native-country-picker-modal/src/CountryPicker';
import closeImgLight from '../../../Assets/close-btn.png';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
import {validateFileTypeAndSizeForTranslation} from '../../../constants';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';

const DARK_COLOR = '#18171C';
const LIGHT_COLOR = '#FFF';

const darkTheme = StyleSheet.create({
  modalContainer: {
    backgroundColor: DARK_COLOR,
  },
  contentContainer: {
    backgroundColor: DARK_COLOR,
  },
  header: {
    backgroundColor: DARK_COLOR,
  },
  itemCountryName: {
    borderBottomWidth: 0,
  },
  countryName: {
    color: LIGHT_COLOR,
  },
  letterText: {
    color: LIGHT_COLOR,
  },
  input: {
    color: LIGHT_COLOR,
    borderBottomWidth: 1,
    borderColor: LIGHT_COLOR,
  },
});
let phone = null;
const DocumentAttestation = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  countries,
  certificatetype,
  attestationrate,
  token,
  attestationPrice,
  navigation,
  setShowTerms,
  showToast,
  state,
  offerUsed
}) => {
  let countryPicker = null;
  let statePicker = null;
  let issuedCountryPicker = null;
  let certficatePicker = null;
  const openlaunchCamera = i => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
    };
    try {
      ImagePicker.showImagePicker(options, response => {
        if (response.didCancel) {
        } else if (response.error) {
        } else if (response.customButton) {
        } else {
          let source = {uri: response.uri};
          let imgName = response.fileName;
          if (Platform.OS === 'ios') {
            var getFilename = response.uri.split('/');
            imgName = getFilename[getFilename.length - 1];
          }

          const pic =
            Platform.OS === 'ios'
              ? {
                  uri: response.uri,
                  type: response.type,
                  name: imgName,
                }
              : {
                  uri: response.uri,
                  type: response.type,
                  name: imgName,
                };
          var files = values.Files;
          if (i == 0) files.push(pic);
          else files[i] = pic;
          setFieldValue('Files', files);

          return;
        }
      });
    } catch (err) {
      alert(err);
    }
  };

  const openFile = async i => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      if (res) {
        const {name, size} = res;
        const valdateRes = validateFileTypeAndSizeForTranslation({
          fileName: name,
          fileSize: size,
        });
        if (valdateRes.validateSize && valdateRes.validateType) {
          const file = {
            uri: res.uri,
            type: res.type,
            name: res.name,
          };
          var files = values.Files;
          if (i == 0) files.push(file);
          else files[i] = file;
          setFieldValue('Files', files);
        } else {
          showToast('- Invalid file type.\n- File must be smaller than 5 MB');
        }
      }
    } catch (err) {}
  };

  const checkPhoneValid = () => {
    setPhoneError('');
    if (!phone.isValidNumber()) {
      setPhoneError('Invalid Format');
      //return;
    }
    if (values.Files.length === 0) {
      setFieldValue('errorFileUpload', 'Passport or Emirates ID is Required');
    } else {
      setFieldValue('errorFileUpload', null);
    }
    handleSubmit();
  };
  componentDidUpdate = () => {};

  const attestationRateByCountryandDCType = (CountryId, CertificateType) => {
    if (CountryId && CertificateType) {
      attestationPrice({
        CountryId: CountryId,
        CertificateType: CertificateType,
        token: token.token,
      });
    }
  };

  navigateToScreen = route => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    navigation.dispatch(navigateAction);
  };

  const onPressFlag = () => {
    countryPicker.openModal();
  };

  selectCountry = country => {
    phone.selectCountry(country.cca2.toLowerCase());
    setFieldValue('cca2', country.cca2);
    setFieldValue('callingCode', country.callingCode);
    setFieldValue('PersonalPhone', `+${country.callingCode}`);
  };

  const setPhoneError = msg => {
    setFieldValue('errorPhone', msg);
  };
  const states = [
    {name: 'Ajman'},
    {name: 'Abu Dhabi'},
    {name: 'Al Fujairah'},
    {name: 'Dubai'},
    {name: 'Sharjah'},
    {name: 'Ras Al Khaima'},
    {name: 'Umm Al Qwain'},
  ];

  const removeFile = i => {
    var files = values.Files;
    if (i > -1) files.splice(i, 1);
    setFieldValue('Files', files);
  };

  const renderDocNew = () => {
    return (
      <SelectFile
        subTitle={'Select File'}
        onLeftPress={() => openlaunchCamera(0)}
        onRightPress={() => openFile(0)}
      />
    );
  };

  const renderDocArr = () => {
    return values.Files ? (
      values.Files.map((doc, index) => {
        return (
          <SelectFile
            subTitle={doc.name || 'Select File'}
            onLeftPress={() => openlaunchCamera(index)}
            onRightPress={() => openFile(index)}
            onDelPress={() => removeFile(index)}
          />
        );
      })
    ) : (
      <View />
    );
  };

  return (
    <View style={eStyles.body}>
      <Modal
        style={{top: calcHeight(5), marginBottom: calcHeight(7)}}
        isVisible={state.ShowTerms}>
        <ScrollView>
          <View style={{flex: 1, backgroundColor: '#ffff'}}>
            <TermsandConditon setShowTerms={setShowTerms} />
          </View>
        </ScrollView>
      </Modal>
      <View>
        <ScrollView
          contentContainerStyle={eStyles.container}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <Input2
            placeholder="Name*"
            name="CustomerName"
            label="Name *"
            onChangeText={value => setFieldValue('CustomerName', value)}
            value={values.CustomerName}
          />
          {errors.CustomerName && <ErrorLabel label={errors.CustomerName} />}

          <Input2
            placeholder="Email*"
            name="Email"
            label="Email *"
            onChangeText={value => setFieldValue('Email', value)}
            value={values.Email}
          />
          {errors.Email && <ErrorLabel label={errors.Email} />}

          <CountryPicker
            ref={ref => {
              countryPicker = ref;
            }}
            onChange={value => selectCountry(value)}
            translation="eng"
            // cca2={values.cca2}
            eStyles={darkTheme}
            hideAlphabetFilter={true}
            closeButtonImage={closeImgLight}
            closeable={true}>
            <View />
          </CountryPicker>
          <PhoneInput
            ref={ref => {
              phone = ref;
            }}
            style={{
              marginHorizontal: calcHeight(1),
              marginVertical: calcHeight(1.3),
            }}
            textStyle={[
              {
                fontSize: RFValue(14),
                paddingVertical: calcHeight(1),
                paddingHorizontal: calcWidth(1.5),
                color: '#081344',
                paddingHorizontal: calcHeight(0.8),
                fontFamily: 'Montserrat-Light',
              },
            ]}
            // textComponent={Input}
            onPressFlag={onPressFlag}
            editable={true}
            placeholder="Mobile *"
            name="PersonalPhone"
            label="Mobile *"
            keyboardType="numeric"
            onChangePhoneNumber={value => setFieldValue('PersonalPhone', value)}
            value={values.PersonalPhone}
          />
          {values.errorPhone != '' && <ErrorLabel label="Invalid Phone" />}
          {errors.PersonalPhone && <ErrorLabel label="Required" />}
          <Input2
            placeholder="Land Phone"
            name="Office"
            label="Land Phone"
            keyboardType="numeric"
            onChangeText={value => setFieldValue('OfficePhone', value)}
            value={values.OfficePhone}
          />
          {/* <ErrorLabel label="Required" /> */}

          <Input2
            placeholder="Address Line 1*"
            name="Address1"
            label="Address Line 1 *"
            onChangeText={value => setFieldValue('Address1', value)}
            value={values.Address1}
          />
          {errors.Address1 && <ErrorLabel label={errors.Address1} />}

          <Input2
            placeholder="Street Address*"
            placeholder="Street Address *"
            underline
            name="Street"
            label="Street Address *"
            onChangeText={value => setFieldValue('Street', value)}
            value={values.Street}
          />
          {errors.Street && <ErrorLabel label={errors.Street} />}

          <ModalPicker
            placeholder="State*"
            ref={ref => {
              statePicker = ref;
            }}
            onChange={value => setFieldValue('SelectedState', value)}>
            {states.map((state, index) => (
              <ModalPickerItem
                onPress={() => statePicker.onSelect(state.name, state.name)}
                label={state.name}
              />
            ))}
          </ModalPicker>
          {errors.SelectedState && <ErrorLabel label={errors.SelectedState} />}

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              marginVertical: calcHeight(0.7),
              marginHorizontal: calcWidth(1.5),
              borderColor: '#999999',
            }}>
            <View style={{flex: 1, marginBottom: -calcHeight(0.8)}}>
              <Input2
                placeholder="City*"
                noBorder={true}
                name="City"
                label="City *"
                onChangeText={value => setFieldValue('City', value)}
                value={values.City}
              />
            </View>
            <View style={{flex: 1, marginBottom: -calcHeight(0.8)}}>
              <Input2
                placeholder="PO Box"
                noBorder={true}
                name="Zip"
                label="PO Box"
                onChangeText={value => setFieldValue('Zip', value)}
                value={values.Zip}
              />
            </View>
          </View>
          {errors.City && <ErrorLabel label={errors.City} />}

          <Input2
            placeholder="Country*"
            name="AddressCountry"
            label="Country *"
            onChangeText={value => setFieldValue('AddressCountry', value)}
            value={values.AddressCountry}
            editable={false}
          />
          {errors.AddressCountry && (
            <ErrorLabel label={errors.AddressCountry} />
          )}

          <ModalPicker
            placeholder="Certificate Issued Country*"
            ref={ref => {
              issuedCountryPicker = ref;
            }}
            onChange={value => {
              setFieldValue('SelectedCountryId', value);
              attestationRateByCountryandDCType(
                value,
                values.SelectedCertificateType,
              );
            }}>
            {countries.data.map((country, index) => (
              <ModalPickerItem
                onPress={() =>
                  issuedCountryPicker.onSelect(
                    country.CountryName,
                    country.CountryID,
                  )
                }
                label={country.CountryName}
              />
            ))}
          </ModalPicker>
          {errors.SelectedCountryId && (
            <ErrorLabel label={errors.SelectedCountryId} />
          )}

          <ModalPicker
            placeholder="Certificate Type*"
            ref={ref => {
              certficatePicker = ref;
            }}
            onChange={value => {
              setFieldValue('SelectedCertificateType', value);
              attestationRateByCountryandDCType(
                values.SelectedCountryId,
                value,
              );
            }}>
            {certificatetype.data.map((cert, index) => (
              <ModalPickerItem
                onPress={() =>
                  certficatePicker.onSelect(
                    cert.CertificateTypeName,
                    cert.CertificateTypeID,
                  )
                }
                label={cert.CertificateTypeName}
              />
            ))}
          </ModalPicker>
          {errors.SelectedCertificateType && (
            <ErrorLabel label={errors.SelectedCertificateType} />
          )}
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#999999',
              flexDirection: 'row',
              paddingBottom: calcHeight(0.7),
              marginVertical: calcHeight(2),
              marginHorizontal: calcWidth(1.5),
            }}>
            <RadioButton
              isSelected={values.PickUpandDropOption == 'Direct Delivery'}
              onPress={() => {
                if (attestationrate.data) {
                  setFieldValue('Rate', attestationrate.data.Rate);
                }
                setFieldValue('PickUpandDropOption', 'Direct Delivery');
              }}
              text="Direct Delivery"
            />
            <RadioButton
              isSelected={values.PickUpandDropOption == 'Through Courier'}
              onPress={() => {
                if (attestationrate.data) {
                  setFieldValue('Rate', attestationrate.data.Rate);
                }
                setFieldValue('PickUpandDropOption', 'Through Courier');
              }}
              text="Through Courier"
            />
          </View>
          <View>
            <UploadTitle title="Passport or Emirates ID*" />
            {renderDocArr()}
            {renderDocNew()}
            <UploadValdation />
            {values.errorFileUpload && (
              <ErrorLabel label="Passport or Emirates ID is Required" />
            )}
          </View>
          <TxtSubHead title="Your Bill Amount" />

          <PriceDetailItem
            label="Attestation Charge"
            amount={offerUsed ? attestationrate.data ? attestationrate.data.Rate : 0 : 0}
          />
          <PriceDetailItem
            label="Service Charge"
            amount={
              offerUsed ? attestationrate.data ? attestationrate.data.ServiceCharge : 0 : 0
            }
          />

          {attestationrate.data &&
            values.PickUpandDropOption == 'Through Courier' && (
              <PriceDetailItem
                label="Courier Charge"
                amount={
                  offerUsed ? attestationrate.data ? attestationrate.data.CourierCharge : 0 : 0
                }
              />
            )}

          <TxtTotalAmount
            amount={
              offerUsed ? 
              attestationrate.data
                ? values.PickUpandDropOption == 'Through Courier'
                  ? attestationrate.data.Rate +
                    attestationrate.data.CourierCharge +
                    attestationrate.data.ServiceCharge
                  : attestationrate.data.Rate +
                    attestationrate.data.ServiceCharge
                : 0
                : 0
            }
          />

          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: calcWidth(4),
              paddingVertical: calcHeight(3),
              width: calcWidth(88),
            }}>
            <CheckBoxCustom
              isSelected={values.AgreeTerms}
              onPress={() => {
                setFieldValue('AgreeTerms', !values.AgreeTerms);
              }}
            />
            <Text
              style={{
                fontSize: RFValue(13),
                paddingHorizontal: calcWidth(1.5),
                color: '#081344',
                fontFamily: 'Montserrat-LightItalic',
                marginBottom: calcHeight(0.5),
              }}>
              I have read & agree to the{' '}
              <Text
                style={{textDecorationLine: 'underline'}}
                onPress={() => setShowTerms(true)}>
                Terms and Conditions
              </Text>{' '}
              of Service
            </Text>
          </View>
          {values.AgreeTerms ? (
            <ButtonNormal label="Pay Now" onPress={checkPhoneValid} />
          ) : (
            <ButtonNormal
              label="Pay Now"
              extraStyle={{backgroundColor: '#ff96a8'}}
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default withFormik({
  mapPropsToValues: ({
    attestationPrice,
    countries,
    documenttypes,
    documentTypes,
    getCountries,
    attestationrate,
    profile,
    token,
    docAttestationCreate,
    offerUsed
  }) => ({
    CustomerName: profile.data.userdetail.FirstName,
    Email: profile.data.contactdetail.Email,
    PersonalPhone: profile.data.contactdetail.Phone
      ? profile.data.contactdetail.Phone
      : '+971',
    Address1: profile.data.contactdetail.Addressline1,
    Zip: '',
    AddressCountry: 'United Arab Emirates',
    OfficePhone: profile.data.officedetail.CompanyPhone,
    Street: '',
    City: '',
    AgreeTerms: false,
    SelectedState: '',
    SelectedCountryId: '',
    SelectedCertificateType: '',
    PickUpandDropOption: 'Through Courier',
    ShowInfo: false,
    cca2: 'AE',
    callingCode: '971',
    errorPhone: '',
    File: null,
    Files: [],
    errorFileUpload: null,
    docAttestationCreate,
    offerUsed
  }),
  validateOnChange: false,
  validationSchema: Yup.object().shape({
    CustomerName: Yup.string()
      .nullable()
      .min(3, 'Must be longer than 3 characters')
      .required('Required'),
    Email: Yup.string()
      .nullable()
      .min(4, 'Must be longer than 4 characters')
      .email('Email not valid')
      .required('Required'),
    PersonalPhone: Yup.string()
      .nullable()
      .required('Required'),
    Address1: Yup.string()
      .nullable()
      .required('Required'),
    SelectedCountryId: Yup.string().required('Required'),
    SelectedCertificateType: Yup.string().required('Required'),
    AddressCountry: Yup.string().required('Required'),
    Street: Yup.string().required('Required'),
    City: Yup.string().required('Required'),
    SelectedState: Yup.string().required('Required'),
  }),

  handleSubmit: (values, {props, setFieldValue}) => {
    const {attestationrate, setRequestedValue} = props;
    const {Files} = values;
    if (Files.length === 0 || !phone.isValidNumber()) {
      if (Files.length === 0) {
        setFieldValue('errorFileUpload', 'Upload File is Required');
      }
      return;
    }

    const token = props.token.token;
    const Address = `${values.Address1},${values.Street} ${values.City}, ${values.SelectedState} ${values.AddressCountry} - ${values.Zip}`;
    var Rate = attestationrate.data
      ? values.PickUpandDropOption == 'Through Courier'
        ? attestationrate.data.Rate +
          attestationrate.data.CourierCharge +
          attestationrate.data.ServiceCharge
        : attestationrate.data.Rate + attestationrate.data.ServiceCharge
      : 0;
    Rate = offerUsed ? Rate : 0;
    const ServiceName = 'ATTESTATION SERVICE';
    setRequestedValue(Rate);

    let data = new FormData();
    data.append('CustomerName', values.CustomerName);
    data.append('Email', values.Email);
    data.append('PersonalPhone', values.PersonalPhone);
    data.append('OfficePhone', values.OfficePhone);
    // data.append("Address", address);

    data.append('SelectedCountryId', values.SelectedCountryId);
    data.append('CertificateTypeId', values.SelectedCertificateType);

    values.Files.map((item, index) => data.append('Files[]', item, item.name));
    data.append('Rate', Rate);
    data.append('ServiceId', 6);
    data.append('ServiceName', ServiceName);
    data.append('PickUpandDropOption', values.PickUpandDropOption);
    data.append('DocumentCount', 1);
    data.append('AddressLine1', values.Address1);
    data.append('POBox', values.Zip);
    data.append('Country', values.AddressCountry);
    data.append('StreetAddress', values.Street);
    data.append('City', values.City);
    data.append('State', values.SelectedState);
    //data.append('Address', Address);

    return values.docAttestationCreate({data, token});
  },
})(DocumentAttestation);

const eStyles = EStyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    padding: calcWidth(5),

    backgroundColor: '#f8f9fc',
    justifyContent: 'center',
  },
});
