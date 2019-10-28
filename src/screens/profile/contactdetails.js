import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {
  Input2,
  ProfileSectionHdr,
  LabelInput,
  ErrorLabel,
} from '../../pages/uicomponents/components';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import PhoneInput from '../../styled/react-native-phone-input/lib';
import CountryPicker from '../../styled/react-native-country-picker-modal/src/CountryPicker';
import closeImgLight from '../../Assets/close-btn.png';
import {calcHeight, calcWidth} from '../../config';
import EStyleSheet from 'react-native-extended-stylesheet';
import {withFormik} from 'formik';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const ContactDetails = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  contactdetail,
}) => {
  let phone = null;
  let countryPicker = null;
  onPressFlag = () => {
    countryPicker.openModal();
  };

  const selectCountry = country => {
    phone.selectCountry(country.cca2.toLowerCase());
    setFieldValue('cca2', country.cca2);
    setFieldValue('callingCode', country.callingCode);
    setFieldValue('Phone', `+${country.callingCode}`);
  };

  checkPhoneValid = () => {
    setFieldValue('phoneError', null);
    if (values.Phone) {
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
        label={'Contact Details'}
        value={values.ShowEditContact}
        onPress={value => {
          setFieldValue('ShowEditContact', value);
        }}
        handleSubmit={checkPhoneValid}
      />
      <View style={{paddingHorizontal: calcWidth(2)}}>
        <LabelInput label="Mobile" />
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
          onPressFlag={values.ShowEditContact && onPressFlag}
          placeholder="Mobile"
          name="Phone"
          label="Mobile"
          keyboardType="numeric"
          onChangePhoneNumber={value => setFieldValue('Phone', value)}
          value={values.Phone}
          editable={values.ShowEditContact}
        />
        {values.phoneError && <ErrorLabel label="Invalid Phone" />}
        <LabelInput label="Email" />
        <Input2
          style={{marginVertical: 0}}
          value={contactdetail.Email}
          editable={false}
        />
        <LabelInput label="Address" />
        <Input2
          style={{marginVertical: 0}}
          label="Address"
          onChangeText={value => setFieldValue('Addressline1', value)}
          value={values.Addressline1}
          editable={values.ShowEditContact}
        />
        <LabelInput label="Website" />
        <Input2
          style={{marginVertical: 0}}
          label="Website"
          onChangeText={value => setFieldValue('Website', value)}
          value={values.Website}
          editable={values.ShowEditContact}
        />
      </View>
    </View>
  );
};

export default withFormik({
  mapPropsToValues: ({userConatctDetailCreate, contactdetail}) => ({
    Phone: contactdetail.Phone ? contactdetail.Phone : '+971',
    Email: contactdetail.Email,
    Website: contactdetail.Website,
    Addressline1: contactdetail.Addressline1,
    ShowEditContact: false,
    cca2: 'AE',
    callingCode: '971',
    phoneError: null,
    userConatctDetailCreate,
  }),
  validateOnChange: false,

  // validationSchema: Yup.object().shape({
  //   ShowEditContact: Yup.boolean(),
  //   Phone: Yup.string().when("ShowEditContact", {
  //     is: true,
  //     then: Yup.string()
  //       .nullable()
  //       .required("Must enter company name")
  //   })
  // }),

  handleSubmit: (values, {props, setFieldValue}) => {
    setFieldValue('ShowEditContact', false);
    const token = props.token.token;
    const {Phone, Email, Website, Addressline1} = values;
    values.userConatctDetailCreate({
      Phone,
      Email,
      Website,
      Addressline1,
      token,
    });
  },
})(ContactDetails);

const styles = {
  text_detail: {
    padding: 5,
    color: '#808B96',
    fontSize: 13,
  },
};

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
