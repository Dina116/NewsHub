import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenNames from '../ScreenNames';
import { MainStackParamList } from '../../navigation/Stacks/mainStack';
import auth from '@react-native-firebase/auth';
import LoginScreenStyle from './LoginScreenStyle';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from './HeaderLoginScreen/Header';

type Props = NativeStackScreenProps<
  MainStackParamList,
  ScreenNames.LoginScreen
>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.length === 0 || password.length === 0) {
      Alert.alert('Error', 'Please enter your email and password.');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User logged in successfully!', userCredential.user.email);
        navigation.replace('MainTabs');
      })
      .catch(error => {
        console.error(error);
        let errorMessage = 'An unknown error occurred.';
        if (error.code === 'auth/invalid-email') {
          errorMessage = 'That email address is invalid!';
        } else if (
          error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password' ||
          error.code === 'auth/invalid-credential'
        ) {
          errorMessage = 'Invalid email or password. Please try again.';
        }
        Alert.alert('Login Failed', errorMessage);
      });
  };

  return (
    <SafeAreaView>
      <View style={{ paddingVertical: 20 ,justifyContent:'center',gap:15}}>
        <Header />
        <TextInput
          style={LoginScreenStyle.textInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={LoginScreenStyle.textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={LoginScreenStyle.btn} onPress={handleLogin}>
          <Text style={LoginScreenStyle.text}>Login</Text>
        </TouchableOpacity>

        <View style={LoginScreenStyle.container}>
          <Text>Don't have an account? </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'brown',
              textDecorationLine: 'underline',
            }}
            onPress={() => {
              navigation.replace(ScreenNames.SignUpScreen);
            }}
          >
            {' '}
            SignUp
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
