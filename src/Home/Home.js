import React, { Component } from 'react';
import { View, Text } from 'react-native';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: null
    }
  }

  componentDidMount = async() => {
    const initalFetch = await fetch('https://restaurant-res-backend.herokuapp.com/api/v1/restaurants');
    const restaurants = await initalFetch.json();
    this.setState({ restaurants });
  }

  render() {
    const restaurants = this.state.restaurants ? 
      this.state.restaurants.map(restaurant => {
        return (
          <Text>{restaurant.restaurant_name}</Text>
        )
      })
      : null;

    return (
      <View>
        {restaurants}
      </View>
    )
  }
}

export default Home;