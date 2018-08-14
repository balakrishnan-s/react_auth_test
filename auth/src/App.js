/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Header } from './components/common/import.js';

type Props = {};
export default class App extends Component<Props>  {
  render() {
    return (
      <View >
        <Header headerText="Authentication"/> 
        <Text >Welcome to React Native!</Text>
        <Text >To get started, edit App.js</Text>
      </View>
    );
  }
}
