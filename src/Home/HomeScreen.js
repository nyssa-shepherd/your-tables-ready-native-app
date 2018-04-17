import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import Header from '../Header/Header';
import Home from './Home';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
        tabBarIcon: () => {
      return <Icon name='home' size={30} />
    }    
  };

  render() {
    return (
      <View>
        <Header />
        <Home />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default HomeScreen;