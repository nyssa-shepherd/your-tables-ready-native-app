import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search', 
    tabBarIcon: () => {
      return <Icon name='search' size={30} />
    }   
  };

  render() {
    return (
      <View style={styles.form}>
        <TextInput style={styles.input} 
                  placeholder='Search' />
      </View>
    )
  }
};


const styles = StyleSheet.create({
  form: {
    backgroundColor: 'navy',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 40,
    paddingTop: 40
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: 25,
    borderWidth: 0.5,
    height: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 10,
    width: (Dimensions.get('window').width - 60)
  }
})

export default SearchScreen;