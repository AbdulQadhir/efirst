import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions, Image} from 'react-native';

import {FAQLogoUnderline, FAQMenuItem} from './uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../config';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const assetsPath = '../Assets/';

import {
  HeaderBtnProfile,
  HeaderBtnMenu,
  HeaderBtnBack,
} from './uicomponents/components';

class App extends React.Component {
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

  goToQuestions = category => {
    this.props.navigation.navigate('FaqQuestions', {category});
  };

  render() {
    return (
      <>
        <View style={styles.body}>
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
                source={require('../Assets/logo.png')}
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
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <FAQMenuItem
                onPress={() => this.goToQuestions('General')}
                btnName="General"
                img={require(`${assetsPath}FAQMenu/general.png`)}
              />
              <FAQMenuItem
                onPress={() => this.goToQuestions('Price')}
                btnName="Price"
                img={require(`${assetsPath}FAQMenu/price.png`)}
              />
              <FAQMenuItem
                onPress={() => this.goToQuestions('Support/ Complanits')}
                btnName="Support/ Complanits"
                img={require(`${assetsPath}FAQMenu/support.png`)}
              />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <FAQMenuItem
                onPress={() => this.goToQuestions('Using Service')}
                btnName="Using Service"
                img={require(`${assetsPath}FAQMenu/service.png`)}
              />
              <FAQMenuItem
                onPress={() => this.goToQuestions('Counter/ Delivery')}
                btnName="Counter/ Delivery"
                img={require(`${assetsPath}FAQMenu/delivery.png`)}
              />
              <FAQMenuItem
                btnName="Have a question?"
                img={require(`${assetsPath}FAQMenu/qstn.png`)}
              />
            </View>
          </View>
        </View>
      </>
    );
  }
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

export default App;
