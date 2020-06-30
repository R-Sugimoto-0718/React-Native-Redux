import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text, IconButton, FAB } from 'react-native-paper';
import Header from '../component/Header';

export default function AddNotes({ navigation }) {

  const [noteTitle, setNoteTitle] = useState('')
  const [noteDescription, setNoteDescription] = useState('')

  function onSaveNote() {
      navigation.state.params.addNote({ noteTitle, noteDescription })
      navigation.goBack()
  }

  return (
      <>
          <Header titleText='Add a New Note' />
          <IconButton
              icon="close"
              size={25}
              color='white'
              onPress={() => navigation.goBack()}
              style={styles.iconButton}
          />

          <View style={styles.container}>
              <TextInput
                  placeholder="Add Note Title here"
                  value={noteTitle}
                  mode='outlined'
                  onChangeText={setNoteTitle}
                  style={styles.title}
              />
              <TextInput
                  placeholder="Add Note Description"
                  value={noteDescription}
                  onChangeText={setNoteDescription}
                  mode="flat"
                  multiline={true}
                  style={styles.text}
                  scrollEnabled={true}
                  returnKeyLabel='done'
                  blurOnSubmit={true}
              />
              <FAB
                  style={styles.fab}
                  small
                  icon="check"
                  disabled={noteTitle == '' ? true : false}
                  onPress={() => onSaveNote()}
              />
          </View>
      </>
  )
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
      marginBottom: 16,
      borderColor: 'black'
  },
  text: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 16,
      backgroundColor: '#F6F6F4'
  },
  fab: {
      position: 'absolute',
      margin: 30,
      right: 0,
      bottom: 0,
      backgroundColor: '#219653'
  }

})