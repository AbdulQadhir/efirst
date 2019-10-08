import React from 'react';
import {View, Dimensions, ScrollView} from 'react-native';

import {withFormik} from 'formik';
import * as Yup from 'yup';
import {
  Input,
  LabelInput,
  LabelHeader,
  Button,
  ButtonLabel,
  ButtonExtLogin,
  LoginFooter,
  ErrorLabel,
} from '../../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../../../config';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const RegistrationForm = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  navigation,
  loginUser,
}) => (
  <View style={styles.body}>
    <ScrollView
      style={[styles.scrollStyle]}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <LabelHeader label={'Sign Up'} />
      <LabelInput label={'Name'} />
      <Input
        name="FirstName"
        onChangeText={value => setFieldValue('FirstName', value)}
        value={values.FirstName}
        error={touched.FirstName && errors.FirstName}
      />
      {errors.FirstName && <ErrorLabel label={errors.FirstName} />}
      <LabelInput label={'Email'} />
      <Input
        name="email"
        onChangeText={value => setFieldValue('Email', value)}
        value={values.Email}
        error={touched.Email && errors.Email}
      />
      {errors.Email && <ErrorLabel label={errors.Email} />}
      <LabelInput label={'Mobile'} />
      <Input
        name="MobileNumber"
        onChangeText={value => setFieldValue('MobileNumber', value)}
        value={values.MobileNumber}
        error={touched.MobileNumber && errors.MobileNumber}
        keyboardType="phone-pad"
      />
      {errors.MobileNumber && <ErrorLabel label={errors.MobileNumber} />}
      <LabelInput label={'Password'} />
      <Input
        name="password"
        onChangeText={value => setFieldValue('Password', value)}
        value={values.Password}
        error={touched.Password && errors.Password}
        secureTextEntry
      />
      {errors.Password && <ErrorLabel label={errors.Password} />}
      <LabelInput label={'Confirm Password'} />
      <Input
        name="password"
        onChangeText={value => setFieldValue('ConfirmPassword', value)}
        value={values.ConfirmPassword}
        error={touched.ConfirmPassword && errors.ConfirmPassword}
        secureTextEntry
      />
      {errors.ConfirmPassword && <ErrorLabel label={errors.ConfirmPassword} />}
      <Button label="Sign Up" onPress={handleSubmit} />
      <ButtonLabel
        label={'Have an Account? Login'}
        onPress={() => navigation.navigate('Login')}
      />
    </ScrollView>

    <LoginFooter />
  </View>
);

export default withFormik({
  mapPropsToValues: ({registerUser}) => ({
    FirstName: '',
    Email: '',
    Password: '',
    MobileNumber: '',
    ConfirmPassword: '',
    registerUser,
  }),
  validateOnChange: false,

  validationSchema: Yup.object().shape({
    FirstName: Yup.string()
      .min(4, 'Must be longer than 4 characters')
      .required('Required'),
    Email: Yup.string()
      .min(4, 'Must be longer than 4 characters')
      .email('Invalid Email')
      .required('Required'),
    MobileNumber: Yup.string().required('Required'),
    Password: Yup.string()
      .min(4, 'Must be longer than 4 characters')
      .required('Required'),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref('Password'), null], "Passwords don't match")
      .required('Required'),
  }),

  handleSubmit: (values, {setSubmitting}) => {
    const {FirstName, Email, Password, ConfirmPassword, MobileNumber} = values;
    values.registerUser({
      FirstName,
      Email,
      Password,
      ConfirmPassword,
      MobileNumber,
    });
  },
})(RegistrationForm);

const styles = EStyleSheet.create({
  body: {
    flex: 1,
  },
  scrollStyle: {},
  container: {
    flexGrow: 2,
    paddingLeft: calcWidth(5),
    paddingRight: calcWidth(5),
    //height: calcHeight(10),
    backgroundColor: '#f8f9fc',
    // backgroundColor: 'red',
    justifyContent: 'center',
  },
});
