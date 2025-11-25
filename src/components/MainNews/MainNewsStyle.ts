import { StyleSheet } from 'react-native';

const MainNewsStyle = StyleSheet.create({
  container: {
    height: 250,
    width: 300,
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  whiteContainer: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: 10,
    marginTop: 100,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  redContainer: {
    backgroundColor: 'rgba(201, 13, 13, 0.97)',
    borderRadius: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  deadlineText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  name: {
    color: 'black',
    marginTop: 10,
  },
  listContainer: {
    marginTop: 20,
  },
});
export default MainNewsStyle;
