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
} from '../../../../pages/uicomponents/components';

import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationActions} from 'react-navigation';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import TermsandConditon from '../../../../styled/TermsAndCondition';
// import TermsandConditon from '../../termsandcondition';
import {nationalities} from '../../../../styled/nationalities';
import Modal from 'react-native-modal';
import ModalPicker from '../../../../pages/uicomponents/ModalPicker';
import {calcHeight, calcWidth} from '../../../../config';
import PhoneInput from '../../../../styled/react-native-phone-input/lib';
import CountryPicker from '../../../../styled/react-native-country-picker-modal/src/CountryPicker';
import closeImgLight from '../../../../Assets/close-btn.png';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
import {validateFileTypeAndSizeForTranslation} from '../../../../constants';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import DateTimePicker from 'react-native-modal-datetime-picker';
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

const VisaService = ({
  handleSubmit,
  setFieldValue,
  values,
  errors,
  token,
  navigation,
  setShowTerms,
  state,
}) => {
  let countryPicker = null;
  let phone = null;

  let statePicker = null;
  let nationalityPicker = null;

  const ShowDateTimePicker = () => setFieldValue('IsDatePickerVisible', true);
  const HideDateTimePicker = () => setFieldValue('IsDatePickerVisible', false);
  const HandleDatePicked = date => {
    setFieldValue('PassportExpiryDate', new Date(date).toDateString());
    HideDateTimePicker();
  };

  const dateFormat = date => {
    console.log(date);
    return date
      ? new Date(date).getDate() +
          '/' +
          (new Date(date).getMonth() + 1) +
          '/' +
          new Date(date).getFullYear()
      : '';
  };

  checkPhoneValid = () => {
    setPhoneError('');
    if (!phone.isValidNumber()) {
      console.log('ABC');
      setPhoneError('Invalid Format');
    } else {
      console.log('Hi');
      handleSubmit();
    }
  };
  componentDidUpdate = () => {
    console.log(attestationPrice);
  };

  const attestationRateByCountryandDCType = (CountryId, CertificateType) => {
    if (CountryId && CertificateType) {
      attestationPrice({
        CountryId: CountryId,
        CertificateType: CertificateType,
        token: token.token,
      });
    }
  };

  const setExpDateInit = () => {
    var dt = new Date();
    dt.setMonth(dt.getMonth() + 6);
    return dt;
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
              color: '#8d847d',
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
          />
          {values.errorPhone != '' && <ErrorLabel label="Invalid Phone" />}
          {errors.Address1 && <ErrorLabel label={errors.Address1} />}
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
            placeholder="Nationality*"
            ref={ref => {
              nationalityPicker = ref;
            }}
            onChange={value => setFieldValue('Nationality', value)}>
            {nationalities.map((nationality, index) => (
              <ModalPickerItem
                onPress={() =>
                  nationalityPicker.onSelect(
                    nationality.value,
                    nationality.value,
                  )
                }
                label={nationality.value}
              />
            ))}
          </ModalPicker>
          {errors.Nationality && <ErrorLabel label={errors.Nationality} />}

          <Input2
            placeholder="Passport Expiry Date *"
            onTouchStart={ShowDateTimePicker}
            label="Passport Expiry Date *"
            onChangeText={value => {
              console.log(value);
              setFieldValue('PassportExpiryDate', value);
            }}
            value={dateFormat(values.PassportExpiryDate)}
          />
          {errors.PassportExpiryDate && (
            <ErrorLabel label={errors.PassportExpiryDate} />
          )}
          {!navigation.state.params.passportExpiry && (
              <View
                style={{
                  marginVertical: calcHeight(1),
                  paddingHorizontal: calcWidth(2),
                }}>
                <Text style={{fontSize: RFValue(12)}}>
                  Note: Passport Validity should be more than 6 months while
                  applying for any Visa
                </Text>
              </View>
            ) && <View></View>}
          <TxtTotalAmount
            amount={navigation.state.params.data.TotalBillAmount}
          />

          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: calcWidth(4),
              paddingVertical: calcHeight(3),
              width: calcWidth(88),
            }}>
            <CheckBoxCustom
              isSelected={values.ShowTerms}
              onPress={() => {
                console.log(values.ShowTerms);
                if (values.ShowTerms) {
                  setFieldValue('ShowTerms', false);
                } else {
                  setFieldValue('ShowTerms', true);
                }
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

          <ButtonNormal label="Pay Now" onPress={checkPhoneValid} />
        </ScrollView>
        <DateTimePicker
          isVisible={values.IsDatePickerVisible}
          onConfirm={HandleDatePicked}
          onCancel={HideDateTimePicker}
          minimumDate={
            navigation.state.params.passportExpiry
              ? setExpDateInit()
              : new Date()
          }
        />
      </View>
    </View>
  );
};

export default withFormik({
  mapPropsToValues: ({profile}) => ({
    CustomerName: profile.data.userdetail.FirstName,
    Email: profile.data.contactdetail.Email,
    PersonalPhone: profile.data.contactdetail.Phone
      ? profile.data.contactdetail.Phone
      : '+971',
    Address1: profile.data.contactdetail.Addressline1,
    OfficePhone: profile.data.officedetail.CompanyPhone,
    Zip: '',
    AddressCountry: 'United Arab Emirates',
    Street: '',
    City: '',
    SelectedState: '',
    Nationality: '',
    PassportExpiryDate: null,
    ShowInfo: false,
    AgreeTerms: false,
    ShowTerms: false,
    cca2: 'AE',
    callingCode: '971',
    errorPhone: '',
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
    PersonalPhone: Yup.number('Invalid No.')
      .nullable()
      .required('Required'),
    AddressCountry: Yup.string().required('Required'),
    Address1: Yup.string()
      .nullable()
      .required('Required'),
    Street: Yup.string().required('Required'),
    City: Yup.string().required('Required'),
    SelectedState: Yup.string().required('Required'),
    Nationality: Yup.string().required('Required'),
    PassportExpiryDate: Yup.string().required("Required").nullable()
  }),
  handleSubmit: (values, {props}) => {
    console.log('Submit');
    const {navigation, updateTotalAmount} = props;
    const token = props.token.token;
    const ServiceName = 'VISA SERVICE';
    const data = navigation.state.params.data;
    const Address = `${values.Address1},${values.Street} ${values.City}, ${values.SelectedState} ${values.AddressCountry} - ${values.Zip}`;

    data.ServiceName = ServiceName;
    data.CustomerName = values.CustomerName;
    data.Email = values.Email;
    data.PersonalPhone = values.PersonalPhone;
    data.OfficePhone = values.OfficePhone;
    data.Address = Address;
    data.Street = values.Street;
    data.City = values.City;
    data.Zip = values.Zip;
    data.AddressCountry = values.AddressCountry;
    data.AddressState = values.SelectedState;
    data.Nationality = values.Nationality;
    data.PassportExpiryDate = values.PassportExpiryDate;

    console.log('JSON', 'result = > ' + JSON.stringify(data));
    updateTotalAmount(data.TotalBillAmount);
    const serviceData = JSON.stringify(data);
    const docItem = navigation.state.params.docItem;

    let _data = new FormData();
    docItem.map((item, index) => _data.append('Files[]', item, item.name));
    _data.append('ServiceData', serviceData);
    console.log('result = > ', serviceData);
    console.log('data==>', JSON.stringify(_data));
    return props.visaServiceCreate({data: _data, token});
  },
})(VisaService);

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
