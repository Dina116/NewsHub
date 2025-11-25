import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainNewsStyle from './MainNewsStyle';
import { get } from '../../util/helpers/apiService';
import { useState, useEffect } from 'react';
import { ArticleType } from '../../types/ArticleType';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/Stacks/mainStack';
import ScreenNames from '../../screens/ScreenNames';
import StackNames from '../../navigation/StackNames';

const MainNews = () => {
  const [topNews, setTopNews] = useState([]);
  const { navigate } =
    useNavigation<NavigationProp<MainStackParamList, ScreenNames.HomeScreen>>();
  useEffect(() => {
    getTopNews();
  }, []);
  function getTopNews() {
    const url = '/top-headlines?country=us';
    get(url)
      .then(response => {
        console.log('Full Response:', response.data);
        const articles = response.data?.articles.filter(
          (article: ArticleType) => article?.urlToImage !== null,
        );
        setTopNews(articles);
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

  function renderNews(item: ArticleType) {
    return (
      <TouchableOpacity onPress={() => goToArticleDetails(item)}>
        <ImageBackground
          source={{
            uri: item.urlToImage,
          }}
          resizeMode="cover"
          style={MainNewsStyle.container}
        >
          <View style={MainNewsStyle.whiteContainer}>
            <View style={MainNewsStyle.redContainer}>
              <Text style={MainNewsStyle.deadlineText}>
                {item.source?.name}
              </Text>
            </View>
            <Text
              style={MainNewsStyle.name}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item.title}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  return (
    <FlatList
      data={topNews}
      renderItem={({ item }) => renderNews(item)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={MainNewsStyle.listContainer}
    />
  );
};
export default MainNews;
