import React, {Component} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';

import {withFormik} from 'formik';
import * as Yup from 'yup';

const screenHeight = Dimensions.get('window').height;

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

const ConfirmEmail = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  redirectFrom,
  navigation,
}) => (
  <View style={styles.body}>
    <View>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <LabelHeader label={'Enter verification code'} />

        <LabelInput label={'Verification Code'} />
        <Input
          name="code"
          onChangeText={value => setFieldValue('code', value)}
          value={values.code}
          error={touched.code && errors.code}
        />
        {errors.code && <ErrorLabel label={errors.code} />}

        <Button label="Submit" onPress={handleSubmit} />
        {redirectFrom === 'Register' ? (
          <ButtonLabel
            label={'Have an Account? Login'}
            onPress={() => navigation.navigate('Login')}
          />
        ) : (
          <ButtonLabel label={'Go back'} onPress={() => navigation.goBack()} />
        )}
      </ScrollView>
    </View>
    <LoginFooter />
  </View>
);
export default withFormik({
  mapPropsToValues: ({confirmEmail}) => ({
    code: '',
    confirmEmail,
  }),
  validateOnChange: false,
  validationSchema: Yup.object().shape({
    code: Yup.string().required('Required'),
  }),

  handleSubmit: (values, {resetForm, setSubmitting, props}) => {
    const {code} = values;
    const {registration} = props;
    console.log(props);
    const {
      data: {Id},
    } = registration;
    values.confirmEmail({code, userid: Id});
    setSubmitting(false);
    resetForm();
  },
})(ConfirmEmail);

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
