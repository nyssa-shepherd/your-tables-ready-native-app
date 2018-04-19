import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import MakeReservationScreen from '../Screens/MakeReservationScreen';

class MakeReservationButton extends Component {
  constructor() {
    super();
    this.state = {
      makeRes: false
    }
  }

  goToReservationForm = async(e) => {
    const { makeRes } = this.state;
    makeRes === false ? this.setState({ makeRes: true }) : this.setState({ makeRes: false })
  }

  render() {
    const resScreen = this.state.makeRes === true ? <MakeReservationScreen /> 
    : null;
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
               onPress={(e) => {this.goToReservationForm(e)}}
        />
        {resScreen}
      </View>
    )
  }
};

export default MakeReservationButton;