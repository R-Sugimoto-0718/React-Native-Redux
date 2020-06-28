import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function ViewNotes() {
  return (
    <View>
      <Text>Note</Text>
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
  titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
  },
  title: {
      fontSize: 20
  },
  fab: {
      backgroundColor: '#219653',
      position: 'absolute',
      margin: 20,
      right: 0,
      bottom: 10
  },
  listTitle: {
      fontSize: 20
  }

})
