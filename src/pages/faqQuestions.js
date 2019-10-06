import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions, Image} from 'react-native';

import {
  FAQLogoUnderline,
  FAQCategoryHdr,
  FAQuestion,
} from './uicomponents/components';
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
        <HeaderBtnBack onPress={() => navigation.goBack()} />
      </View>
    ),
    headerRight: (
      <HeaderBtnProfile onPress={() => navigation.navigate('Profile')} />
    ),
  });

  render() {
    const category = this.props.navigation.getParam('category', '');
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
              padding: calcWidth(3),
              paddingHorizontal: calcWidth(7),
            }}>
            <FAQCategoryHdr label={category} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <FAQuestion
                question="Question 1"
                answer="A aksd akjsdhan cadkjsdna xjaskndcas jkdn cass sdkhad asdjkasa casjdas caskjdhaskd csajkchkjsdc sjakcbakjsdc sjkacskjdc sjkdcns djkszncx sjkdzxn sasDASF  dsfs"
              />
              <FAQuestion
                question="Question 2"
                answer="A aksd akjsdhan cadkjsdna xjaskndcas jkdn cass sdkhad asdjkasa casjdas caskjdhaskd csajkchkjsdc sjakcbakjsdc sjkacskjdc sjkdcns djkszncx sjkdzxn yui uyguyt"
              />
              <FAQuestion
                question="Question 2"
                answer="A aksd akjsdhan cadkjsdna xjaskndcas jkdn cass sdkhad asdjkasa casjdas caskjdhaskd csajkchkjsdc sjakcbakjsdc sjkacskjdc sjkdcns djkszncx sjkdzxn yui uyguyt"
              />
            </ScrollView>
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
    height: calcWidth(50),
    resizeMode: 'contain',
  },
});

export default App;
