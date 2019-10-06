import React, {Component} from 'react';

import {View, ScrollView, Dimensions, Image, BackHandler} from 'react-native';

import {
  FAQLogoUnderline,
  FAQCategoryHdr,
  FAQuestion,
} from '../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../../config';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const assetsPath = '../../Assets/';

import {
  HeaderBtnProfile,
  HeaderBtnMenu,
  HeaderBtnBack,
} from '../../pages/uicomponents/components';
export default class FAQDetail extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'FAQ',
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnMenu onPress={() => navigation.openDrawer()} />
        <HeaderBtnBack onPress={() => navigation.goBack()} />
      </View>
    ),
    headerRight: (
      <HeaderBtnProfile onPress={() => navigation.navigate('Profile')} />
    ),
  });
  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick = () => {
    this.props.navigation.goBack();
    return true;
  };
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  render = () => {
    const category = this.props.navigation.getParam('category', '');
    const faq = this.props.navigation.getParam('faq', []);

    return (
      <View style={{flex: 1}}>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#f8f9fc',
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              height: '70%',
            }}>
            <Image
              style={styles.logo_img}
              source={require('../../Assets/logo.png')}
            />
            <FAQLogoUnderline />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#FFF',
            justifyContent: 'center',
            padding: calcWidth(3),
            paddingHorizontal: calcWidth(7),
          }}>
          <FAQCategoryHdr label={category} />
          <ScrollView showsVerticalScrollIndicator={false}>
            {faq.map(item => (
              <FAQuestion question={item.FAQuestion} answer={item.FAQAnswer} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };
}

const styles = EStyleSheet.create({
  body: {
    flex: 1,
  },
  logo_img: {
    height: calcHeight(17),
    resizeMode: 'contain',
  },
});
