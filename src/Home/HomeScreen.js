import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import Header from '../Header/Header';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View>
        <View style={styles.form}>
          <TextInput style={styles.input} 
                    placeholder='Search' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 30,
    paddingTop: 30
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: 25,
    borderWidth: 0.5,
    height: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 10,
    width: (Dimensions.get('window').width - 60)
  },
  button: {
    padding: 5,
    width: 100
  }
})

export default HomeScreen;