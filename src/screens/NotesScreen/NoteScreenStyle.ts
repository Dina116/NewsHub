import { StyleSheet } from 'react-native';

const NoteScreenStyle = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'brown',
    fontStyle: 'italic',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: 'brown',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'brown',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 15,
  },
  noteText: { flex: 1, fontSize: 16 },
});
export default NoteScreenStyle;
