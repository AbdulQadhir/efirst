import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  RefreshControl,
  ScrollView,
  Platform,
} from 'react-native';

import {
  AnnouncementDetails,
  AnnouncementImage,
  AnnouncementTitle,
} from '../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../../config';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export default ({body, title, bigPicture, ios_attachments}) => {
  return (
    <ScrollView
      contentContainerStyle={{flex: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.body}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
          }}>
          <View style={{flex: 1}}>
            <AnnouncementTitle title={title} />
            {Platform.OS === 'android' && bigPicture && (
              <AnnouncementImage image={bigPicture} />
            )}
            {Platform.OS === 'ios' && ios_attachments && (
              <AnnouncementImage image={ios_attachments} />
            )}
            <AnnouncementDetails message={body} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = EStyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#f8f9fc',
    paddingHorizontal: calcHeight(3),
  },
});
