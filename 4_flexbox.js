import React, { Component } from 'react';
import { View, Image, StatusBar, StyleSheet } from 'react-native';

export default class MyApp extends Component {  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.subcontainer}>
          <Image
            style={styles.image}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </View>
        <View style={styles.subcontainer}>
          <Image
            style={styles.image}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </View>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subcontainer: {
    flexDirection: 'row'
  },
  image: {
    margin: 10,
    width: 50,
    height: 50
  }
});