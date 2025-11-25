import { create } from 'zustand';
import { ArticleType } from '../types/ArticleType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

type FavStoreState = {
  favList: ArticleType[];
  addToFavList: (article: ArticleType) => void;
  removeFromFavList: (articleUrl: string) => void;
  isArticleFav: (articleUrl: string) => boolean;
};
const useFavStore = create(
  persist<FavStoreState>(
    (set, get) => ({
      favList: [],
      addToFavList: article =>
        set(state => ({ favList: [...state.favList, article] })),

      removeFromFavList: articleUrl =>
        set(state => ({
          favList: state.favList.filter(item => item.url !== articleUrl),
        })),

      isArticleFav: articleUrl => {
        const { favList } = get();
        return favList.some(item => item.url === articleUrl);
      },
    }),
    {
      name: 'fav-articles-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useFavStore;
