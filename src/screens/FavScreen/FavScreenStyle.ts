import { StyleSheet } from 'react-native';

const FavScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: 'brown',
    paddingEnd: 10,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 10,
  },
    cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardArticleName: {
    textAlign: 'left',
    flex: 1,
  },
  cardArticleImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  favtext: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'brown',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
export default FavScreenStyle;
