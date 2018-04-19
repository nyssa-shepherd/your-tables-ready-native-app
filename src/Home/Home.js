import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import MakeReservationButton from '../MakeReservation/MakeReservationButton';

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
          <View key={restaurant.id}>
            <Image source={{ uri: restaurant.img_url }}
                   style={styles.img} />
          </View>
        )
      })
      : null;

    return (
      <View>
        <ScrollView horizontal='true'>
          {restaurants}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    height: 300,
    marginTop: 90,
    marginBottom: 'auto',
    width: Dimensions.get('window').width
  }
});

export default Home;