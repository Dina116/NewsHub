import { StyleSheet } from 'react-native';

const GeneralNewsStyle = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'brown',
    fontWeight: 'bold',
  },
  listContainer: {
    marginTop: 10,
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
  cardArticleName: {
    textAlign: 'left',
    flex: 1,
  },
  cardArticleImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
export default GeneralNewsStyle;
