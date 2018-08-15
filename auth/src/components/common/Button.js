import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (probs) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity   style={buttonStyle}>
      <Text  style={textStyle}>{probs.headerText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#e8ebef',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSlef: 'stretch',
    backgroundColor: '#4286f4',
    borderRadius: 5,
    borderColor: '#4286f4',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center'
  }
};
export { Button };
