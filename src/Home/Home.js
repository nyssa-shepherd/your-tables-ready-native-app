import React, { Component } from 'react';
import { View } from 'react-native';
class Home extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount = async() => {
    const initalFetch = await fetch('/api/v1/restaurants');
    console.log(await initalFetch.json());
  }

  render() {
    return (
      <View></View>
    )
  }
}

export default Home;