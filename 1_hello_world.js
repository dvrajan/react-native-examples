import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';

export default class MyApp extends Component {  
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text>Hello world!</Text> 
      </View>);
  }
}