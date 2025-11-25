import { StyleSheet } from 'react-native';

const ArticleDetailsStyle = StyleSheet.create({
  safeContainer: {
    backgroundColor: 'white',
    flex: 1,
  },


  header: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backBtn: {
    backgroundColor: '#e48686ff',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 20,
  },
  goBackText: {
    color: 'black',
  },
  coverImage: {
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  dataContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
    color: 'brown',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 20,
  },
  addToFavBtn: {
    backgroundColor: '#e48686ff',
    padding: 10,
    borderRadius: 10,
    //width: '%100',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  addToFavText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
export default ArticleDetailsStyle;
