import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';

export default class MyText extends Component {  
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text style={styles.greeting}>Hello world!</Text> 
      </View>);
  }
}

const styles = StyleSheet.create({
  greeting: {
    color: 'red',
    fontSize: 18
  }
});