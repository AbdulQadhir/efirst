import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  RefreshControl,
  ScrollView,
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

export default ({body, title, bigPicture}) => {
  console.log({body, title, bigPicture});
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
            {bigPicture && <AnnouncementImage image={bigPicture} />}
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
