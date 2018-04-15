import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Card, Button } from 'react-native-elements';

import Home from './src/Screens/Home';
import MakeReservationScreen from './src/Screens/MakeReservationScreen';
import UpcomingReservationScreen from './src/Screens/UpcomingReservationScreen';

export default class App extends React.Component {

  render() {
    const MainNavigator = TabNavigator({
      home: { screen: Home },
      upcomingReservation: { screen: UpcomingReservationScreen },
      makeReservation: { screen: MakeReservationScreen }
    },
    {
      swipeEnabled: true,
      lazy: false, 
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1
  },
});
