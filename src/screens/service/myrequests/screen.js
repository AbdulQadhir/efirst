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
    serviceRequestData({serviceId, token: token1});
    navigation.navigate('ServiceDetail');
  };

  const getTextandBackgroundColor = (status, ProcessName) => {
    switch (status) {
      case 'In Review':
        return {
          color: '#6F5F0F',
          borderColor: '#6F5F0F',
          backgroundColor: '#ffffff00',
          statusLabel: ProcessName,
        };
      case 'Completed':
        return {
          color: '#ffffff',
          borderColor: '#ffffff00',
          backgroundColor: '#07AE12',
          statusLabel: status,
        };
      case 'Rejected':
        return {
          color: '#ffffff',
          borderColor: '#DB0C0C',
          backgroundColor: '#DB0C0C',
          statusLabel: status,
        };
      case 'On Hold':
        return {
          color: '#ffffff',
          borderColor: '#123583',
          backgroundColor: '#123583',
          statusLabel: status,
        };
      default:
        return {
          color: '#6F5F0F',
          borderColor: '#6F5F0F',
          backgroundColor: '#ffffff00',
          statusLabel: status,
        };
        break;
    }
  };
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
          return <MyRequestItem service={service} {...res} />;
        })
    ) : (
      <View style={styles.body}>
        <NoRequestsLabel label="No new action required item available" />
        {/* <NoRequestsBody emptyText={emptyText} img={1} /> */}
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
  },
  paddingView: {
    paddingRight: calcWidth(7.5),
    paddingLeft: calcWidth(7.5),
  },
});
