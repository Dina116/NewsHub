import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';
import ScreenNames from '../ScreenNames';
import ArticleDetailsStyle from './ArticleDetailsStyle';
import { NativeModules } from 'react-native';
import { MainStackParamList } from '../../navigation/Stacks/mainStack';
import useFavStore from '../../store/FavStoreState';

const { ToastExample } = NativeModules;

export default function ArticleDetails() {
  const { goBack } = useNavigation();

  const { params } =
    useRoute<RouteProp<MainStackParamList, ScreenNames.ArticleDetails>>();

  const { article } = params ?? {};

  const { description, title, url, urlToImage } = article ?? {};

  const { addToFavList, removeFromFavList, isArticleFav } = useFavStore();
  const isFav = isArticleFav(url);

  function handleToggleFavourite() {
    if (isFav) {
      removeFromFavList(url);
      ToastExample.showToast('Removed from Favourites 🗑️');
    } else {
      addToFavList(article);
      ToastExample.showToast('Added to Favourites ❤️');
    }
  }

  return (
    <SafeAreaView style={ArticleDetailsStyle.safeContainer}>
      <ScrollView style={ArticleDetailsStyle.container}>
        <View style={ArticleDetailsStyle.header}>
          <TouchableOpacity
            style={ArticleDetailsStyle.backBtn}
            onPress={goBack}
          >
            <Ionicons name="chevron-back-outline" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: urlToImage }}
          style={ArticleDetailsStyle.coverImage}
        />
        <View style={ArticleDetailsStyle.dataContainer}>
          <Text style={ArticleDetailsStyle.title}>{title}</Text>
          <Text style={ArticleDetailsStyle.description}>{description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={ArticleDetailsStyle.addToFavBtn}
        onPress={() => {
          handleToggleFavourite();
        }}
      >
        <Text style={ArticleDetailsStyle.addToFavText}>
          {isFav ? 'Remove from Favourite' : 'Add To Favourite'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
