import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {
  Input2,
  ProfileSectionHdr,
  LabelInput,
  ErrorLabel,
} from '../../pages/uicomponents/components';
import * as Yup from 'yup';
import PhoneInput from '../../styled/react-native-phone-input/lib';
import CountryPicker from '../../styled/react-native-country-picker-modal/src/CountryPicker';
import closeImgLight from '../../Assets/close-btn.png';
import {calcHeight, calcWidth} from '../../config';
import EStyleSheet from 'react-native-extended-stylesheet';
import {withFormik} from 'formik';
import {RFValue} from 'react-native-responsive-fontsize';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const OfficeDetails = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  officedetail,
}) => {
  let phone = null;
  let countryPicker = null;
  const submit = () => {
    handleSubmit();
    setFieldValue('ShowEditOffice', false);
  };

  onPressFlag = () => {
    countryPicker.openModal();
  };

  selectCountry = country => {
    phone.selectCountry(country.cca2.toLowerCase());
    setFieldValue('cca2', country.cca2);
    setFieldValue('callingCode', country.callingCode);
    setFieldValue('CompanyPhone', `+${country.callingCode}`);
  };

  checkPhoneValid = () => {
    setFieldValue('phoneError', null);
    if (values.CompanyPhone) {
      if (!phone.isValidNumber()) {
        setFieldValue('phoneError', 'Invalid Format');
        return;
      }
    }
    handleSubmit();
  };
  return (
    <View>
      <ProfileSectionHdr
        label={'Company Details'}
        onSavePress={() => checkPhoneValid()}
      />
      <View style={{paddingHorizontal: calcWidth(2)}}>
        <LabelInput label="Company" />
        <Input2
          style={{marginVertical: 0}}
          label="Company"
          onChangeText={value => setFieldValue('Company', value)}
          value={values.Company}
        />
        <LabelInput label="Phone" />
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
            fontSize: RFValue(13),
            paddingVertical: calcHeight(1),
            paddingHorizontal: calcWidth(2),
            color: '#8d847d',
            paddingHorizontal: calcHeight(1),
            fontFamily: 'Montserrat-Light',
          }}
          onPressFlag={onPressFlag}
          placeholder="Phone"
          name="Phone"
          label="Mobile"
          keyboardType="numeric"
          onChangePhoneNumber={value => setFieldValue('CompanyPhone', value)}
          value={values.CompanyPhone}
        />
        {values.phoneError && <ErrorLabel label="Invalid Phone" />}

        <LabelInput label="Email" />
        <Input2
          style={{marginVertical: 0}}
          label="Website"
          keyboardType="email-address"
          onChangeText={value => setFieldValue('CompanyEmail', value)}
          value={values.CompanyEmail}
        />
        {errors.CompanyEmail && <ErrorLabel label="Invalid Email" />}
        <LabelInput label="Website" />
        <Input2
          style={{marginVertical: 0}}
          label="Website"
          onChangeText={value => setFieldValue('CompanyWebsite', value)}
          value={values.CompanyWebsite}
        />
      </View>
    </View>
  );
};

export default withFormik({
  mapPropsToValues: ({userOfficeAddressCreate, officedetail}) => ({
    Company: officedetail.Company ? officedetail.Company : '',
    CompanyEmail: officedetail.CompanyEmail ? officedetail.CompanyEmail : '',
    CompanyPhone: officedetail.CompanyPhone
      ? officedetail.CompanyPhone
      : '+971',
    CompanyWebsite: officedetail.CompanyWebsite
      ? officedetail.CompanyWebsite
      : '',
    ShowEditOffice: false,
    cca2: 'AE',
    callingCode: '971',
    phoneError: null,
    userOfficeAddressCreate,
  }),
  validateOnChange: false,

  validationSchema: Yup.object().shape({
    CompanyEmail: Yup.string().email('Invalid Email'),
  }),

  handleSubmit: (values, {props, setFieldValue}) => {
    setFieldValue('ShowEditOffice', false);
    const token = props.token.token;
    const {Company, CompanyEmail, CompanyPhone, CompanyWebsite} = values;
    console.log(props);
    console.log(values);
    values.userOfficeAddressCreate({
      Company,
      CompanyEmail,
      CompanyPhone,
      CompanyWebsite,
      token,
    });
  },
})(OfficeDetails);

const styles = {
  text_detail: {
    padding: 5,
    color: '#808B96',
    fontSize: 13,
  },
};

{
  /* <TouchableOpacity
onPress={() => {
  handleSubmit;
  setFieldValue("ShowEditOffice", false);
}}
>
<Icon style={{ color: "black", fontSize: 20 }} name="md-checkmark-circle" />
</TouchableOpacity> */
}

const DARK_COLOR = '#18171C';
const PLACEHOLDER_COLOR = 'rgba(255,255,255,0.2)';
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
