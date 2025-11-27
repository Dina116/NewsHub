import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Note from './Note';
import NoteScreenStyle from './NoteScreenStyle';

export default function NotesScreen() {

  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteText, setNewNoteText] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingNoteText, setEditingNoteText] = useState('');

  const currentUser = auth().currentUser;

  useEffect(() => {
    if (!currentUser) {
      setLoading(false);
      return;
    }
    const subscriber = firestore()
      .collection('notes')
      .where('userId', '==', currentUser.uid)
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        querySnapshot => {
          const notesData: Note[] = [];
          querySnapshot.forEach(documentSnapshot => {
            notesData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            } as Note);
          });
          setNotes(notesData);
          setLoading(false);
        },
        error => {
          console.error('Firestore Error: ', error); 
          setLoading(false);
          Alert.alert(
            'Database Error',
            'Could not fetch notes. Check the console for more details.',
          );
        },
      );
    return () => subscriber();
  }, [currentUser]);

  const handleAddNote = () => {
    if (newNoteText.trim().length === 0 || !currentUser) {
      return;
    }
    firestore()
      .collection('notes')
      .add({
        text: newNoteText,
        userId: currentUser.uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log('Note added!');
        setNewNoteText('');
      });
  };

  const handleDeleteNote = (noteId: string) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to permanently delete this note?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Deletion cancelled'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            firestore()
              .collection('notes')
              .doc(noteId)
              .delete()
              .then(() => {
                console.log('Note deleted!');
              })
              .catch(error => {
                console.error('Error deleting note: ', error);
                Alert.alert('Error', 'Could not delete the note.');
              });
          },
          style: 'destructive',
        },
      ],
      { cancelable: true },
    );
  };

  const handleUpdateNote = () => {
    if (!editingNoteId || editingNoteText.trim().length === 0) {
      setEditingNoteId(null);
      return;
    }

    firestore()
      .collection('notes')
      .doc(editingNoteId)
      .update({
        text: editingNoteText.trim(),
      })
      .then(() => {
        console.log('Note updated!');
        setEditingNoteId(null);
        setEditingNoteText('');
      })
      .catch(error => {
        console.error('Error updating note: ', error);
        Alert.alert('Error', 'Could not update the note.');
        setEditingNoteId(null);
      });
  };

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Loading notes...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={NoteScreenStyle.container}>
        <View style={NoteScreenStyle.titleContainer}>
          <Text style={NoteScreenStyle.title}>My Private Notes</Text>
        </View>

        <View style={NoteScreenStyle.inputContainer}>
          <TextInput
            style={NoteScreenStyle.input}
            placeholder="Write a new note..."
            value={newNoteText}
            onChangeText={setNewNoteText}
          />
          <Button title="Add" color="brown" onPress={handleAddNote} />
        </View>

        <FlatList
          data={notes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            const isEditing = item.id === editingNoteId;

            return (
              <View style={NoteScreenStyle.noteItem}>
                {isEditing ? (
                  <>
                    <TextInput
                      style={NoteScreenStyle.noteText}
                      value={editingNoteText}
                      onChangeText={setEditingNoteText}
                      autoFocus={true}
                    />
                    <Button
                      title="Save"
                      color="green"
                      onPress={handleUpdateNote}
                    />
                  </>
                ) : (
                  <>
                    <Text style={NoteScreenStyle.noteText}>{item.text}</Text>

                    {}
                    <View style={{ flexDirection: 'row' }}>
                      <Button
                        title="Edit"
                        color="blue"
                        onPress={() => {
                          setEditingNoteId(item.id);
                          setEditingNoteText(item.text);
                        }}
                      />
                      {}
                      <View style={{ width: 8 }} />
                      <Button
                        title="Delete"
                        color="red"
                        onPress={() => handleDeleteNote(item.id)}
                      />
                    </View>
                  </>
                )}
              </View>
            );
          }}
          ListEmptyComponent={<Text>You have no notes yet.</Text>}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}
