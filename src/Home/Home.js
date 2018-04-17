import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
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
          <View>
            <Image source={{ uri: restaurant.img_url }}
                   style={{ width: 400, height: 400 }} />
          </View>
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