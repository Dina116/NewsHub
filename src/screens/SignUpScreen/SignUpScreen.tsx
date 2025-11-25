import { TextInput, Alert, TouchableOpacity, Text, View } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../navigation/Stacks/mainStack';
import ScreenNames from '../ScreenNames';
import SignUpStyle from './SignUpStyle';
import Header from './SignUpHeader/Header';

type Props = NativeStackScreenProps<
  MainStackParamList,
  ScreenNames.SignUpScreen
>;

export default function SignUpScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = () => {
    if (email.length === 0 || password.length === 0 || username.length === 0) {
      Alert.alert('Error', 'Please enter fill all data.');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User account created! Now updating profile...');
        return userCredential.user.updateProfile({
          displayName: username,
        });
      })
      .then(() => {
        console.log('User account created & signed in!');
        navigation.replace('MainTabs');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        } else {
          Alert.alert('Error', error.message);
        }
        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <View style={{ paddingVertical: 20, justifyContent: 'center', gap: 15 }}>
        <Header />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          style={SignUpStyle.textInput}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={SignUpStyle.textInput}
        />
        <TextInput
          style={SignUpStyle.textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={SignUpStyle.btn} onPress={handleSignup}>
          <Text style={SignUpStyle.text}>Sign Up</Text>
        </TouchableOpacity>

        <View style={SignUpStyle.container}>
          <Text>If you already have an account go to </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'brown',
              textDecorationLine: 'underline',
            }}
            onPress={() => {
              navigation.replace('LoginScreen');
            }}
          >
            {' '}
            login
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
