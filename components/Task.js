import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Task(props) {

  return (
    <View style={styles.container}>
    <View style={styles.textOnly}>
      <TouchableOpacity style={styles.square} />
      <Text> {props.text} </Text>
    </View>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 7,
    padding: 15,
    marginBottom: 10
    
  },

  textOnly: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  square: {
    width: 13,
    height: 13,
    backgroundColor: '#DDDDDD',
    marginRight: 5

  },

  incompleteStyle: {
    textDecorationLine: 'none',
  },

  completeStyle: {
    textDecorationLine: 'line-through',
    color: '#DDDDDD'
  }


});