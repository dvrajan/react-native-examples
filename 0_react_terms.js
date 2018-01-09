import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

//Component
export default class MyApp extends Component {

  //props & states
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      color: props.color
    }
  }  

  onButtonPress() {
    this.setState({
      color: 'red'
    });    
  }

  render() {
    return (
      //JSX
      <Text style={{color: this.state.color}}>Hello world!</Text> 
    );
  }
}

//Usage
// <MyText title='hey' color='green' />