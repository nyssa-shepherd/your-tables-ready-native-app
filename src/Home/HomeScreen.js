import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import Header from '../Header/Header';
import Home from './Home';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',    
  };

  render() {
    return (
      <View>
        <Header />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default HomeScreen;