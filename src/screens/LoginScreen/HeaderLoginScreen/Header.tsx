import { Text, View } from 'react-native';
import HeaderStyle from './HeaderStyle';

const Header = () => {
  return (
    <View style={HeaderStyle.container}>
      <Text style={HeaderStyle.title}>Login</Text>
    </View>
  );
};
export default Header;