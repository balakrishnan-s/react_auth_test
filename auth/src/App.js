/*
Its an issue with firebase version 5.0.6 whereas downgrading to a
version will resolve this issue.for example try this
$ npm install --save firebase@5.0.4
If version 5.0.4 is also not working for you than try version 4.9.1
as this is what i am using and it resolved this issue for me
$npm install --save firebase@4.9.1
*/
import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    this.initializeFirebase();
  }
  initializeFirebase() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAzoxvDnRzNcXm_24yJOACLkXfEfGAw4FI',
      authDomain: 'authenticationreact-eb072.firebaseapp.com',
      databaseURL: 'https://authenticationreact-eb072.firebaseio.com',
      projectId: 'authenticationreact-eb072',
      storageBucket: 'authenticationreact-eb072.appspot.com',
      messagingSenderId: '1011142684725'
    });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.this.state({ loggedIn: true });
        } else {
          this.this.state({ loggedIn: false });
        }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Button>
        Log Out
      </Button>
      );
      case false:
          return <LoginForm />;
      default:
        //return <Spinner size='large' />;
        return <LoginForm />;
    }
  }
  render() {
    return (
      <View >
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
