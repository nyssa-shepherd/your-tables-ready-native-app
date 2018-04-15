import React, { Component } from 'react';
import { View } from 'react-native';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: null
    }
  }

  componentDidMount = async() => {
    const initalFetch = await fetch('http://localhost:3000/api/v1/restaurants');
    const restaurants = await initalFetch.json();
    this.setState({ restaurants }, () => {
      console.log(this.state.restaurants)
    });
  }

  render() {
    return (
      <View>
        {
          this.state.restaurants.map(restaurant => {
            return (
              <Text>{restaurant.name}</Text>
            )
          })
        }
      </View>
    )
  }
}

export default Home;