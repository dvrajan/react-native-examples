import React, { Component } from 'react';
import { Text, View} from 'react-native';

export default class Row extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      releaseYear: props.releaseYear
    }  
  }
  
  render() {
    return (
      <View>
        <Text>{this.state.title}, {this.state.releaseYear}</Text>
      </View>
    );
  }
}

