import React, {Component} from 'react';

import {
  SRTimeline,
  SRMessageArea,
  SRMessage,
} from '../../../pages/uicomponents/components';
import {connect} from 'react-redux';

import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

import {calcHeight, calcWidth} from '../../../config';
class Details extends Component {
  render() {
    const {
      messages,
      messageList,
      statusList,
      loading,
      MessageModal,
    } = this.props;

    return (
      <ScrollView style={{padding: 10}} showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={{flexDirection: 'column', padding: calcWidth(3)}}>
            {messageList.map(item => (
              <SRMessageArea
                title={item.NoteTitle}
                onPress={() => MessageModal(0, item.NoteID, item.NoteTitle)}>
                {messages[item.NoteID].map(message => (
                  <SRMessage
                    name={message.CreatedBy}
                    date={message.CreatedDate}
                    message={message.MessageContent}
                  />
                ))}
              </SRMessageArea>
            ))}
            {statusList.map(status => {
              let color = '#3498DB';
              if (status.Note == 'Completed') {
                color = '#02ab2c';
              } else if (status.Note == 'Rejected') {
                color = '#f71b1b';
              } else if (status.Note == 'On Hold') {
                color = '#3498DB';
              } else {
                color = '#3498DB';
              }
              return (
                <SRTimeline
                  color={color}
                  title={status.Comment}
                  date={status.CreatedDate}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({
  servicerequest: {messages, messageList, statusList},
}) => ({
  messages,
  messageList,
  statusList,
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);

const styles = EStyleSheet.create({
  body: {
    flex: 1,
  },
});
