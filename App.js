import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './src/Deck';

const data = [
  { id: 1, text: 'Did you exercise today?', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Did you take your medicine?', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Question 3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Question 4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 6, text: 'Question 5', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
];

export default class App extends React.Component {

  renderCard(item) {
    return (
      <Text>{item.text}</Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={data}
          renderCard={this.renderCard}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
