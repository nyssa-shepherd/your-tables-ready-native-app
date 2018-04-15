import React, { Component } from 'react';
import { View, Text } from 'react-native';

class UpcomingReservationScreen extends Component {
  static navigationOptions = {
    title: 'Upcoming Reservations'
  }

  render() {
    return (
      <View>
        <Text>You do not have any upcoming reservations at this time.</Text>
      </View>
    );
  }
};

export default UpcomingReservationScreen;