import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  RefreshControl,
  ScrollView,
} from 'react-native';

import {DashNotify, DashCard} from '../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../../config';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export default ({
  navigation,
  dashboard,
  servicesData,
  token,
  _onRefresh,
  state,
}) => {
  const loadServiceRequestsByStatus = statusId => {
    navigateToMyRequestWithTitleandLabel(statusId);
    servicesData({statusId, token: token.token});
  };

  const navigateToMyRequestWithTitleandLabel = statusId => {
    switch (statusId) {
      case 1: {
        navigation.navigate('MyRequests', {
          headerTitle: 'Action Required',
          noDataLabel: 'No New updates here',
          statusId: 1,
        });

        break;
      }
      case 2: {
        navigation.navigate('MyRequests', {
          headerTitle: 'In Review',
          noDataLabel: 'No New updates here',
          statusId: 2,
        });
        break;
      }

      case 3: {
        navigation.navigate('MyRequests', {
          headerTitle: 'Completed',
          noDataLabel: 'No New updates here',
          statusId: 3,
        });
        break;
      }
      case 4: {
        navigation.navigate('MyRequests', {
          headerTitle: 'Rejected',
          noDataLabel: 'No New updates here',
          statusId: 4,
        });
        break;
      }
      default:
        break;
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flex: 1}}
      refreshControl={
        <RefreshControl refreshing={state.Refreshing} onRefresh={_onRefresh} />
      }
      showsVerticalScrollIndicator={false}>
      <View style={styles.body}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            //justifyContent: 'space-around',
          }}>
          <View style={{marginTop: calcHeight(6)}}>
            <DashNotify
              updates={
                dashboard.data
                  ? dashboard.data.Tiles.ActionRequiredNewUpdateCount +
                    dashboard.data.Tiles.InReviewNewUpdateCount +
                    dashboard.data.Tiles.CompletedNewUpdateCount +
                    dashboard.data.Tiles.RejectedNewUpdateCount
                  : 0
              }
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <DashCard
                updates={
                  dashboard.data
                    ? dashboard.data.Tiles.ActionRequiredNewUpdateCount
                    : '0'
                }
                label="Action Required"
                type={1}
                onPress={() => loadServiceRequestsByStatus(1)}
              />
              <DashCard
                updates={
                  dashboard.data
                    ? dashboard.data.Tiles.InReviewTotalUpdateCount
                    : '0'
                }
                label="In Review"
                type={2}
                onPress={() => loadServiceRequestsByStatus(2)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: calcHeight(0.75),
              }}>
              <DashCard
                updates={
                  dashboard.data
                    ? dashboard.data.Tiles.CompletedNewUpdateCount
                    : '0'
                }
                label="Completed"
                type={3}
                onPress={() => loadServiceRequestsByStatus(3)}
              />
              <DashCard
                updates={
                  dashboard.data
                    ? dashboard.data.Tiles.RejectedNewUpdateCount
                    : '0'
                }
                label="Rejected"
                type={4}
                onPress={() => loadServiceRequestsByStatus(4)}
              />
            </View>
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
    paddingRight: calcWidth(7.5),
    paddingLeft: calcWidth(7.5),
  },
});
