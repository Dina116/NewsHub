import { View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ArticleType } from '../../types/ArticleType';
import { get } from '../../util/helpers/apiService';
import { MainStackParamList } from '../../navigation/Stacks/mainStack';
import ScreenNames from '../../screens/ScreenNames';
import StackNames from '../../navigation/StackNames';
import GeneralNewsStyle from './GeneralNewsStyle';

const GeneralNews = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  const { navigate } =
    useNavigation<NavigationProp<MainStackParamList, ScreenNames.HomeScreen>>();

  useEffect(() => {
    getNews();
  }, []);

  function getNews() {
    const url = '/everything?domains=techcrunch.com,thenextweb.com';
    get(url)
      .then(response => {
        console.log('Full Response:', response.data);
        const articles = response.data?.articles.filter(
          (article: ArticleType) => article?.urlToImage !== null,
        );
        setArticles(articles);
      })
      .catch(error => {
        console.log('Response Error: ', error);
      });
  }
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
      <TouchableOpacity
        style={GeneralNewsStyle.cardContainer}
        onPress={() => goToArticleDetails(item)}
      >
        <Image
          style={GeneralNewsStyle.cardArticleImage}
          source={{ uri: item.urlToImage }}
        />
        <Text
          style={GeneralNewsStyle.cardArticleName}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {articles[0].title}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={GeneralNewsStyle.container}>
      <Text style={GeneralNewsStyle.sectionTitle}>Top News</Text>
      <FlatList
        data={articles}
        renderItem={({ item }) => renderItem(item)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GeneralNewsStyle.listContainer}
        scrollEnabled={false}
      />
    </View>
  );
};
export default GeneralNews;
