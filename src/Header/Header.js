import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headding}>{this.props.text}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'navy',
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    height: 90,
    marginBottom: 30,
    paddingTop: 40
  },
  headding : {
    color: 'white',
    fontSize: 28,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default Header;