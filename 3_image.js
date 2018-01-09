import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';

export default class MyApp extends Component {  
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
      </View>);
  }
}