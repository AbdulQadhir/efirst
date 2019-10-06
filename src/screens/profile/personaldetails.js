import React from 'react';
import {View, Dimensions} from 'react-native';
import {
  Input2,
  ProfileSectionHdr,
  LabelInput,
  ModalPickerItem,
} from '../../pages/uicomponents/components';
import {calcHeight, calcWidth} from '../../config';
import ModalPicker from '../../pages/uicomponents/ModalPicker';
import EStyleSheet from 'react-native-extended-stylesheet';
import {withFormik} from 'formik';
import DateTimePicker from 'react-native-modal-datetime-picker';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const PersonalDetails = ({
  personaldetail,
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
}) => {
  let genderPicker = null;
  const ShowDateTimePicker = () => setFieldValue('IsDatePickerVisible', true);
  const HideDateTimePicker = () => setFieldValue('IsDatePickerVisible', false);
  const HandleDatePicked = date => {
    setFieldValue('DOB', new Date(date).toDateString());
    HideDateTimePicker();
  };

  const dateFormat = date => {
    return date
      ? new Date(date).getDate() +
          '/' +
          (new Date(date).getMonth() + 1) +
          '/' +
          new Date(date).getFullYear()
      : '';
  };
  const genders = [{name: 'Male'}, {name: 'Female'}, {name: 'Other'}];
  return (
    <View>
      <ProfileSectionHdr
        label={'Personal Details'}
        value={values.ShowEditPersonal}
        onPress={value => {
          console.log('Value', value);
          setFieldValue('ShowEditPersonal', value);
        }}
        handleSubmit={handleSubmit}
      />
      <View style={{paddingHorizontal: calcWidth(2)}}>
        <LabelInput label="Birthday" />
        <Input2
          style={{marginVertical: 0}}
          onTouchStart={values.ShowEditPersonal && ShowDateTimePicker}
          label="Birthday"
          onChangeText={value => setFieldValue('DOB', value)}
          value={dateFormat(values.DOB)}
          editable={values.ShowEditPersonal}
        />
        <LabelInput label="Gender" />
        {values.ShowEditPersonal ? (
          <ModalPicker
            placeholder="Gender"
            ref={ref => {
              genderPicker = ref;
            }}
            defaultValue={values.Gender}
            onChange={value => setFieldValue('Gender', value)}>
            {genders.map((gender, index) => (
              <ModalPickerItem
                onPress={() => genderPicker.onSelect(gender.name, gender.name)}
                label={gender.name}
              />
            ))}
          </ModalPicker>
        ) : (
          <Input2
            style={{marginVertical: 0}}
            label="Gender"
            value={values.Gender}
            editable={values.ShowEditPersonal}
          />
        )}
      </View>
      <DateTimePicker
        isVisible={values.IsDatePickerVisible}
        onConfirm={HandleDatePicked}
        onCancel={HideDateTimePicker}
        date={new Date('01/01/1947')}
      />
    </View>
  );
};

export default withFormik({
  mapPropsToValues: ({userPersonalDetailCreate, personaldetail}) => ({
    DOB: personaldetail.Dob,
    Gender: personaldetail.Gender ? personaldetail.Gender : 'Male',
    ShowEditPersonal: false,
    IsDatePickerVisible: false,
    userPersonalDetailCreate,
  }),
  validateOnChange: false,
  handleSubmit: (values, {props, setFieldValue}) => {
    setFieldValue('ShowEditPersonal', false);
    const token = props.token.token;
    const {DOB, Gender} = values;
    values.userPersonalDetailCreate({DOB, Gender, token});
  },
})(PersonalDetails);
const styles = {
  text_detail: {
    padding: 5,
    color: '#808B96',
    fontSize: 13,
  },
};
