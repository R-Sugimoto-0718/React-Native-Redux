import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function AddNotes() {
  return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add Notes Modal Screen</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingVertical: 20,
      paddingHorizontal: 10
  },
  iconButton: {
      backgroundColor: '#219653',
      position: 'absolute',
      right: 0,
      top: 40,
      margin: 10
  },
  titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
  },
  title: {
      fontSize: 24,
      marginBottom: 16
  },
  text: {
      height: 300,
      fontSize: 16
  },
  fab: {
      position: 'absolute',
      margin: 20,
      right: 0,
      bottom: 0,
      backgroundColor: '#219653'
  }

})

