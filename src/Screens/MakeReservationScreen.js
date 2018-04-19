import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { View, Text, TextInput, DateInput, StyleSheet } from 'react-native';
import Header from '../Header/Header';
import { Icon } from 'react-native-elements';

class MakeReservationScreen extends Component {
  static navigationOptions = {
    title: 'Reserve',
  };

  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number_of_people: ''
    }
  }

  updateState = (text, name) => {
    this.setState({ [name]: text })
  }

  postReservation = async() => { 
    console.log(this.props.id)
    const restaurant_id = this.props.id;
    const { name, date, time, number_of_people } = this.state;
    const post = await fetch(`https://restaurant-res-backend.herokuapp.com/api/v1/reservations`, {
      method: 'POST',
      body: JSON.stringify({ restaurant_id, name, date, time, number_of_people })
    });
    console.log(await post.json()) 
  }

  render() {
    return (
      <View>
        <Header text='Make a Reservation'/>
        <TextInput style={styles.input} 
                    placeholder='Name'
                    value={this.state.restaurant}
                    onChangeText={(text) => this.updateState(text, 'name')} />
        <DatePicker style={styles.datePicker}
                    mode="date"
                    placeholder="Select Date"
                    format="YYYY-MM-DD"
                    minDate="2018-05-01"
                    maxDate="2018-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        display: 'none'
                      },
                      dateInput: {
                        height: 60
                      }
                    }}
                    onDateChange={(date) => { this.setState({date: date}) }}
        />
        <TextInput style={styles.input} 
                    placeholder='Time'
                    value={this.state.time}
                    onChangeText={(text) => this.updateState(text, 'time')} />
        <TextInput style={styles.input} 
                    placeholder='Number of People'
                    value={this.state.number_of_people}
                    onChangeText={(text) => this.updateState(text, 'number_of_people')} />
        <Button title='Make Reservation'
                style={styles.submitBtn}
                onPress={this.postReservation} />
        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 34,
    marginBottom: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },
  input: {
    borderColor: 'grey',
    borderWidth: 0.5,
    fontSize: 24,
    height: 60,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    paddingLeft: 10,
    width: 350
  },
  datePicker: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
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