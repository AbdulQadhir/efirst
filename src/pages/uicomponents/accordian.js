import React from 'react';
import {Animated, View, Easing, TouchableOpacity, Text} from 'react-native';
import {calcHeight, calcWidth} from '../../config';
import {RFValue} from 'react-native-responsive-fontsize';
class Accordian extends React.Component {
  state = {
    open: false,
  };
  constructor(props) {
    super(props);
    this.transition = new Animated.Value(0);
    this.height = this.transition.interpolate({
      inputRange: [0, 1],
      outputRange: [0, calcHeight(30)],
    });
  }

  transitionState = () => {
    if (this.state.open) {
      Animated.timing(this.transition, {
        toValue: 1,
        duration: 250,
        easing: Easing.linear,
        // useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(this.transition, {
        toValue: 0,
        duration: 250,
        easing: Easing.linear,
        //useNativeDriver: true,
      }).start();
    }
  };
  componentDidMount() {
    if (this.props.index === this.props.selectedIndex) {
      this.setState(
        {
          open: true,
        },
        this.transitionState,
      );
    }
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.index !== this.props.selectedIndex &&
      prevProps.selectedIndex != this.props.selectedIndex
    ) {
      this.setState(
        {
          open: false,
        },
        this.transitionState,
      );
    }
  }
  accordianState = () => {
    this.props.setSelectedIndex(this.props.index);
    this.setState(prevState => {
      return {
        open: !prevState.open,
      };
    }, this.transitionState);
  };

  render() {
    const {title, children} = this.props;

    return (
      <View>
        <TouchableOpacity onPress={() => this.accordianState()}>
          <Text
            style={{
              padding: calcHeight(2),
              paddingHorizontal: calcWidth(2),
              fontSize: RFValue(16),
              fontFamily: 'Montserrat-Medium',
              color: '#081344',
            }}>
            {title}
          </Text>
        </TouchableOpacity>
        <Animated.View style={{height: this.height}}>
          {this.state.open && children}

          {/* <Text>UBAID</Text> */}
        </Animated.View>
      </View>
    );
  }
}

export default Accordian;
