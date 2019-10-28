import React, {PureComponent} from 'react';
import {View, Text, NetInfo, Dimensions, StyleSheet} from 'react-native';
import {calcHeight, calcWidth} from '../../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');
function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}
class OfflineNotice extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(this.hideview, 5000);
  }
  hideview = () => {
    const {changeInternetStatus} = this.props;
    changeInternetStatus(true);
  };
  render() {
    const {isConnected} = this.props;
    return <MiniOfflineSign />;
  }
}
const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    padding: calcHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 0,
  },
  offlineText: {
    fontSize: RFPercentage(2),
    color: 'white',
    fontFamily: 'Montserrat-Light',
  },
});
export default OfflineNotice;
