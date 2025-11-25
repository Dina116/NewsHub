import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import useFavStore from '../../store/FavStoreState';
import { ArticleType } from '../../types/ArticleType';
import ScreenNames from '../ScreenNames';
import StackNames from '../../navigation/StackNames';
import FavScreenStyle from './FavScreenStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';

export default function FavScreen() {
  const { navigate } = useNavigation();
  const { favList, removeFromFavList } = useFavStore();

  function goToArticleDetails(article: ArticleType) {
    navigate(StackNames.SharedStack, {
      screen: ScreenNames.ArticleDetails,
      params: {
        article,
      },
    });
  }
  function renderItem(item: ArticleType) {
    return (
      <View style={FavScreenStyle.cardContainer}>
        <TouchableOpacity
          style={FavScreenStyle.cardContent}
          onPress={() => goToArticleDetails(item)}
        >
          <Image
            style={FavScreenStyle.cardArticleImage}
            source={{ uri: item.urlToImage }}
          />
          <Text
            style={FavScreenStyle.cardArticleName}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => removeFromFavList(item.url)}
          style={{ padding: 10 }}
        >
          <Ionicons name="trash" size={24} color="brown" />
        </TouchableOpacity>
      </View>
    );
  }
  //favList[0]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={FavScreenStyle.textContainer}>
        <Text style={FavScreenStyle.favtext}>Favorite Articles</Text>
      </View>
      <View style={FavScreenStyle.container}>
        <FlatList data={favList} renderItem={({ item }) => renderItem(item)} />
      </View>
    </SafeAreaView>
  );
}
