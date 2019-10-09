import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {calcHeight, calcWidth} from '../../config';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
// import {Left, Right} from 'native-base';
import {connect} from 'react-redux';
import Swiper from '../../styled/react-native-swiper/src';
import {setStatusBar} from './action';
const Background = props => {
  return (
    <ImageBackground
      source={props.source}
      resizeMode="stretch"
      style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, padding: 2}}>
        <View style={styles.buttonWrapper}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              flex: 1,
            }}>
            <TouchableOpacity
              style={{
                padding: calcHeight(1.3),
                backgroundColor: 'rgba(250, 250, 250, 0.30)',
                borderRadius: calcHeight(5),
              }}
              onPress={() => {
                props.setStatusBar(true);
                props.navigation.navigate('Auth');
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: RFValue(13),
                }}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
          {props.last && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flex: 1,
              }}>
              <TouchableOpacity
                style={{
                  padding: calcHeight(1.3),
                  backgroundColor: 'rgba(250, 250, 250, 0.30)',
                  borderRadius: calcHeight(5),
                }}
                onPress={() => {
                  props.setStatusBar(true);
                  props.navigation.navigate('Auth');
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontFamily: 'Montserrat-Medium',
                    fontSize: RFValue(13),
                  }}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../Assets/bg/slider1.jpg'),
        require('../../Assets/bg/slider2.jpg'),
        require('../../Assets/bg/slider3.jpg'),
        require('../../Assets/bg/slider4.jpg'),
        require('../../Assets/bg/slider5.jpg'),
      ],
      captions: [
        'One Touch Visa Services Application',
        'Express Visa Services at your Doorstep',
        'Residency Visa Services at your doorstep / fingertips',
        'Access Dubai visa services anywhere you go',
        'Residency Visa Services at your doorstep / fingertips',
      ],
      color: ['#000', '#FFF', '#000', '#000', '#FFF'],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="rgba(52, 52, 52, 0)"
          barStyle="light-content"
          translucent
        />
        <Swiper
          loop={false}
          style={styles.wrapper}
          showsButtons={true}
          index={this.state.index}
          buttonWrapperStyle={styles.buttonWrapperStyle}
          activeDotColor="#FFF">
          <View style={styles.slide}>
            <Background
              source={this.state.images[0]}
              color={this.state.color[0]}
              caption={this.state.captions[0]}
              navigation={this.props.navigation}
              setStatusBar={this.props.setStatusBar}
              onNext={this.onNext}
            />
          </View>
          <View style={styles.slide}>
            <Background
              source={this.state.images[1]}
              color={this.state.color[1]}
              caption={this.state.captions[1]}
              navigation={this.props.navigation}
              setStatusBar={this.props.setStatusBar}
            />
          </View>
          <View style={styles.slide}>
            <Background
              source={this.state.images[2]}
              color={this.state.color[2]}
              caption={this.state.captions[2]}
              navigation={this.props.navigation}
              setStatusBar={this.props.setStatusBar}
            />
          </View>
          <View style={styles.slide}>
            <Background
              source={this.state.images[3]}
              color={this.state.color[3]}
              caption={this.state.captions[3]}
              navigation={this.props.navigation}
              setStatusBar={this.props.setStatusBar}
            />
          </View>
          <View style={styles.slide}>
            <Background
              last
              source={this.state.images[4]}
              color={this.state.color[4]}
              caption={this.state.captions[4]}
              navigation={this.props.navigation}
              setStatusBar={this.props.setStatusBar}
            />
          </View>
        </Swiper>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setStatusBar: payload => dispatch(setStatusBar(payload)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Slider);
const styles = StyleSheet.create({
  wrapper: {},
  buttonWrapperStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
