import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, Cardsection, Input } from './common';


class LoginForm extends Component {
  state = { text: '' };
  render() {
    return (
      <Card>
        <Cardsection />
          <Text> test</Text>
        <Cardsection />

        <Cardsection />
        <Input
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        label="Email"
        />
        <Cardsection />

        <Cardsection />
        <Text> test</Text>

        <Button headerText="Click Here" />
        <Cardsection />
      </Card>
    );
  }
}

const styles = {


};
export default LoginForm;
