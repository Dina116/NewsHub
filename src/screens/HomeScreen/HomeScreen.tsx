import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import MainNews from '../../components/MainNews/MainNews';
import GeneralNews from '../../components/GeneralNews/GeneralNews';
import { ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <MainNews />
        <GeneralNews />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;

