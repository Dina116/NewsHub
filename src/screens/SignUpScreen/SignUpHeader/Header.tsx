import { Text, View } from 'react-native';
import HeaderStyle from './HeaderStyle';

const Header = () => {
  return (
    <View style={HeaderStyle.container}>
      <Text style={HeaderStyle.title}>Sign Up</Text>
    </View>
  );
};
export default Header;