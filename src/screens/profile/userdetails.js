import React from 'react';
import {View, Dimensions, TouchableOpacity, Text} from 'react-native';
import {calcHeight, calcWidth} from '../../config';
import {
  Input2,
  ProfilePhoto,
  ProfileName,
  ProfileSaveIcon,
} from '../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import ImagePicker from 'react-native-image-picker';
const entireScreenWidth = Dimensions.get('window').width;
import {PROFILE_BASE_URL} from '../../constants';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
EStyleSheet.build({$rem: entireScreenWidth / 380});
const UserDetails = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  userdetail,
  dashboard,
}) => {
  const selectPhotoTapped = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

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

        const pic =
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

        setFieldValue('ProfilePic', pic);
        setFieldValue('ProfilePicName', response.fileName);
        setFieldValue('ImageUrl', source);
      }
    });
  };
  return (
    <View>
      {values.ImageUrl ? (
        <ProfilePhoto img={values.ImageUrl} />
      ) : userdetail.ProfilePic ? (
        <ProfilePhoto
          img={{
            uri: `${PROFILE_BASE_URL}${userdetail.ProfilePic}`,
          }}
        />
      ) : (
        <ProfilePhoto img={require(`../../Assets/userProfile.png`)} />
      )}
      {values.ShowEditUser && (
        <TouchableOpacity onPress={selectPhotoTapped}>
          <Text
            style={{
              textAlign: 'center',
              padding: calcHeight(0.5),
              textDecorationLine: 'underline',
              fontSize: RFValue(13),
              fontFamily: 'Montserrat-Light',
            }}>
            Change Photo
          </Text>
        </TouchableOpacity>
      )}
      {!values.ShowEditUser ? (
        <ProfileName
          name={userdetail.FirstName}
          designation={userdetail.Designation}
          onEditPress={() => setFieldValue('ShowEditUser', true)}
        />
      ) : (
        <View>
          <ProfileSaveIcon
            onPress={() => {
              setFieldValue('ShowEditUser', false);
              handleSubmit();
            }}
          />
          <Input2
            placeholder="Name"
            label="User Name"
            onChangeText={value => setFieldValue('FirstName', value)}
            value={values.FirstName}
            editable={false}
          />
          <Input2
            placeholder="Designation"
            label="Designation"
            onChangeText={value => setFieldValue('Designation', value)}
            value={values.Designation}
          />
        </View>
      )}
    </View>
  );
};

export default withFormik({
  mapPropsToValues: ({userProfileCreate, userdetail}) => ({
    FirstName: userdetail.FirstName,
    Designation: userdetail.Designation,
    ImageUrl: null,
    ProfilePicName: '',
    ProfilePic: null,
    ShowEditUser: false,
    userProfileCreate,
  }),
  validateOnChange: false,

  validationSchema: Yup.object().shape({
    ShowEditUser: Yup.boolean(),
    FirstName: Yup.string().when('ShowEditUser', {
      is: true,
      then: Yup.string()
        .nullable()
        .required('Please enter a user name'),
    }),
  }),

  handleSubmit: (values, {props}) => {
    const token = props.token.token;
    const {FirstName, Designation, ProfilePic, ProfilePicName} = values;
    let data = new FormData();
    data.append('FirstName', FirstName);
    data.append('Designation', Designation);
    data.append('ProfilePicName', ProfilePicName);
    data.append('ProfilePic', ProfilePic);

    values.userProfileCreate({data, token});
  },
})(UserDetails);
