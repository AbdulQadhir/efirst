import React, {Component} from 'react';
import Dashboard from '../screens/dashboard';
import {createStackNavigator} from 'react-navigation-stack';
import {TouchableOpacity, Text} from 'react-native';
import Icons from "react-native-vector-icons/Ionicons";
import IconsAws from "react-native-vector-icons/FontAwesome";

export default DashboardStack = createStackNavigator(
    {
      Dashboard,
    },
    {
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f8f9fc',
          elevation: 0
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: "#081344"
        },
        headerLeft: (
            <TouchableOpacity style={{padding: 15}} onPress={() => navigation.navigate('FirstPage')}>
              <Icons
                name="ios-menu"
                style={{
                  color: "#081344",
                  fontSize:25
                }} />
            </TouchableOpacity>
          ),
          headerRight: (
              <TouchableOpacity style={{padding: 15}} onPress={() => alert("Profile")}>
                <IconsAws
                  name="user-circle-o"
                  style={{
                    color: "#081344",
                    fontSize:25,
                  }} />
              </TouchableOpacity>
            ),
      },
    },
  );