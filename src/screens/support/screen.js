import React, {Component} from 'react';
import PhoneInput from '../../styled/react-native-phone-input/lib';
import CountryPicker from '../../styled/react-native-country-picker-modal/src/CountryPicker';
import closeImgLight from '../../Assets/close-btn.png';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {
  InputSupport,
  ButtonNormal,
  SupportDetail,
  ErrorLabel,
} from '../../pages/uicomponents/components';

import {calcHeight, calcWidth} from '../../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import EStyleSheet from 'react-native-extended-stylesheet';
import Ionicons from 'react-native-vector-icons/AntDesign';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const data = [
  {
    phone: '+971 55 277 7731 +971 56 555 4999',
    email: 'welcome@efirst.ae',
    address:
      'Emirates First Business Service LLC\nOffice No.1, Al Hilal Bank Building,\nNear Al Twar Centre, Al Qusais \nDubai, UAE',
  },
  {
    phone: '+971 42 588 894',
    email: 'welcome@efirst.ae',
    address:
      'Emirates First Business Service LLC\nOffice # G08,\nB-Block, Business Village,\nNear Clock Tower,Deira,\nDubai, UAE',
  },
  {
    phone: '+1(647)354-1222',
    email: 'welcome@efirst.ca',
    address:
      'Emirates First Business Service LLC\n180 Northfield Drive West,\nUnit 4, 1st Floor\nWaterloo, Ontario, N2L 0C7,\nCanada.',
  },
];
const Support = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  support,
  values,
  errors,
  touched,
  token,
  navigation,
  profile,
}) => {
  let phone = null;
  let countryPicker = null;
  onPressFlag = () => {
    countryPicker.openModal();
  };

  selectCountry = country => {
    phone.selectCountry(country.cca2.toLowerCase());
    setFieldValue('cca2', country.cca2);
    setFieldValue('callingCode', country.callingCode);
    setFieldValue('PersonalPhone', `+${country.callingCode}`);
  };
  const checkPhoneValid = () => {
    setFieldValue('phoneError', null);
    if (values.PersonalPhone) {
      console.log('Hi');
      if (!phone.isValidNumber()) {
        console.log('Hi 123');
        setFieldValue('phoneError', 'Invalid Format');
        return;
      }
    }
    handleSubmit();
  };
  return (
    <View style={styles.body}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <InputSupport
            placeholder="Name*"
            name="CustomerName"
            label="Name"
            onChangeText={value => setFieldValue('CustomerName', value)}
            value={values.CustomerName}
          />
          {errors.CustomerName && <ErrorLabel label={errors.CustomerName} />}
          <InputSupport
            placeholder="Email*"
            name="CustomerMail"
            label="Email"
            onChangeText={value => setFieldValue('CustomerMail', value)}
            value={values.CustomerMail}
          />
          {errors.CustomerMail && <ErrorLabel label={errors.CustomerMail} />}
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
          />
          {errors.phoneError && <ErrorLabel label="Invalid Phone" />}

          <InputSupport
            placeholder="Office Phone*"
            name="OfficePhone"
            label="Office"
            keyboardType="numeric"
            onChangeText={value => setFieldValue('OfficePhone', value)}
            value={values.OfficePhone}
          />

          <InputSupport
            placeholder="Message *"
            name="Message"
            label="Message"
            onChangeText={value => setFieldValue('Message', value)}
            value={values.Message}
            multiline={true}
            style={{height: calcHeight(15)}}
          />
          {errors.Message && <ErrorLabel label={errors.Message} />}
        </View>
        <ButtonNormal label="Submit" onPress={() => checkPhoneValid()} />

        {data.map(item => (
          <View style={styles.box}>
            <SupportDetail title="Phone" data={item.phone} />
            <SupportDetail title="Email" data={item.email} />
            <SupportDetail title="Address" data={item.address} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default withFormik({
  mapPropsToValues: ({supportCreate, token, profile}) => ({
    CustomerName: profile.data.userdetail.FirstName,
    CustomerMail: profile.data.contactdetail.Email,
    PersonalPhone: profile.data.contactdetail.Phone
      ? profile.data.contactdetail.Phone
      : '+971',
    OfficePhone: profile.data.officedetail.CompanyPhone,
    Message: '',
    cca2: 'AE',
    callingCode: '971',
    phoneError: null,
    supportCreate,
  }),
  validateOnChange: false,
  enableReinitialize: true,
  validationSchema: Yup.object().shape({
    PersonalPhone: Yup.string()
      .nullable()
      .required('Required'),
    Message: Yup.string()
      .nullable()
      .required('Required'),
    CustomerName: Yup.string()
      .nullable()
      .required('Required'),
    CustomerMail: Yup.string()
      .nullable()
      .required('Required')
      .email('Invalid'),
  }),

  handleSubmit: (values, {props, setFieldValue}) => {
    const token = props.token.token;
    setFieldValue('Message', '');
    return values.supportCreate({...values, token});
  },
})(Support);

const styles = EStyleSheet.create({
  body: {
    flex: 1,
    //height: '100%',
    padding: calcHeight(2.5),
    backgroundColor: '#f8f9fc',
  },
  box: {
    marginTop: calcHeight(2),
  },
});

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
