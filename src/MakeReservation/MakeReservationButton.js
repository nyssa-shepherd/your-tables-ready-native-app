import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

class MakeReservationButton extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  goToReservationForm = async(e) => {
    const restaurant_id = this.props.id;
    const { name, date, time, number_of_people } = this.state;
    const post = await fetch(`https://restaurant-res-backend.herokuapp.com/api/v1/reservations`, {
      method: 'POST',
      body: JSON.stringify({ restaurant_id, name, date, time, number_of_people })
    });
    console.log(post.json()) 
  }

  render() {
    return (
      <View>
        <Button
               title="Make a Reservation"
               titleStyle={{ fontSize: 10 }}
               id={this.props.id}
               buttonStyle={{
                 backgroundColor: "#680000",
                 width: Dimensions.get('window').width,
                 height: 45,
                 borderColor: "transparent",
                 borderWidth: 0,
                 marginLeft: -15
               }}
               containerStyle={{ marginTop: 10 }}
               onPress={(e) => this.goToReservationForm(e)}
        />
      </View>
    )
  }
};

export default MakeReservationButton;