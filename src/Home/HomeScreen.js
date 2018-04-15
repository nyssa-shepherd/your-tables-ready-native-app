import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View>
        <TextInput style={styles.input} 
                   placeholder='Search' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 0.5,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 10,
    width: Dimensions.get('window').width
  }
})

export default HomeScreen;