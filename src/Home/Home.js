import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
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

  goToCuisine = () => {
    console.log('clicked')
  }

  render() {
    const restaurants = this.state.restaurants ? 
      this.state.restaurants.map(restaurant => {
        return (
          <ScrollView key={restaurant.id}>
            <Image source={{ uri: restaurant.img_url }}
                   style={styles.img} />
          </ScrollView>
        )
      })
      : null;

    return (
        <ScrollView>
          <View>
            <TouchableHighlight onPress={this.goToCuisine}>
              <Image source={require('../Images/american.jpg')}
                    style={styles.img} />
              </TouchableHighlight>
              <Text>Burgers</Text>
          </View>
          <View>
            <TouchableHighlight onPress={this.goToCuisine}>
              <Image source={require('../Images/americanFood.jpeg')}
                    style={styles.img} />
              </TouchableHighlight>
              <Text>American</Text>
          </View>
          <View>
            <TouchableHighlight onPress={this.goToCuisine}>
              <Image source={require('../Images/chinese.jpg')}
                    style={styles.img} />
              </TouchableHighlight>
              <Text>Chinese</Text>
          </View>
          <View>
            <TouchableHighlight onPress={this.goToCuisine}>
              <Image source={require('../Images/italian.jpeg')}
                    style={styles.img} />
              </TouchableHighlight>
              <Text>Italian</Text>
          </View>
          <View>
            <TouchableHighlight onPress={this.goToCuisine}>
              <Image source={require('../Images/korean.jpeg')}
                    style={styles.img} />
              </TouchableHighlight>
              <Text>Korean</Text>
          </View>
          <View>
            <TouchableHighlight onPress={this.goToCuisine}>
              <Image source={require('../Images/mexican.jpg')}
                    style={styles.img} />
              </TouchableHighlight>
              <Text>Mexican</Text>
          </View>
          <View>
            <TouchableHighlight onPress={this.goToCuisine}>
              <Image source={require('../Images/pizza.jpeg')}
                    style={styles.img} />
              </TouchableHighlight>
              <Text>Pizza</Text>
          </View>
          <View>
            <TouchableHighlight onPress={this.goToCuisine}>
              <Image source={require('../Images/seafood.jpg')}
                    style={styles.img} />
              </TouchableHighlight>
              <Text>Sea Food</Text>
          </View>
          <View>
            <TouchableHighlight onPress={this.goToCuisine}>
              <Image source={require('../Images/steak.jpeg')}
                    style={styles.img} />
              </TouchableHighlight>
              <Text>Steakhouse</Text>
          </View>
          <View>
            <TouchableHighlight onPress={this.goToCuisine}>
              <Image source={require('../Images/sushi.jpg')}
                    style={styles.img} />
              </TouchableHighlight>
              <Text>Sushi</Text>
          </View>
          <View>
            <TouchableHighlight onPress={this.goToCuisine}>
              <Image source={require('../Images/vietnamese.jpg')}
                    style={styles.img} />
              </TouchableHighlight>
              <Text>Vietnamese</Text>
          </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  imgContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  img: {
    height: 150,
    width: 150
  }
});

export default Home;