import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../navigation/Stacks/mainStack';
import ScreenNames from '../ScreenNames';
import ProfileScreenStyle from './ProfileScreenStyle';
import Header from './Header';
import StackNames from '../../navigation/StackNames';

type Props = NativeStackScreenProps<
  MainStackParamList,
  ScreenNames.ProfileScreen
>;
export default function ProfileScreen({ navigation }: Props) {
  const [user, setUser] = useState(auth().currentUser);
  const [username, setUsername] = useState(user?.displayName || '');
  const [isEditingUsername, setIsEditingUsername] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setUsername(currentUser.displayName || '');
      } else {
        navigation.replace(StackNames.AuthStack, {
          Screen: ScreenNames.LoginScreen,
        });
      }
    });
    return unsubscribe;
  }, [navigation]);

  const handleUpdateUsername = () => {
    if (!user) return;
    const trimmedUsername = username.trim();
    if (trimmedUsername.trim().length === 0) {
      Alert.alert('Error', 'Username cannot be empty.');
      return;
    }

    user
      .updateProfile({ displayName: trimmedUsername })
      .then(() => {
        const updatedUser = { ...user, displayName: trimmedUsername };
        setUser(updatedUser);
        Alert.alert('Success', 'Username updated successfully!');
        setIsEditingUsername(false);
      })
      .catch(error => Alert.alert('Error', error.message));
  };
  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
      });
  };
  if (!user) {
    return (
      <View style={ProfileScreenStyle.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={ProfileScreenStyle.container}>
        <Header />
        <View style={ProfileScreenStyle.fieldContainer}>
          <Text style={ProfileScreenStyle.label}>Email</Text>
          <Text style={ProfileScreenStyle.value}>{user.email}</Text>
        </View>

        <View style={ProfileScreenStyle.fieldContainer}>
          <Text style={ProfileScreenStyle.label}>Username</Text>

          {isEditingUsername ? (
            <View style={ProfileScreenStyle.editContainer}>
              <TextInput
                style={ProfileScreenStyle.input}
                value={username}
                onChangeText={setUsername}
              />
              <Button title="Save" onPress={handleUpdateUsername} />
            </View>
          ) : (
            <View style={ProfileScreenStyle.editContainer}>
              <Text style={ProfileScreenStyle.value}>
                {user.displayName || 'Not set'}
              </Text>
              <Button title="Edit" onPress={() => setIsEditingUsername(true)} />
            </View>
          )}
        </View>
        <View style={ProfileScreenStyle.actionsContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: 'brown',
              borderRadius: 10,
              padding: 10,
              alignItems: 'center',
            }}
            onPress={() =>
              Alert.alert('Info', 'Password change functionality coming soon!')
            }
          >
            <Text style={{ color: 'white', fontSize: 18 }}>
              Change Password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              borderRadius: 10,
              padding: 10,
              alignItems: 'center',
            }}
            onPress={handleLogout}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
