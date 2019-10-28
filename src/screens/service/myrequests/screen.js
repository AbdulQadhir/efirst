import React from 'react';
import {View, ScrollView, RefreshControl, Dimensions} from 'react-native';
import {
  SearchBar,
  NoRequestsLabel,
  NoRequestsBody,
  MyRequestItem,
} from '../../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';
import {calcHeight, calcWidth} from '../../../config';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export default ({
  navigation,
  token,
  services,
  serviceRequestData,
  headerTitle,
  setSearchText,
  statusId,
  noDataLabel,
  state,
  _onRefresh,
}) => {
  navigateToScreen = route => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    navigation.dispatch(navigateAction);
  };

  const navigateToDetail = serviceId => {
    const token1 = token.token;
    //  const headerTitle: 'Rejected',
    //  const noDataLabel: 'No recent rejected service request',
    //  const statusId: 4,
    serviceRequestData({serviceId, token: token1});
    navigation.navigate('ServiceDetail');
  };

  const getTextandBackgroundColor = (status, ProcessName) => {
    switch (status) {
      case 'In Review':
        return {
          color: '#ffffff',
          borderColor: '#6F5F0F',
          backgroundColor: '#47489f',
          statusLabel: ProcessName,
        };
      case 'Completed':
        return {
          color: '#ffffff',
          borderColor: '#ffffff00',
          backgroundColor: '#5c9305',
          statusLabel: status,
        };
      case 'Rejected':
        return {
          color: '#ffffff',
          borderColor: '#DB0C0C',
          backgroundColor: '#f71414',
          statusLabel: status,
        };
      case 'On Hold':
        return {
          color: '#ffffff',
          borderColor: '#ff7300',
          backgroundColor: '#ff7300',
          statusLabel: status,
        };
      default:
        return {
          color: '#ffffff',
          borderColor: '#6F5F0F',
          backgroundColor: '#5c9305',
          statusLabel: status,
        };
        break;
    }
  };
  const emptyText =
    '';
  var renderList = () => {
    return services.data.length > 0 ? (
      services.data
        .filter(service =>
          (
            service.SRTitle.toString().toLowerCase() +
            ' - SR' +
            service.SRID.toString().toLowerCase()
          ).includes(state.searchText.toLowerCase()),
        )
        .map((service, index) => {
          const res = getTextandBackgroundColor(
            service.SRStatusName,
            service.ProcessName,
          );
          return (
            <MyRequestItem
              onPress={() => navigateToDetail(service.SRID)}
              service={service}
              {...res}
            />
          );
        })
    ) : (
      <View style={[styles.body, {height: calcHeight(70)}]}>
        <NoRequestsLabel label={noDataLabel} />
        <NoRequestsBody emptyText={emptyText} img={statusId} />
      </View>
    );
  };
  return (
    <View style={styles.body}>
      <View style={styles.paddingView}>
        <SearchBar
          onChangeText={searchText => {
            setSearchText(searchText);
          }}
          value={state.searchText}
        />
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={state.Refreshing}
            onRefresh={_onRefresh}
          />
        }
        showsVerticalScrollIndicator={false}>
        <View style={styles.paddingView}>{renderList()}</View>
      </ScrollView>
    </View>
  );
};

const styles = EStyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#f8f9fc',
  },
  paddingView: {
    paddingRight: calcWidth(7.5),
    paddingLeft: calcWidth(7.5),
  },
});
