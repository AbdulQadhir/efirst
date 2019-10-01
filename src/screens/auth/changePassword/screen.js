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
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}>
      <LabelHeader label={'Change Password'} />
      <LabelInput label={'Verification Code'} />
      <Input
        name="Token"
        onChangeText={value => setFieldValue('Token', value)}
        value={values.Token}
        error={touched.Token && errors.Token}
      />
      {errors.Token && <ErrorLabel label={errors.Token} />}
      <LabelInput label={'New Password'} />
      <Input
        name="NewPassword"
        onChangeText={value => setFieldValue('NewPassword', value)}
        value={values.NewPassword}
        error={touched.NewPassword && errors.NewPassword}
      />
      {errors.NewPassword && <ErrorLabel label={errors.NewPassword} />}
      <LabelInput label={'Confirm Password'} />
      <Input
        name="ConfirmPassword"
        onChangeText={value => setFieldValue('ConfirmPassword', value)}
        value={values.ConfirmPassword}
        error={touched.ConfirmPassword && errors.ConfirmPassword}
        secureTextEntry
      />
      {errors.ConfirmPassword && <ErrorLabel label={errors.ConfirmPassword} />}

      <Button label="Submit" onPress={handleSubmit} />
      <ButtonLabel label={'Go Back'} onPress={() => navigation.goBack()} />
    </ScrollView>

    <LoginFooter />
  </View>
);

export default withFormik({
  mapPropsToValues: ({changePassword}) => ({
    NewPassword: '',
    ConfirmPassword: '',
    Token: '',
    changePassword,
  }),
  validateOnChange: false,
  validationSchema: Yup.object().shape({
    Token: Yup.string().required('Required'),
    NewPassword: Yup.string()
      .min(4, 'Must be longer than 4 characters')
      .required('Required'),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref('NewPassword'), null], "Passwords don't match")
      .required('Required'),
  }),

  handleSubmit: (values, {setSubmitting, props}) => {
    const {Token, NewPassword} = values;
    const {Email, updateState} = props;
    updateState(true);
    return values.changePassword({
      Token,
      NewPassword,
      Email,
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
