import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../Header/Header';

class UpcomingReservationScreen extends Component {
  static navigationOptions = {
    title: 'Upcoming',
    tabBarIcon: () => {
      return <Icon name='list' size={30} />
    }
  }

  render() {
    return (
      <View>
        <Header text='Upcoming Reservations' />
        <Text style={styles.text}>You do not have any upcoming reservations at this time.</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      fontWeight: '700',
      marginLeft: 30
    }
})

export default UpcomingReservationScreen;