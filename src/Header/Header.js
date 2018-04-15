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
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    height: 90,
    marginBottom: 20
  }
});

export default Header;