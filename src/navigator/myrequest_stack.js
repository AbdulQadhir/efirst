import React, {Component} from 'react';
import MyRequests from '../screens/service/myrequests';
import {createStackNavigator} from 'react-navigation-stack';
import {TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import IconsAws from 'react-native-vector-icons/FontAwesome';
import {calcHeight, calcWidth} from '../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
export default MyRequestStack = createStackNavigator(
  {
    MyRequests: {screen: MyRequests},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f8f9fc',
        elevation: 0,
        shadowColor: 'transparent',
        shadowOpacity: 0,
        borderBottomColor: 'transparent',
        height: calcHeight(5.5),
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#081344',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: RFValue(18),
        textAlign: 'center',
        width: '100%',
      },
      headerLeft: (
        <TouchableOpacity
          style={{
            padding: calcHeight(1),
            paddingLeft: calcWidth(5),
            // height: calcHeight(5.5),
          }}
          onPress={() => navigation.navigate('FirstPage')}>
          <Icons
            name="ios-menu"
            style={{
              color: '#081344',
              fontSize: RFValue(25),
            }}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          style={{
            padding: calcHeight(1),
            paddingRight: calcWidth(4.5),
            // height: calcHeight(5.5),
          }}
          onPress={() => alert('Profile')}>
          <IconsAws
            name="user-circle-o"
            style={{
              color: '#081344',
              fontSize: RFValue(20),
            }}
          />
        </TouchableOpacity>
      ),
    },
  },
);
