import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Card, Button } from 'react-native-elements';

import HomeScreen from './src/Home/HomeScreen';
import MakeReservationScreen from './src/Screens/MakeReservationScreen';
import UpcomingReservationScreen from './src/Screens/UpcomingReservationScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      home: { screen: HomeScreen },
      upcomingReservation: { screen: UpcomingReservationScreen },
      makeReservation: { screen: MakeReservationScreen }
    },
    {
      swipeEnabled: false,
      lazy: false,
    });

    return (
      <View style={styles.container}>
        <MainNavigator style={styles.whatev}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  }
});
