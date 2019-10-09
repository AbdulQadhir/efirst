import React, {Component} from 'react';
import AnnouncementScreen from './screen';
import {View, Text} from 'react-native';
import Loader from '../../styled/loader';
import {
  HeaderBtnMenu,
  HeaderBtnProfile,
} from '../../pages/uicomponents/components';
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Refreshing: false,
      error: false,
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Announcement',
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnMenu onPress={() => navigation.openDrawer()} />
      </View>
    ),
    headerRight: (
      <HeaderBtnProfile onPress={() => navigation.navigate('Dashboard')} />
    ),
  });

  componentDidMount = () => {};

  render = () => {
    const {navigation} = this.props;
    const body = navigation.getParam('body', null);
    const title = navigation.getParam('title', null);
    const bigPicture = navigation.getParam('bigPicture', null);

    return (
      <View style={{flex: 1}}>
        <AnnouncementScreen title={title} body={body} bigPicture={bigPicture} />
      </View>
    );
  };
}
