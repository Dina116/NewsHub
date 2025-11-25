import { StyleSheet } from 'react-native';

const ProfileScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'brown',
    marginBottom: 30,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  fieldContainer: {
    marginBottom: 25,
    borderBottomWidth:1,
    borderColor:'brown',
    borderWidth:1,
    borderRadius:15,
    padding:15,
  },
  label: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  actionsContainer: {
    // marginTop: 40,
    gap: 15,
    marginHorizontal:20,
    marginVertical:20,
  },
});
export default ProfileScreenStyle;
