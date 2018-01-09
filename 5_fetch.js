import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet, StatusBar } from 'react-native';
import Row from './components/Row';

export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson.movies
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _keyExtractor = (item) => item.title;
  
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={(rowData) => {
            return <Row title={rowData.item.title} releaseYear={rowData.item.releaseYear} />
          }}
        />
      </View>
    );
  }
}


let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

