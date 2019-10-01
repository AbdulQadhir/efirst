import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

import {
  SearchBar,
  NoRequestsLabel,
  NoRequestsBody,
  MyRequestItem,
} from './uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';
import {calcHeight, calcWidth} from '../config';
import {ScrollView} from 'react-native-gesture-handler';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const App: () => React$Node = () => {
  const state = {
    data: [
      {
        date: '05-01-2019',
        service: 'visa sevice 1235sd4Rt',
        status: 'Application Process',
        type: 1,
      },
      {
        date: '05-01-2019',
        service: 'visa sevice 1235sd4Rt',
        status: 'Application Process',
        type: 2,
      },
      {
        date: '05-01-2019',
        service: 'visa sevice 1235sd4Rt',
        status: 'Application Process',
        type: 5,
      },
    ],
  };
  var renderList = () => {
    return state.data.map(datum => {
      return (
        <MyRequestItem
          date={datum.date}
          service={datum.service}
          status={datum.status}
          type={datum.type}
        />
      );
    });
  };
  const emptyText =
    'Lorum ipsum Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum Lorum ipsum;';
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.body}>
        <SearchBar />
        {state ? (
          renderList()
        ) : (
          <View style={styles.body}>
            <NoRequestsLabel label="No new action required item available" />
            <NoRequestsBody emptyText={emptyText} img={1} />
          </View>
        )}
      </View>
    </ScrollView>
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
