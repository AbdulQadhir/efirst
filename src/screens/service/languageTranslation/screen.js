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
} from '../../../pages/uicomponents/components';

import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationActions} from 'react-navigation';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import Modal from 'react-native-modal';
// import TermsandConditon from '../../termsandcondition';
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
import TermsandConditon from '../../../styled/TermsAndCondition';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const DARK_COLOR = '#18171C';
const LIGHT_COLOR = '#FFF';
//import CheckBox from '../../../styled/checkbox';
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
const LanguageTranslation = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  translationPrice,
  documentlanguage,
  translationrate,
  documenttypes,
  token,
  state,
  navigation,
  showToast,
  setShowTerms,
  offerUsed,
}) => {
  let countryPicker = null;
  let statePicker = null;
  let toLanguagePicker = null;
  let fromLanguagePicker = null;
  let documentTypePicker = null;

  const openlaunchCamera = (i, type) => {
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
            // on iOS, using camera returns undefined fileName. This fixes that issue, so API can work.
            var getFilename = response.uri.split('/');
            imgName = getFilename[getFilename.length - 1];
          }

          const file =
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
          switch (type) {
            case 'EmiratesID': {
              let files = values.EmiratesID;
              if (i == 0) files.push(file);
              else files[i] = file;
              setFieldValue('EmiratesID', files);
              break;
            }
            case 'Files': {
              let files = values.Files;
              if (i == 0) files.push(file);
              else files[i] = file;
              setFieldValue('Files', files);
              break;
            }
            case 'Passports': {
              let files = values.Passports;
              if (i == 0) files.push(file);
              else files[i] = file;
              setFieldValue('Passports', files);
              break;
            }
            default:
              break;
          }

          return;
        }
      });
    } catch (err) {
      alert(err);
    }
  };

  const openFile = async (i, type) => {
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
          switch (type) {
            case 'EmiratesID': {
              let files = values.EmiratesID;
              if (i == 0) files.push(file);
              else files[i] = file;
              setFieldValue('EmiratesID', files);
              break;
            }
            case 'Files': {
              let files = values.Files;
              if (i == 0) files.push(file);
              else files[i] = file;
              setFieldValue('Files', files);
              break;
            }
            case 'Passports': {
              let files = values.Passports;
              if (i == 0) files.push(file);
              else files[i] = file;
              setFieldValue('Passports', files);
              break;
            }
            default:
              break;
          }
        } else {
          showToast('- Invalid file type.\n- File must be smaller than 5 MB');
        }
      }
    } catch (err) {}
  };
  const languageTranslationRateByLanguages = (toLanguage, fromLanguage) => {
    if (toLanguage && fromLanguage) {
      translationPrice({
        toLanguage,
        fromLanguage,
        token: token.token,
      });
    }
  };
  const checkPhoneValid = () => {
    setPhoneError('');
    if (!phone.isValidNumber()) {
      setPhoneError('Invalid Format');
    }

    if (values.Files.length === 0) {
      setFieldValue('errorFileUpload', 'Upload File is Required');
    } else {
      setFieldValue('errorFileUpload', null);
    }
    if (values.EmiratesID.length === 0) {
      setFieldValue('errorEmiratesIDUpload', 'Emirates ID is Required');
    } else {
      setFieldValue('errorEmiratesIDUpload', null);
    }

    if (values.Passports.length === 0) {
      setFieldValue('errorPassportsUpload', 'Passport is Required');
    } else {
      setFieldValue('errorPassportsUpload', null);
    }
    handleSubmit();
  };
  componentDidUpdate = () => {};

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

  const renderDocs = documents => {
    return documents.map((doc, index) => {
      return (
        <SelectFile
          title="Upload File"
          subTitle={doc.name || 'Select File'}
          onLeftPress={() => openlaunchCamera(0)}
          onRightPress={() => openFile(0)}
          onDelPress={() => removeFile(index, documents)}
        />
      );
    });
  };
  const removeFile = (index, doc) => {
    doc.splice(index, 1);
    setFieldValue('Files', doc);
  };

  const removeEmiratesId = () => {
    setFieldValue('EmiratesID', null);
  };

  return (
    <View style={styles.body}>
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
          contentContainerStyle={styles.container}
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
            styles={darkTheme}
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
            textStyle={{
              fontSize: RFPercentage(2),
              paddingVertical: calcHeight(1),
              paddingHorizontal: calcWidth(2),
              color: '#081344',
              paddingHorizontal: calcHeight(1),
              fontFamily: 'Montserrat-Light',
            }}
            // textComponent={Input}
            onPressFlag={onPressFlag}
            placeholder="Mobile *"
            name="PersonalPhone"
            label="Mobile *"
            keyboardType="numeric"
            onChangePhoneNumber={value => setFieldValue('PersonalPhone', value)}
            value={values.PersonalPhone}
            editable={true}
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
            placeholder="Document Type*"
            ref={ref => {
              documentTypePicker = ref;
            }}
            onChange={value => {
              setFieldValue('SelectedDocumentTypeId', value);
            }}>
            {documenttypes.data.map((doc, index) => (
              <ModalPickerItem
                onPress={() =>
                  documentTypePicker.onSelect(
                    doc.DocumentTypeName,
                    doc.DocumentTypeId,
                  )
                }
                label={doc.DocumentTypeName}
              />
            ))}
          </ModalPicker>
          {errors.SelectedDocumentTypeId && (
            <ErrorLabel label={errors.SelectedDocumentTypeId} />
          )}

          <ModalPicker
            placeholder="Document Language*"
            ref={ref => {
              fromLanguagePicker = ref;
            }}
            onChange={value => {
              setFieldValue('SelectedFromDocumentLanguageId', value);
              languageTranslationRateByLanguages(
                values.SelectedToDocumentLanguageId,
                value,
              );
            }}>
            {documentlanguage.data.map((language, index) => (
              <ModalPickerItem
                onPress={() =>
                  fromLanguagePicker.onSelect(
                    language.LanguageName,
                    language.LanguageID,
                  )
                }
                label={language.LanguageName}
              />
            ))}
          </ModalPicker>
          {errors.SelectedFromDocumentLanguageId && (
            <ErrorLabel label={errors.SelectedFromDocumentLanguageId} />
          )}

          <ModalPicker
            placeholder="Document to be Translated*"
            ref={ref => {
              toLanguagePicker = ref;
            }}
            onChange={value => {
              setFieldValue('SelectedToDocumentLanguageId', value);
              languageTranslationRateByLanguages(
                value,
                values.SelectedFromDocumentLanguageId,
              );
            }}>
            {documentlanguage.data.map((language, index) => (
              <ModalPickerItem
                onPress={() =>
                  toLanguagePicker.onSelect(
                    language.LanguageName,
                    language.LanguageID,
                  )
                }
                label={language.LanguageName}
              />
            ))}
          </ModalPicker>
          {errors.SelectedToDocumentLanguageId && (
            <ErrorLabel label={errors.SelectedToDocumentLanguageId} />
          )}
          {values.errorSelectedLang && (
            <ErrorLabel label="Selected languages must be different." />
          )}

          <View
            style={{
              flexDirection: 'row',
              paddingBottom: calcHeight(0.7),
              marginVertical: calcHeight(2),
              marginHorizontal: calcWidth(1.5),
            }}>
            <CheckBoxCustom
              isSelected={values.LegalStamp}
              onPress={() => {
                if (values.LegalStamp) {
                  setFieldValue('LegalStamp', false);
                } else {
                  setFieldValue('LegalStamp', true);
                }
              }}
              text="Legal Stamp"
            />
          </View>

          {values.LegalStamp && (
            <View>
              <UploadTitle title="Document delivery type" />
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#999999',
                  flexDirection: 'row',
                  paddingBottom: calcHeight(0.7),
                  marginBottom: calcHeight(2),
                  marginHorizontal: calcWidth(1.5),
                }}>
                <RadioButton
                  isSelected={values.PickUpandDropOption == 'Direct Delivery'}
                  onPress={() => {
                    if (translationrate.data) {
                      setFieldValue('Rate', translationrate.data.Rate);
                    }
                    setFieldValue('PickUpandDropOption', 'Direct Delivery');
                  }}
                  text="Direct Delivery"
                />
                <RadioButton
                  isSelected={values.PickUpandDropOption == 'Through Courier'}
                  onPress={() => {
                    if (translationrate.data) {
                      setFieldValue('Rate', translationrate.data.Rate);
                    }
                    setFieldValue('PickUpandDropOption', 'Through Courier');
                  }}
                  text="Through Courier"
                />
              </View>
            </View>
          )}
          <View>
            <UploadTitle title="Upload File" />
            {renderDocs(values.Files)}
            <SelectFile
              subTitle="Select File"
              onLeftPress={() => openlaunchCamera(0, 'Files')}
              onRightPress={() => openFile(0, 'Files')}
            />
            <UploadValdation />

            {values.errorFileUpload && (
              <ErrorLabel label="Upload File is Required" />
            )}
          </View>

          <View>
            <UploadTitle title="Passport*" />

            {renderDocs(values.Passports)}

            <SelectFile
              subTitle={'Select File'}
              onLeftPress={() => openlaunchCamera(0, 'Passports')}
              onRightPress={() => openFile(0, 'Passports')}
            />

            <UploadValdation />
            {values.errorPassportsUpload && (
              <ErrorLabel label="Passport is Required" />
            )}
          </View>

          <View>
            <UploadTitle title="Emirates ID*" />

            {renderDocs(values.EmiratesID)}

            <SelectFile
              subTitle={'Select File'}
              onLeftPress={() => openlaunchCamera(0, 'EmiratesID')}
              onRightPress={() => openFile(0, 'EmiratesID')}
            />

            <UploadValdation />
            {values.errorEmiratesIDUpload && (
              <ErrorLabel label=" Emirates ID is Required" />
            )}
          </View>
          <TxtSubHead title="Your Bill Amount" />

          <PriceDetailItem
            label="Translation Charge"
            amount={
              offerUsed ?
              translationrate.data
                ? translationrate.data.Rate * values.Files.length
                : 0
                : 0
            }
          />
          <PriceDetailItem
            label="Service Charge"
            amount={
              offerUsed
                ? translationrate.data
                  ? translationrate.data.ServiceCharge
                  : 0
                : 0
            }
          />
          {translationrate.data && values.LegalStamp == true && (
            <PriceDetailItem
              label=" Legal Stamp Charge"
              amount={
                offerUsed
                  ? translationrate.data
                    ? translationrate.data.LeagualStampRate *
                      values.Files.length
                    : 0
                  : 0
              }
            />
          )}

          {translationrate.data &&
            values.LegalStamp == true &&
            values.PickUpandDropOption == 'Through Courier' && (
              <PriceDetailItem
                label="Courier Charge"
                amount={
                  offerUsed
                    ? translationrate.data
                      ? translationrate.data.CourierCharge
                      : 0
                    : 0
                }
              />
            )}

          <TxtTotalAmount
            amount={
              offerUsed
                ? translationrate.data
                  ? values.LegalStamp == true
                    ? values.PickUpandDropOption == 'Through Courier'
                      ? translationrate.data.Rate * values.Files.length +
                        translationrate.data.LeagualStampRate *
                          values.Files.length +
                        translationrate.data.CourierCharge +
                        translationrate.data.ServiceCharge
                      : translationrate.data.Rate * values.Files.length +
                        translationrate.data.LeagualStampRate *
                          values.Files.length +
                        translationrate.data.ServiceCharge
                    : translationrate.data.Rate * values.Files.length +
                      translationrate.data.ServiceCharge
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
    translationPrice,
    documentlanguage,
    translationrate,
    profile,
    documenttypes,
    token,
    doclangTransCreate,
    offerUsed,
  }) => ({
    CustomerName: profile.data.userdetail.FirstName,
    Email: profile.data.contactdetail.Email,
    PersonalPhone: profile.data.contactdetail.Phone
      ? profile.data.contactdetail.Phone
      : '+971',
    OfficePhone: profile.data.officedetail.CompanyPhone,
    Address1: profile.data.contactdetail.Addressline1,
    Zip: '',
    AddressCountry: 'United Arab Emirates',
    Street: '',
    City: '',
    SelectedState: '',
    SelectedDocumentTypeId: '',
    SelectedFromDocumentLanguageId: '',
    SelectedToDocumentLanguageId: '',
    LegalStamp: false,
    PickUpandDropOption: 'Through Courier',
    Files: [],
    EmiratesID: [],
    Passports: [],
    AgreeTerms: false,
    doclangTransCreate,
    cca2: 'AE',
    callingCode: '971',
    errorPhone: '',
    errorFileUpload: null,
    errorEmiratesIDUpload: null,
    errorPassportsUpload: null,
    errorSelectedLang: null,
    ShowTerms: false,
    offerUsed,
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
    SelectedDocumentTypeId: Yup.string().required('Required'),
    SelectedFromDocumentLanguageId: Yup.string().required('Required'),
    SelectedToDocumentLanguageId: Yup.string().required('Required'),
    AddressCountry: Yup.string().required('Required'),
    Street: Yup.string().required('Required'),
    City: Yup.string().required('Required'),
    SelectedState: Yup.string().required('Required'),
  }),

  handleSubmit: (values, {props, setFieldValue}) => {
    const {
      Files,
      SelectedFromDocumentLanguageId,
      SelectedToDocumentLanguageId,
    } = values;
    if (
      SelectedFromDocumentLanguageId == SelectedToDocumentLanguageId ||
      Files.length === 0 ||
      values.EmiratesID.length === 0 ||
      values.Passports.length === 0 ||
      !phone.isValidNumber()
    ) {
      if (Files.length === 0) {
        setFieldValue('errorFileUpload', 'Upload File is Required');
      }
      if (values.EmiratesID.length === 0) {
        setFieldValue('errorEmiratesIDUpload', 'Emirates ID is Required');
      }
      if (values.Passports.length === 0) {
        setFieldValue('errorPassportsUpload', 'Passport is Required');
      }
      if (SelectedFromDocumentLanguageId == SelectedToDocumentLanguageId) {
        setFieldValue(
          'errorSelectedLang',
          'Selected languages must be different.',
        );
      }

      return;
    }

    const {translationrate, setRequestedValue, offerUsed} = props;
    const token = props.token.token;
    const docRate = translationrate.data ? translationrate.data.Rate : 0;
    const courierCharge = translationrate.data
      ? translationrate.data.CourierCharge
      : 0;
    const leagualStampRate = translationrate.data
      ? translationrate.data.LeagualStampRate * values.Files.length
      : 0;
    const serviceCharge = translationrate.data
      ? translationrate.data.ServiceCharge
      : 0;
    const totalDocRate = docRate * values.Files.length;
    var Rate =
      values.LegalStamp == true
        ? values.PickUpandDropOption == 'Through Courier'
          ? totalDocRate + leagualStampRate + courierCharge + serviceCharge
          : totalDocRate + leagualStampRate + serviceCharge
        : totalDocRate + serviceCharge;

    Rate = offerUsed ? Rate : 0;

    setRequestedValue(Rate);
    let data = new FormData();
    values.Files.map((item, index) => data.append('Files[]', item, item.name));
    data.append('CustomerName', values.CustomerName);
    data.append('Email', values.Email);
    data.append('PersonalPhone', values.PersonalPhone);
    data.append('OfficePhone', values.OfficePhone);
    data.append('SelectedDocumentTypeId', values.SelectedDocumentTypeId);
    data.append(
      'SelectedFromDocumentLanguageId',
      values.SelectedFromDocumentLanguageId,
    );
    data.append(
      'SelectedToDocumentLanguageId',
      values.SelectedToDocumentLanguageId,
    );
    data.append('LegalStamp', values.LegalStamp);
    values.EmiratesID.map((item, index) =>
      data.append('Files[]', item, item.name),
    );
    values.Passports.map((item, index) =>
      data.append('Files[]', item, item.name),
    );
    data.append('Rate', Rate);
    data.append('ServiceId', 7);
    data.append('ServiceName', 'TRANSLATION SERVICE');
    data.append('PickUpandDropOption', values.PickUpandDropOption);
    data.append('DocumentCount', values.Files.length);
    data.append('AddressLine1', values.Address1);
    data.append('POBox', values.Zip);
    data.append('Country', values.AddressCountry);
    data.append('StreetAddress', values.Street);
    data.append('City', values.City);
    data.append('State', values.SelectedState);

    return values.doclangTransCreate({data, token});
  },
})(LanguageTranslation);

const styles = EStyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    padding: calcWidth(5),

    backgroundColor: '#f8f9fc',
    justifyContent: 'center',
  },
});
