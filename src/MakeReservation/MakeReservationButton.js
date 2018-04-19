import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
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
        <Button
               title="Make a Reservation"
               titleStyle={{ fontSize: 10 }}
               buttonStyle={{
                 backgroundColor: "#680000",
                 width: Dimensions.get('window').width,
                 height: 45,
                 borderColor: "transparent",
                 borderWidth: 0,
                 marginLeft: -15
               }}
               containerStyle={{ marginTop: 10 }}
               onPress={(e) => this.submitSearch(e)}
        />
      </View>
    )
  }
};

export default MakeReservationButton;