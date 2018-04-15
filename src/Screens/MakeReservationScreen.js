import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { View, Text, TextInput, DateInput, StyleSheet } from 'react-native';

class MakeReservationScreen extends Component {
  static navigationOptions = {
    title: 'Make a Reservation'
  };

  render() {
    return (
      <View>
        <Text style={styles.titleText}>Make a Reservation</Text>
        <TextInput style={styles.input}
                   placeholder='Name'/>
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
                    onDateChange={(date) => {this.setState({date: date})}}
        />
        <TextInput style={styles.input}
                   placeholder='Time'/>
        <TextInput style={styles.input}
                   placeholder='Number of People'/>
        <Button title='Make Reservation'
                style={styles.submitBtn} />
        
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