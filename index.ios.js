/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';

import {StackNavigator,} from 'react-navigation';
import { TabNavigator } from "react-navigation";
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Recent from './components/Recent';
import All from './components/All'

const ChatTab = TabNavigator({
  Recent: { screen: Recent },
  All: { screen: All },
});

ChatTab.navigationOptions = {
  title: 'Profile',
};

const AwesomeProject = StackNavigator({ Home: { screen: Welcome }, Profile: { screen: Profile }, Chats: {screen: ChatTab} });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
