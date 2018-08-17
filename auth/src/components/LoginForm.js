import firebase from 'firebase';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, Cardsection, Input, Spinner } from './common';



class LoginForm extends Component {
  state = { email: '', Password: '', error: '', loading: false };

  onButtonPress() {

    const { email, Password, error, loading } = this.state;
      console.log(email);
      console.log(Password);

      if (email !== '' && Password !== '') {
      this.setState({
        error: '',
        loading: true
      });

      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.Password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
          this.setState({ loading: false });
          this.setState({ error: 'User not already signed in trying now.' });

          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.Password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                this.setState({ error: 'Authentication Failed.' });
            });
      });
    } else {
      this.setState({ error: 'Fields Empty.' });
    }
  }

  onLoginSuccess() {
    this.setState({
      error: '',
      loading: false,
      email: '',
      Password: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)} headerText="Login" />
    );
  }

  render() {
    const { errorText } = styles;
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
          <Text style={errorText}>
            {this.state.error}
          </Text>
        <Cardsection />
          {this.renderButton()}
        <Cardsection />
      </Card>
    );
  }
}

const styles = {
  errorText: {
    alignSelf: 'center',
    color: '#d81a33',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }

};
export default LoginForm;
