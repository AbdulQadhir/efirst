import React, {Component} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';

import {withFormik} from 'formik';
import * as Yup from 'yup';
import {
  Input,
  LabelInput,
  LabelHeader,
  Button,
  ButtonLabel,
  ErrorLabel,
  LoginFooter,
} from '../../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../../../config';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const ResetPasswordForm = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  navigation,
  resetPasswordUser,
}) => (
  <View style={styles.body}>
    <View>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <LabelHeader label={'Forgot Password'} />

        <LabelInput label={'Registered Email'} />
        <Input
          name="email"
          onChangeText={value => setFieldValue('Email', value)}
          value={values.Email}
          error={touched.Email && errors.Email}
        />
        {errors.Email && <ErrorLabel label={errors.Email} />}

        <Button label="Submit" onPress={handleSubmit} />
        <ButtonLabel
          label={'Have an Account? Login'}
          onPress={() => navigation.navigate('Login')}
        />
      </ScrollView>
    </View>
    <LoginFooter />
  </View>
);
export default withFormik({
  mapPropsToValues: ({resetPasswordUser, setStateEmail}) => ({
    Email: '',
    resetPasswordUser,
    setStateEmail,
  }),
  validateOnChange: false,
  validationSchema: Yup.object().shape({
    Email: Yup.string()
      .min(4, 'Must be longer than 4 characters')
      .email('Invalid Email')
      .required('Required'),
  }),

  handleSubmit: (values, {resetForm, setSubmitting}) => {
    const {Email} = values;
    const TokenFor = 'Forget Password';
    values.resetPasswordUser({Email, TokenFor});
    values.setStateEmail(Email);
    setSubmitting(false);
    //resetForm();
  },
})(ResetPasswordForm);

const styles = EStyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    paddingLeft: calcWidth(5),
    paddingRight: calcWidth(5),
    backgroundColor: '#f8f9fc',
    height: calcHeight(75),
    justifyContent: 'center',
  },
});
