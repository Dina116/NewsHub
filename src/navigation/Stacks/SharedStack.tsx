import ScreenNames from '../../screens/ScreenNames';
import ArticleDetails from '../../screens/ArticleDetails/ArticleDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
// import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const SharedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        
      }}
    >
      {/* <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} /> */}
      <Stack.Screen
        name={ScreenNames.ArticleDetails}
        component={ArticleDetails}
      />
    </Stack.Navigator>
  );
};
export default SharedStack;
