import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

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
          <Button title='Search'
                  style={styles.button} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'row'
  },
  input: {
    borderColor: 'grey',
    borderWidth: 0.5,
    height: 50,
    marginRight: 0,
    paddingLeft: 10,
    width: (Dimensions.get('window').width - 100)
  },
  button: {
    padding: 5,
    width: 100
  }
})

export default HomeScreen;