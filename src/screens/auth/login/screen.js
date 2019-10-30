import React, {Component} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';

import NetInfo from '@react-native-community/netinfo';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const screenHeight = Dimensions.get('window').height;

import {
  Input,
  LabelInput,
  LabelHeader,
  Button,
  ButtonLabel,
  ButtonExtLogin,
  ErrorLabel,
  LoginFooter,
} from '../../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../../../config';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const LoginForm = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  navigation,
  loginUser,
  token,
  login,
  extLoginUrls,
}) => (
  <View style={styles.body}>
    <View>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <LabelHeader label={'Login'} />

        <LabelInput label={'Username/Email'} />
        <Input
          name="email"
          onChangeText={value => setFieldValue('username', value)}
          value={values.username}
          error={touched.username && errors.username}
        />
        {errors.username && <ErrorLabel label={errors.username} />}

        <LabelInput label={'Password'} />
        <Input
          name="password"
          onChangeText={value => setFieldValue('password', value)}
          value={values.password}
          error={touched.password && errors.password}
          secureTextEntry
        />
        {errors.password && <ErrorLabel label={errors.password} />}
        <ButtonLabel
          wrapperStyle={{alignSelf: 'flex-end'}}
          textStyle={{fontFamily: 'Montserrat-LightItalic'}}
          label={'Forgot Password?'}
          onPress={() => navigation.navigate('ForgetPassword')}
        />
        <Button label="Login" onPress={handleSubmit} />
        <ButtonLabel
          label={"Don't have an account ? Sign up"}
          onPress={() => navigation.navigate('Register')}
        />
        {!extLoginUrls.error && !extLoginUrls.loading ? (
          <ButtonExtLogin extLoginUrls={extLoginUrls} navigation={navigation} />
        ) : (
          <View style={{height: 50}} />
        )}
      </ScrollView>
    </View>
    <LoginFooter />
  </View>
);

export default withFormik({
  mapPropsToValues: ({loginUser, token}) => ({
    username: '',
    password: '',
    grant_type: 'password',
    loginUser,
    token,
  }),
  validateOnChange: false,

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, 'Must be longer than 4 characters')
      .email('Invalid Email')
      .required('Required'),
    password: Yup.string()
      .min(4, 'Must be longer than 4 characters')
      .required('Required'),
  }),

  handleSubmit: async (values, {setSubmitting, props}) => {
    const {changeInternetStatus} = props;
    const {isInternetReachable} = await NetInfo.fetch();
    if (!isInternetReachable) {
      changeInternetStatus(false);
      return;
    } else {
      changeInternetStatus(true);
    }

    var formBody = [];
    for (var property in values) {
      if (property !== 'loginUser') {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(values[property]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
    }
    formBody = formBody.join('&');
    return values.loginUser(formBody);
  },
})(LoginForm);

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
