import {connect} from 'react-redux';
import Loader from '../../styled/loader';
import AlertView from '../../styled/alert-view';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  BackHandler,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';

import {
  FAQLogoUnderline,
  FAQMenuItem,
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

class Container extends Component {
  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }
  static navigationOptions = ({navigation}) => ({
    title: 'FAQ',
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnMenu onPress={() => navigation.openDrawer()} />
        <HeaderBtnBack onPress={() => navigation.navigate('Dashboard')} />
      </View>
    ),
    headerRight: (
      <HeaderBtnProfile onPress={() => navigation.navigate('Profile')} />
    ),
  });
  handleBackButtonClick = () => {
    this.props.navigation.navigate('Dashboard');
    return true;
  };
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }
  render = () => {
    const {faq, data} = this.props;
    const {loading, error, success} = faq ? faq : '';
    const support = {FAQCategoryName: 'Have a Question?', faq: []};
    const faqList = [...data, support];
    console.log('FAQLIST', faqList);
    return (
      <View style={{flex: 1}}>
        <Loader loading={loading} />

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
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
              data={faqList}
              extraData={faqList}
              numColumns={3}
              renderItem={({item, index}) => {
                return index + 1 !== faqList.length ? (
                  <FAQMenuItem
                    onPress={() =>
                      this.props.navigation.navigate('FaqQuestions', {
                        faq: item.faq,
                        category: item.FAQCategoryName,
                      })
                    }
                    btnName={item.FAQCategoryName}
                    img={require(`${assetsPath}FAQMenu/faq.png`)}
                  />
                ) : (
                  <FAQMenuItem
                    btnName="Have a question?"
                    img={require(`${assetsPath}FAQMenu/qstn.png`)}
                    onPress={() => alert('Support')}
                  />
                );
              }}
            />
          </View>
        </View>

        {error && <AlertView type="error" />}
      </View>
    );
  };
}

const mapStateToProps = ({faq: {data, ...faq}}) => ({
  data,
  faq,
});
const styles = EStyleSheet.create({
  body: {
    flex: 1,
  },
  logo_img: {
    height: calcHeight(17),
    resizeMode: 'contain',
  },
});
export default connect(mapStateToProps)(Container);
