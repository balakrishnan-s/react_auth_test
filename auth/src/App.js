
import React, { Component } from 'react';
import { View } from 'react-native';
//import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


export default class App extends Component {
  componentWillMount() {
    // firebase.initializeApp({
    //     apiKey: 'AIzaSyAzoxvDnRzNcXm_24yJOACLkXfEfGAw4FI',
    //     authDomain: 'authenticationreact-eb072.firebaseapp.com',
    //     databaseURL: 'https://authenticationreact-eb072.firebaseio.com',
    //     projectId: 'authenticationreact-eb072',
    //     storageBucket: 'authenticationreact-eb072.appspot.com',
    //     messagingSenderId: '1011142684725'
    // });
  }

  render() {
    return (
      <View >
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
