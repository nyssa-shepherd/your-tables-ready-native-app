import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class MakeReservationScreen extends Component {
  static navigationOptions = {
    title: 'Make a Reservation'
  };

  render() {
    return (
      <View>
        <Text>Make a Reservation</Text>
        <TextInput style={styles.input}
                   placeholder='Name'/>
        <TextInput style={styles.input}
                   placeholder='Date'/>
        <TextInput style={styles.input}
                   placeholder='Time'/>
        <TextInput style={styles.input}
                   placeholder='Number of People'/>
        <Button title='Make Reservation'
                style={styles.submitBtn} />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'pink',
    fontSize: 24,
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    width: 350
  },
  submitBtn: {
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    width: 350
  }
});

export default MakeReservationScreen;