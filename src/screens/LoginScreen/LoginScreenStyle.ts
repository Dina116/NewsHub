import { StyleSheet } from 'react-native';

const LoginScreenStyle = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'brown',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 16,
  },
  btn: {
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 16,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoginScreenStyle;
