import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import {Input2, ReplyButton} from '../../../pages/uicomponents/components';
import Modal from 'react-native-modal';
import {RFValue} from 'react-native-responsive-fontsize';
import {calcHeight, calcWidth} from '../../../config';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const PostMessage = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  token,
  navigation,
  SRID,
  NoteID,
  handle,
  action,
}) => {
  const SendMessage = () => {
    handle();
    handleSubmit;
  };

  return (
    <Modal isVisible={action.IsVisible} avoidKeyboard={true}>
      <View style={styles.modalContent}>
        <View
          style={{
            flexDirection: 'row',
            padding: calcHeight(0.5),
            marginTop: calcHeight(2),
            justifyContent: 'center',
            //backgroundColor: 'red',
          }}>
          <Text
            style={{
              fontSize: RFValue(14),
              fontFamily: 'Montserrat-Medium',
            }}>
            Send A Message
          </Text>
          <TouchableOpacity
            style={{
              alignItems: 'flex-end',
              position: 'absolute',
              right: calcWidth(5),
              top: calcHeight(0.8),
            }}
            onPress={() => handle()}>
            <EvilIcons style={{fontSize: RFValue(20)}} name="close" />
          </TouchableOpacity>
        </View>
        <View style={{padding: calcHeight(1)}}>
          <View>
            {!action.NoteID ? (
              <Input2
                placeholder="Message Title"
                name="MessageTitle"
                label="Title"
                onChangeText={value => setFieldValue('MessageTitle', value)}
                value={values.MessageTitle}
              />
            ) : (
              <Input2
                placeholder="Message Title"
                name="MessageTitle"
                label="Title"
                value={action.Title}
                editable={false}
              />
            )}
          </View>
          {errors.MessageTitle && (
            <Text visible={errors.MessageTitle}>{errors.MessageTitle}</Text>
          )}
          <View style={styles.item_margin}>
            <Input2
              rowSpan={5}
              placeholder="Message"
              name="MessageContent"
              label="Message"
              multiline={true}
              style={{height: calcHeight(10)}}
              onChangeText={value => setFieldValue('MessageContent', value)}
              value={values.MessageContent}
            />
          </View>
          {errors.MessageContent && (
            <Text visible={errors.MessageContent}>{errors.MessageContent}</Text>
          )}
          <View style={{alignItems: 'center', paddingTop: calcHeight(2)}}>
            <ReplyButton
              label="Send"
              style={{paddingVertical: calcHeight(1), width: calcWidth(40)}}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({action, SendMessage}) => ({
    MessageTitle: action.SRID == 0 ? action.Title : '',
    MessageContent: '',

    SendMessage,
  }),
  validateOnChange: false,

  validationSchema: Yup.object().shape({
    MessageTitle: Yup.string().required('Required'),
    MessageContent: Yup.string().required('Required'),
  }),

  handleSubmit: (values, {props}) => {
    const {handle, changeRequestMessageState} = props;
    handle();
    const token = props.token.token;
    const {profile} = props;
    const {UserId} = profile.data.userdetail;
    const {SRID, NoteID} = props.action;
    const NoteType = SRID != 0 ? 'NewMessage' : 'ReplyMessage';
    const {MessageContent, MessageTitle} = values;

    values.SendMessage({
      SRID,
      NoteID,
      NoteType,
      MessageContent,
      MessageTitle,
      CreatedBy: UserId,
      token,
    });
    return changeRequestMessageState(true);
  },
})(PostMessage);
const styles = {
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 13,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
};
