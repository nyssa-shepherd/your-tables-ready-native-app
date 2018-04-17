import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

class MakeReservationButton extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <View>
        <Button title='Make a Reservation' />
      </View>
    )
  }
};

export default MakeReservationButton;