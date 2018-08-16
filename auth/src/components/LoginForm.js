//import firebase from 'firebase';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, Cardsection, Input } from './common';



class LoginForm extends Component {
  state = { email: '', Password: '' };

  onButtonPress() {
  //  firebase.auth().signInWithEmailAndPassword();
  }

  render() {
    return (
      <Card>
        <Cardsection />
          <Input
            value={this.state.email}
            secureTextEntry="false"
            onChangeText={email => this.setState({ email })}
            label="Email"
          />
        <Cardsection />

        <Cardsection />
          <Input
            value={this.state.Password}
            secureTextEntry="true"
            onChangeText={Password => this.setState({ Password })}
            label="Password"
          />
        <Cardsection />

        <Cardsection />
          <Button headerText="Login" />
        <Cardsection />
      </Card>
    );
  }
}

const styles = {


};
export default LoginForm;
