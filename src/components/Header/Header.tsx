import { Text, View } from 'react-native';
import HeaderStyle from './HeaderStyle';

const Header = () => {
  return (
    <View style={HeaderStyle.container}>
      <Text style={HeaderStyle.title}>World`s News</Text>
    </View>
  );
};
export default Header;
