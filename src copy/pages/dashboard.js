import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

import {DashNotify, DashCard} from './uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../config';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const App: () => React$Node = () => {
  return (
    <View style={styles.body}>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          //justifyContent: 'space-around',
        }}>
        <View style={{marginTop: calcHeight(6)}}>
          <DashNotify updates={0} />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <DashCard
              updates={0}
              label="Action Required"
              type={1}
              onPress={() => alert('To My Requests')}
            />
            <DashCard updates={0} label="In Review" type={2} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginTop: calcHeight(0.75),
            }}>
            <DashCard updates={0} label="Completed" type={3} />
            <DashCard updates={0} label="Rejected" type={4} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#f8f9fc',
    paddingRight: calcWidth(7.5),
    paddingLeft: calcWidth(7.5),
  },
});

export default App;
