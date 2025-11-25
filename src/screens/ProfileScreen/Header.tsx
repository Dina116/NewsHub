import { View, Text } from 'react-native';
import React from 'react';
import ProfileScreenStyle from './ProfileScreenStyle';

export default function Header() {
  return (
    <View style={ProfileScreenStyle.titleContainer}>
      <Text style={ProfileScreenStyle.title}>My Profile</Text>
    </View>
  );
}
